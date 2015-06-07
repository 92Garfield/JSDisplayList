////////////////////////////////////////////////////////////////////////////////////////////
// DisplayObject class
// Basically a DisplayObjectContainer without children
////////////////////////////////////////////////////////////////////////////////////////////

function LcgDisplayObject() {
    this.x = 0;
    this.y = 0;
    
    this.width = 0;
    this.height = 0;
    
    this.alpha = 1;
    /**
     * Functionality to be applied to this container every frame
     * @return 	{}
     */
    this.onEnterFrame = function () {
    };
    /**
     * Abstract draw function
     * @param 	{g} 		The canvas context that will be used to draw
     * @param 	{offsetX} 	The X coordinate of the container
     * @param 	{offsetY} 	The Y coordinate of the container
     * @return 	{}
     */

    this.draw = function (g, offsetX, offsetY) {
    };
    /**
     * Empty function for conformity between this and DisplayObjectContainer
     * @param 	{g} 		The canvas context that will be used to draw
     * @param 	{offsetX} 	The X coordinate of the container
     * @param 	{offsetY} 	The Y coordinate of the container
     * @return 	{}
     */

    this.drawChildren = function (g, offsetX, offsetY) {
    };
}
