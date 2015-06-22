/**
 * @constructor
 * @param {String} location The path to the folder with the frames. (ending with "/")
 * @param {Number} frameTime The time between frames.
 * @param {Number} endTime The time after the last Animation frame.
 * @param {Number} startFrame The frame to start the Animation,
 * @param {Number} frameCount Amount of frames in the folder at location.
 * @param {Number} minChanges Minimum amount of frame changes before end.
 * @param {Number} endFrame The last frame of the Animation.
 * @param {String} ext File extionsion. (without ".")
 * @returns {LcgAnimation}
 */

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
    
    /**
     * @public
     * Makes the next frame to the top-most in the displaylist
     * @return 	{void}
     */
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