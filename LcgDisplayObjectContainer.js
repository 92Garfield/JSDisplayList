////////////////////////////////////////////////////////////////////////////////////////////
// DisplayObjectContainer class, inherits from DisplayObject
// Basically a DisplayObject with children
////////////////////////////////////////////////////////////////////////////////////////////

function LcgDisplayObjectContainer() {
    LcgDisplayObject.call(this);
    // Children of this DisplayObjectContainer whose draw method it will call every frame
    // Typically all of them should be of type DisplayObject
    var displayList = [
    ];

    /**
     * Adds a DisplayObject to the displayList
     * @param 	{DisplayObject} displayObject to be added
     * @return 	{boolean}       True if the DisplayObject was added, false otherwise.
     */
    this.addChild = function (displayObject) {
        var dlLength = displayList.length;
        for (var i = 0; i < dlLength; i++) {
            if (displayList[i] == displayObject) {
                return false;
            }
        }
        displayList.push(displayObject);
        return true;
    };

    /**
     * Adds a DisplayObject to the displayList at a given position
     * @param 	{DisplayObject} displayObject to be added
     * @param 	{int}    	index of the Display Object to be added in the display list
     * @return 	{boolean} 	True if the DisplayObject was added, false otherwise
     */
    this.addChildAt = function (displayObject, index) {
        if (index < 0)
            return false;
        var dlLength = displayList.length;
        for (var i = 0; i < dlLength; i++) {
            if (displayList[i] == displayObject) {
                return false;
            }
        }
        if (index < dlLength) {
            displayList.splice(index, 1, displayObject);
        }
        else {
            displayList.push(displayObject);
        }
        return true;
    }

    /**
     * Seraches for a DisplayObject in the displayList
     * @param 	{DisplayObject} displayObject that will be searched for
     * @return 	{int} 		The index of the DisplayObject if found, or -1 otherwise
     */
    this.findChild = function (displayObject) {
        var dlLength = displayList.length;
        for (var i = 0; i < dlLength; i++) {
            if (displayList[i] == displayObject) {
                displayList.splice(i, 1);
                return i;
            }
        }
        return -1;
    }

    /**
     * Searches for and removes a DisplayObject from the displayList
     * @param 	{DisplayObject} displayObject to be removed
     * @return 	{boolean} 	True if the DisplayObject was removed, false otherwise
     */
    this.removeChild = function (displayObject) {
        var dlLength = displayList.length;
        var foundObjectAt = this.findChild(displayObject);
        if (foundObjectAt != -1) {
            displayList.splice(foundObjectAt, 1);
            return true;
        }
        return false;
    }

    /**
     * Removes a DisplayObject from the displayList based off of its index
     * @param 	{int}       index of the Display Object to be removed in the display list
     * @return 	{boolean}   True if the DisplayObject was removed, false otherwise.
     */
    this.removeChildAt = function (index) {
        if (index < 0 || index >= displayList.length) {
            return false;
        }
        else {
            return true;
        }
    }

    /**
     * Returns the child at a certain index
     * @param 	{int}    	index of the Display Object to be fetched from the display list
     * @return 	{DisplayObject} The display object if the index is in range, null otherwise
     */
    this.getChildAt = function (index) {
        if (index < 0 || index >= displayList.length) {
            return null;
        }
        else {
            return displayList[index];
        }
    }

    /**
     * Returns the number of children in the displayList
     * @return 	{int} 	The length of displayList
     */
    this.getNumChildren = function () {
        return displayList.length;
    }

    /**
     * Calls the draws the children of this container and their children
     * @param 	{CanvasRenderingContext2D}  g The canvas context that will be used to draw
     * @param 	{int}                       offsetX The X coordinate of the container
     * @param 	{int}                       offsetY The Y coordinate of the container
     * @return 	{}
     */
    this.drawChildren = function (g, offsetX, offsetY) {
        var dlLength = displayList.length;
        for (var i = 0; i < dlLength; i++) {
            displayList[i].onEnterFrame();
            displayList[i].draw(g, offsetX, offsetY);
            displayList[i].drawChildren(g, offsetX + displayList[i].x, offsetY + displayList[i].y);
        }
    }
}
