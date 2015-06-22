function LcgAnimation(location, frameTime, endTime, startFrame, frameCount, minChanges, endFrame, ext) {
    LcgDisplayObjectContainer.call(this);
    
    this.path = location;
    this.frameTime = frameTime;
    this.endTime = endTime;
    this.startFrame = startFrame;
    this.frameCount = frameCount;
    this.currentFrame = startFrame;
    this.minChanges = minChanges;
    this.endFrame = endFrame;
    this.changes = 0;
    this.ext = ext;
    
    var frames = [];
    var _this = this;
    
    //init frames
    for (var i = startFrame; i < startFrame + frameCount; i++) {
        var curFrame = new LcgImage(this.path + (i % frameCount) + "." + this.ext);
        frames.push(curFrame);
        this.addChildAt(curFrame, 0);
    }
    
    this.updateFrames = function() {
        var prevFrame = this.getChildAt(this.getNumChildren() - 1);
        this.removeChild(prevFrame);
        this.addChildAt(prevFrame, 0);
    };
    
    function changeFrame() {
        if (_this.changes >= minChanges && _this.currentFrame == endFrame) {
            var aniEvent = new LcgEvent(LcgEvent.ANIMATION_FINISHED, {});
            aniEvent.currentTarget = _this;
            setTimeout(function() {
                _this.dispatchEvent(aniEvent);
            }, _this.endTime);
            
            return;
        }
        
        _this.currentFrame = (_this.currentFrame + 1) % _this.frameCount;
        _this.updateFrames();
        setTimeout(changeFrame, frameTime);
        _this.changes++;
    }
    
    setTimeout(changeFrame, frameTime);
}