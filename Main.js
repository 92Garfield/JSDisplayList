////////////////////////////////////////////////////////////////////////////////////////////
// Sample usage of the API
////////////////////////////////////////////////////////////////////////////////////////////
var initComplete = false;
document.addEventListener("DOMContentLoaded", init);
init();
function init() {

    if (!document.body || initComplete) return;
    initComplete = true;
    document.body.innerHTML = '<div><canvas id="stage" width="800" height="500"></canvas></div>';
    var ganttCanvas = document.getElementById('stage');
    var stage = new LcgStage(ganttCanvas);
    var txt = new LcgText();
    txt.x = 2;
    txt.y = 20;
    stage.addChild(txt);
    txt.t = new Date();

    var dot = new LcgDisk();
    dot.x = 100;
    dot.y = 100;
    stage.addChild(dot);

    txt.onEnterFrame = function () {
        var t1 = new Date();
        var delta = t1.getTime() - this.t.getTime();
        this.text = Math.round((1 / delta) * 1000) + ' fps';
        this.t = t1;
    };

    var img = new LcgImage("QP.BMP");
    img.x = 200;
    img.y = 100;
    img.alpha = .5;
    stage.addChild(img);
    
    img = new LcgImage("QP.BMP");
    img.x = 232;
    img.y = 132;
    img.alpha = .75;
    stage.addChild(img);

    img.addEventListener(LcgEvent.CLICK, function(e) {console.log("SUCCESS"); console.log(e);});
}
