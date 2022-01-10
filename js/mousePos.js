var mouseX = 0;
var mouseY = 0;

$(document).mousemove(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY

    mouseX = e.clientX;
    mouseY = e.clientY;

});