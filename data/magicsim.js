var course_content = [
    // 0
    { 'image': 'img00100.png', 'click': {'target': 1 }, 
      "message" : { "text": "<b>Welcome</b> to this demonstration.<br> Click anywhere to begin.",
		    "x": 400 , "y": 200 }
    },


    // 1
    { 'image': 'img00101.png', 
      'mouseover': { 'target':  2, 'left': 168, 'top': 334, 'right': 202, "bottom": 360 },
      'click': { 'target': 3,  'left': 168, 'top': 334, 'right': 202, "bottom": 360 },
      "message": { "text": "<p width=50>In this demonstration you will learn how to use<br>a calculator and see lots of fancy features in<br>Greg's e-learning simulation tool.</p><p width=50>Move your mouse over the number 1 on the calculator.<br> Or, if you are on a tablet, just click on it.</p>",
		   "x": 400, "y": 150 }
    },

    // 2
    { 'image': 'img00102.png', 
      'click': {'target': 3,  'left': 168, 'top': 334, 'right': 202, "bottom": 360 },
      'mouseout': {'target': 1 , 'left': 168, 'top': 334, 'right': 202, "bottom": 360 },
      'message': { "text": "<p>Did you like how the button highlighted,<br>just like a <b>real application</b> would?</p><p>Click the button now.</p>", "x": 230, "y": 400 }
    },


    // 3
    { 'image': 'img00103.png', 
      "message": { "text": "<p>And the button goes down!</p>", "x": 230, "y": 400},
      "autostep": { "wait": 1000, "target": 4 }
    },

    // 4
    { 'image': 'img00104.png', 
      "message": { "text": "<p>And back up again!</p><p>Move your mouse away now.</p><p>On a tablet, just click on the plus key.</p>", "x": 230, "y": 400},
      'click': {'target': 7, 'left': 280, 'top': 370, 'right': 317, 'bottom': 391 },
      'mouseout': {'target': 5 , 'left': 168, 'top': 334, 'right': 202, "bottom": 360 }
    },

    // 5
    { 'image': 'img00105.png', 
      'mouseover': {'target': 6, 'left': 280, 'top': 370, 'right': 317, 'bottom': 391 },
      'click': {'target': 7, 'left': 280, 'top': 370, 'right': 317, 'bottom': 391 },
      "message" : { "text": "<p>Leaving the button makes it unhighlight.</p><p>Mouse over the + now.</p><p>If you are on a touch screen, just click it.</p>", "x": 230, "y": 400 }
    },

    // 6
    { 'image': 'img00106.png', 
      'mouseout': {'target': 5, 'left': 280, 'top': 370, 'right': 317, 'bottom': 391 },
      'message': { 'text': "<p>Notice what happens if you change your mind and move out.</p><p>Click when you've seen it.</p>", "x": 250, "y": 420 },

      'click': {'target': 7, 'left': 280, 'top': 370, 'right': 317, 'bottom': 391 }},

    // 7
    { 'image': 'img00107.png', 
      'autostep': { 'wait': 500, 'target': 8 },
    },

    // 8
    { 'image': 'img00108.png',
      "message": { "text": '<h2>Attention!</h2><p>This notice has formatting.<hr>Go and press the <i>1</i> button again.', "x": 400, "y": 100 },
      'mouseover': { 'target':  9, 'left': 168, 'top': 334, 'right': 202, "bottom": 360 },
      'click': { 'target': 10,  'left': 168, 'top': 334, 'right': 202, "bottom": 360 }
    },

    // 9
    { 'image': 'img00109.png', 
      'click': {'target': 10, 'left': 168, 'top': 334, 'right': 202, "bottom": 360 },
      'mouseout': { 'target':  8, 'left': 168, 'top': 334, 'right': 202, "bottom": 360 }
    },

    // 10
    { 'image': 'img00110.png', 'click': {'target': 11 },
      "autostep": { 'wait': 500, 'target': 11 }
    },

    // 11
    { 'image': 'img00102.png',
      'mouseout': { 'target':  12, 'left': 168, 'top': 334, 'right': 202, "bottom": 360 },
      'message': { "text": "<p>Before you press the = sign, use <tt>Ctrl-Shift-Plus</tt><br> or <tt>Ctrl-Shift-Minus</tt> on your keyboard to scale and zoom.<br>We can cope with any sized screen!</p>", 'x': 400, 'y': 200 }
    },

    // 12
    { 'image': 'img00111.png', 
      "message": {"text": "<p>Before you press the = sign, use <tt>Ctrl-Shift-Plus</tt><br> or <tt>Ctrl-Shift-Minus</tt> on your keyboard to scale and zoom<br>We can cope with any sized screen!</p>",
		  "x": 400, "y": 200 },
      'mouseover': {'target': 13 , 'left': 326, 'top': 368, 'right': 357, 'bottom': 390 },
      'click': {'target': 14 , 'left': 326, 'top': 368, 'right': 357, 'bottom': 390 }
    },

    // 13
    { 'image': 'img00112.png', 
      'click': {'target': 14 , 'left': 326, 'top': 368, 'right': 357, 'bottom': 390 },
      'mouseout': {'target': 12 , 'left': 326, 'top': 368, 'right': 357, 'bottom': 390 },
    },

    // 14
    { 'image': 'img00113.png', 'autostep': {'wait': 500, 'target': 15 }},

    // 15
    { 'image': 'img00114.png', 
      'autostep': {'wait': 1500, 'target': 16 },
      'mouseout': {'target': 16 , 'left': 326, 'top': 368, 'right': 357, 'bottom': 390 },
    },

    // 16
    { 'image': 'img00115.png', 
      "message": { "text": "<p>Congratulations, you have finished this lesson.<br>Click anywhere to start over.", "x": 150, "y": 450 },
      'click': {'target': 0 },
    }
];
var course_position = -1;


function start_course() {
    course_position = 0;
    display_content();
}

var preload_list = [];
function trigger_preloading() {
    var i;
    for(i=0;i<preload_list.length;i++) {
	var next_im = document.getElementById("next" + i);
	next_im.src = preload_list[i];
	//console.log("Preloaded ",preload_list[i]);
    }
}

function preload(target) {
    preload_list.push(course_content[target].image);
}



var current_timer = null;
function display_content() {
    preload_list = [];
    //console.log("moving to ",course_position);
    var im = document.getElementById("screenshot");
    var floater = document.getElementById("floaterdiv");
    var current_page = course_content[course_position];
    im.src = current_page.image;
    if (current_page.click == undefined) { im.onclick = null; floater.onclick = null } 
    else { im.onclick = handle_click; floater.onclick = handle_click; preload(current_page.click.target); }

    if (current_page.message == undefined) { 
	floater.style.display = "none";
	floater.innerHtml = "";
	//console.log("No message");
    } else {
	floater.style.display = "block";
	floater.style.left = current_page.message.x;
	floater.style.top = current_page.message.y;
	floater.innerHTML = current_page.message.text;
	//console.log("Message displayed" + current_page.message.text);
    }
    if (current_page.mouseover == undefined && current_page.mouseout == undefined) { im.onmousemove = null; } else {
	im.onmousemove = handle_mousemove; 
	if (current_page.mouseover != undefined) { preload(current_page.mouseover.target); }
	if (current_page.mouseout != undefined) { preload(current_page.mouseout.target); }
    }
    if (current_timer != null) { clearTimeout(current_timer);}
    if (current_page.autostep == undefined) {  current_timer = null;  } else { 
	current_timer = setTimeout(handle_autostep,current_page.autostep.wait); 
	preload(current_page.autostep.target);
    }
    trigger_preloading();
}

function handle_autostep() {
    var current_page = course_content[course_position];
    if (current_page.autostep == undefined) { /* Huh? */ return; }
    course_position = current_page.autostep.target;
    display_content();
}

function handle_mousemove(event) {
    event = event || window.event; // IE-ism?
    var current_page = course_content[course_position];
    if (current_page.mouseover != undefined) { 
	if (event.pageX >= current_page.mouseover.left && event.pageX <= current_page.mouseover.right &&
	    event.pageY >= current_page.mouseover.top && event.pageY <= current_page.mouseover.bottom) {
	    course_position = current_page.mouseover.target;
	    display_content();
	    return;
	}
    }
    if (current_page.mouseout != undefined) { 
	if (event.pageX < current_page.mouseout.left || event.pageX > current_page.mouseout.right ||
	    event.pageY < current_page.mouseout.top || event.pageY > current_page.mouseout.bottom) {
	    course_position = current_page.mouseout.target;
	    display_content();
	    return;
	}
    }
}

function handle_click(event) {
    event = event || window.event;
    //console.log("Click at ",event.pageX,event.pageY);
    var current_page = course_content[course_position];
    if (current_page.click == undefined) { /* Huh? */ return; }
    if (current_page.click.left != undefined && event.pageX < current_page.click.left) { return; }
    if (current_page.click.right != undefined && event.pageX > current_page.click.right) { return; }
    if (current_page.click.top != undefined && event.pageY < current_page.click.top) { return; }
    if (current_page.click.bottom != undefined && event.pageY > current_page.click.bottom) { return; }
    course_position = current_page.click.target; 
    display_content();
}