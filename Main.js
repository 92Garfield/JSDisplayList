////////////////////////////////////////////////////////////////////////////////////////////
// Sample usage of the API
////////////////////////////////////////////////////////////////////////////////////////////
var initComplete = false;
document.addEventListener("DOMContentLoaded", init);
init();
function init() {
    if (!document.body || initComplete) return;
    //alert("init");
    initComplete = true;
    document.body.innerHTML = '<div><canvas id="gantt" width="800" height="500"></canvas></div>';
    var ganttCanvas = document.getElementById('gantt');
    var stage = new Stage(ganttCanvas);
    var txt = new Text();
    txt.y = 20;
    txt.x = 2;
    stage.addChild(txt);
    txt.t = new Date();
    var dot = new Disk();
    dot.y = 100;
    dot.x = 100;
    stage.addChild(dot);
    txt.onEnterFrame = function () {
       var t1 = new Date();
       var delta = t1.getTime() - this.t.getTime();
       this.text = Math.round((1 / delta) * 1000) + ' fps';
       this.t = t1;
    } 
}