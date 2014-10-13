#!/usr/bin/env python

# This program reads the output from Microsoft's PSR program, and does interesting things with it

import email
import sys
import re
import base64
import string

if len(sys.argv) == 1 or sys.argv[1] == "-":
    mhtfile = email.message_from_file(sys.stdin)
else:
    mhtfile = email.message_from_file(open(sys.argv[1]))

def quick_simple_xml_search(key,source):
    tag = "<" + key + ">"
    end_tag = "</" + key + ">"
    if tag not in source:
        sys.stderr.write("Missing " + key + " in " + source + "\n")
        raise KeyError,key
    if end_tag not in source: raise ValueError,key
    start_pos = source.index(tag) + len(tag)
    end_pos = source.index(end_tag)
    return source[start_pos:end_pos]

class PSRAction:
    def __init__(self,each_action_xml):
        if "<UserComment>" in each_action_xml:
            self.__action = "User comment"
            self.__description = quick_simple_xml_search("UserComment",each_action_xml)
        else:
            self.__action = quick_simple_xml_search("Action",each_action_xml)
            self.__description = quick_simple_xml_search("Description",each_action_xml)
        # Doesn't matter if it is a user comment or a real action, we can look for a screenshot
        try:
            self.__screenshot = quick_simple_xml_search("ScreenshotFileName",each_action_xml)
        except KeyError:
            self.__screenshot = None
    def description(self): return self.__description
    def screenshot(self): return self.__screenshot
    def action(self): return self.__action

class RecordingSession:
    def __init__(self,psr_xml):
        actions_source_start = psr_xml.index(">",psr_xml.index("<RecordSession"))
        actions_source_end = psr_xml.index("</RecordSession>")
        actions_source = psr_xml[actions_source_start+1:actions_source_end]
        self.__actions = []
        while "<EachAction" in actions_source:
            #print actions_source.strip().split('\n')[0]
            start_pos = actions_source.index(">", actions_source.index("<EachAction"))
            end_pos = actions_source.index("</EachAction>")
            self.__actions.append(PSRAction(actions_source[start_pos+1:end_pos]))
            actions_source = actions_source[end_pos+len('</EachAction>'):]
    def actions(self):
        return self.__actions
        
        

def handle_mainpart(part):
    for subpart in part.walk():
        # Actually there is only one part. It sort-of looks like
        # an HTML document, except that there is a chunk of xml at the top
        # The XML at the top is probably the most interesting.
        html_and_xml = subpart.as_string()
        start_marker = '<xml id="recordeddata">'
        end_marker = '</xml>'
        start_point = html_and_xml.index(start_marker) + len(start_marker)
        end_point = html_and_xml.index(end_marker)
        xml_only = html_and_xml[start_point:end_point]
        recording_session = RecordingSession(xml_only)
        for action in recording_session.actions():
            if action.screenshot() is None:
                print action.description()
            else:
                print "!["+ action.description() + "](" + action.screenshot() + ")"
            print
            print "------------------------------"
            print


section_number = 0
for part in mhtfile.walk():
    section_number += 1
    if section_number == 1:
        continue
    if section_number == 2:
        handle_mainpart(part)
        continue
    if section_number == 3:
        # Ignore CSS part
        continue
    if part.get_content_type() == "text/html":
        # Then it's the weird slide stuff
        continue
    if part.get_content_type() == "image/jpeg":
        # The screenshots
        line_split = part.as_string().split('\n')
        filename = line_split[2][len('Content-Location: '):]
        #sys.stderr.write("Writing " + filename + "\n")
        binary_data = base64.b64decode(string.join(line_split[4:],'\n'))
        output_file = open(filename,'wb')
        output_file.write(binary_data)
        output_file.close()
        
    #if section_number == 4:
    #    print part.as_string()
    #print part.get_content_type()

