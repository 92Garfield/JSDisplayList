function LcgImage(path) {
    LcgDisplayObjectContainer.call(this);

    var _this = this;

    this.img = document.createElement("img");
    this.img.src = path;
    this.img.addEventListener("load", doneLoading);

    this.width = 0;
    this.height = 0;
    
    /**
     * Crop the image to cropArea
     * @type {boolean}
     */
    this.crop = false;
    this.cropArea = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    
    /**
     * Resize image to width and height.
     * @type {boolean}
     */
    this.forceSize = false;

    /**
     * Draws the image at given position, with given crop and size.
     * @param 	{CanvasRenderingContext2D}  g The canvas context that will be used to draw
     * @param 	{int}                       offsetX The X coordinate of the container
     * @param 	{int}                       offsetY The Y coordinate of the container
     * @return 	{}
     */
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
    };

    /**
     * Returns the current image path.
     * @return 	{String}    The path of the image.
     */
    this.getPath = function() {
        return path;
    };

    /**
     * Sets a new path for the image and reloads form there.
     * @param   {String} newPath The new path of the image.
     * @return 	{}
     */
    this.setPath = function(newPath) {
        this.img.removeEventListener("load", doneLoading);
        this.img = document.createElement("img");
        this.img.src = newPath;
        this.img.addEventListener("load", doneLoading);
    };

    function doneLoading(e) {
        if (!_this.forceSize) {
            _this.width = _this.img.width;
            _this.height = _this.img.height;
        }
    }
}
