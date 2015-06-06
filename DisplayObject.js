////////////////////////////////////////////////////////////////////////////////////////////
// DisplayObject class
// Basically a DisplayObjectContainer without children
////////////////////////////////////////////////////////////////////////////////////////////

function DisplayObject() {
    this.x = 0;
    this.y = 0;
    /**
     * Functionality to be applied to this container every frame
     * @return 	{}
     */
    this.onEnterFrame = function () {
    }
    /**
     * Abstract draw function
     * @param 	{g} 		The canvas context that will be used to draw
     * @param 	{offsetX} 	The X coordinate of the container
     * @param 	{offsetY} 	The Y coordinate of the container
     * @return 	{}
     */

    this.draw = function (g, offsetX, offsetY) {
    }
    /**
     * Empty function for conformity between this and DisplayObjectContainer
     * @param 	{g} 		The canvas context that will be used to draw
     * @param 	{offsetX} 	The X coordinate of the container
     * @param 	{offsetY} 	The Y coordinate of the container
     * @return 	{}
     */

    this.drawChildren = function (g, offsetX, offsetY) {
    }
}