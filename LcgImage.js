function LcgImage(path) {
    LcgDisplayObjectContainer.call(this);

    var _this = this;

    this.img = document.createElement("img");
    this.img.src = path;
    this.img.addEventListener("load", doneLoading);

    this.width = 0;
    this.height = 0;
    this.crop = false;
    this.cropArea = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };

    this.forceSize = false;

    this.draw = function (g, offsetX, offsetY) {
        var myX = offsetX + this.x;
        var myY = offsetY + this.y;
        if (this.crop) {
            g.drawImage(this.img,
                    this.cropArea.x, this.cropArea.y, this.cropArea.width, this.cropArea.height,
                    myX, myY, this.width, this.height);
        } else {
            g.drawImage(this.img, myX, myY, this.width, this.height);
        }
    }

    this.getPath = function() {
        return path;
    }

    this.setPath = function(newPath) {
        this.img.removeEventListener("load", doneLoading);
        this.img = document.createElement("img");
        this.img.src = newPath;
        this.img.addEventListener("load", doneLoading);
    }

    function doneLoading(e) {
        if (!_this.forceSize) {
            _this.width = _this.img.width;
            _this.height = _this.img.height;
        }
    }
}
