var image_slots = { A: { loading: false, occupied: false }, B: { loading: false, occupied: false }};

function load_image(which) {
    var file_chooser = document.getElementById("file" + which);

    console.log("load_image(" + which + ")");
    if (! (which in image_slots)) { alert("Unknown image slot: " + which); return; }
    if (image_slots[which].loading) { console.log("Already loading " + which);  setTimeout(250,function () { load_image(which); }); return;}
    image_slots[which].loading = true;
    var html_slot = document.getElementById("image" + which);
    var full_slot = document.getElementById("fullimage" + which);
    console.log("Got HTML slot");
    if (html_slot == null || html_slot == undefined) { alert("Missing slot: " + which); return; }

    var file_reader = new FileReader();
    file_reader.onload = function (result) {
	html_slot.src = result.srcElement.result;
	full_slot.src = result.srcElement.result;
	image_slots[which].loading = false;
	image_slots[which].occupied = true;
	// Then check here to see if both slot A and B are occupied, in which case start analysis
	if (image_slots.A.occupied && image_slots.B.occupied) {
	    find_best_alignment("fullimageA","fullimageB");
	}
    }
    file_reader.readAsDataURL(file_chooser.files[0]);
}


function init() {

}


function find_best_alignment (imageA,imageB) {
    var srcA = document.getElementById(imageA);
    var srcB = document.getElementById(imageB);
    var canvasA = document.getElementById("canvasA");
    var canvasB = document.getElementById("canvasB");

    canvasA.width = srcA.width;
    canvasA.height = srcA.height;
    canvasB.width = srcB.width;
    canvasB.height = srcB.height;
    
    var ctxA = canvasA.getContext('2d');
    var ctxB = canvasB.getContext('2d');
    
    ctxA.drawImage(srcA,0,0);
    ctxB.drawImage(srcB,0,0);

    var a_data = ctxA.getImageData(0,0,srcA.width,srcA.height);
    var b_data = ctxB.getImageData(0,0,srcB.width,srcA.height);

    var start_time = Date.now();
    var sampling = 16;
    var max_translation = 50;
    var smallest_difference, best_x_delta, best_y_delta;
    samllest_difference = null;
    var x,y,x_delta,y_delta;
    for (y_delta=-max_translation;y_delta<max_translation;y_delta++) {
	for (x_delta=-max_translation;x_delta<max_translation;x_delta++) {
	    var cumulative_difference = 0;
	    var pixels_differing = 0;
	    for(y=0;y<a_data.height && y+y_delta<b_data.height;y+=sampling) {
		for(x=0;x<a_data.height && x+x_delta<b_data.height;x+=sampling) {
		    var yb = y + y_delta;
		    var xb = x + x_delta;
		    if (xb < 0) { continue; }
		    if (yb < 0) { continue; }
		    var a_pos = 4 * (y * a_data.width + x);
		    var b_pos = 4 * (yb * b_data.width + xb);
		    var r_delta = Math.abs(a_data.data[a_pos] - b_data.data[b_pos]);
		    var g_delta = Math.abs(a_data.data[a_pos+1] - b_data.data[b_pos+1]);
		    var b_delta = Math.abs(a_data.data[a_pos+2] - b_data.data[b_pos+2]);
		    cumulative_difference += r_delta + g_delta + b_delta;
		    pixels_differing += (r_delta == 0 && g_delta == 0 && b_delta == 0) ? 0 : 1;
		}
	    }
	    if (smallest_difference == null || smallest_difference > pixels_differing) {
		smallest_difference = pixels_differing;
		best_x_delta = x_delta;
		best_y_delta = y_delta;
	    }
	}
    }
    var end_time = Date.now();
    console.log("Pixels differing count: ",smallest_difference);
    console.log("That took " + (end_time - start_time)/1000.0 + " seconds to calculate");
    console.log("Best delta: (" + best_x_delta + "," + best_y_delta + ")");
}