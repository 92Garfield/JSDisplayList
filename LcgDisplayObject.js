////////////////////////////////////////////////////////////////////////////////////////////
// DisplayObject class
// Basically a DisplayObjectContainer without children
////////////////////////////////////////////////////////////////////////////////////////////

function LcgDisplayObject() {


    LcgEventHandler.call(this);

    // the coordinates of the top left corner of the object
    this.x = 0;
    this.y = 0;
    
    this.width = 0;
    this.height = 0;
    
    this.alpha = 1;


    /**
     * @public
     * Functionality to be applied to this container every frame
     * @return 	{}
     */
    this.onEnterFrame = function () {
    };

    /**
     * @public
     * @abstract
     * Abstract draw function
     * @param 	{CanvasRenderingContext2D}  g   The canvas context that will be used to draw
     * @param 	{Number}                    offsetX The X coordinate of the container
     * @param 	{Number}                    offsetY The Y coordinate of the container
     * @param   {Number}                    alph cumulative alpha so far
     * @return 	{}
     */
    this.draw = function (g, offsetX, offsetY, alph) {
    };

    /**
     * @public
     * @abstract
     * THIS SHOULD NOT BE OVERLOADED!!!!! 
     * Empty function for conformity between this and DisplayObjectContainer
     * @param   {CanvasRenderingContext2D}  g The canvas context that will be used to draw
     * @param   {Number}                    offsetX The X coordinate of the container
     * @param   {Number}                    offsetY The Y coordinate of the container
     * @return 	{}
     */
    this.drawChildren = function (g, offsetX, offsetY) {
    };
}
