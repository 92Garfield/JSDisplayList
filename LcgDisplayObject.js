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
     * @param 	{canvasContext} 	The canvas context that will be used to draw
     * @param 	{float} 	        The X coordinate of the container
     * @param 	{float} 	        The Y coordinate of the container
     * @param   {float}             cumulative alpha so far
     * @return 	{}                  product of all alpha so far
     */
    this.draw = function (g, offsetX, offsetY, alph) {
    };

    /**
     * @public
     * @abstract
     * THIS SHOULD NOT BE OVERLOADED!!!!! 
     * Empty function for conformity between this and DisplayObjectContainer
     * @param   {canvasContext}     The canvas context that will be used to draw
     * @param   {float}             The X coordinate of the container
     * @param   {float}             The Y coordinate of the container
     * @return 	{}
     */
    this.drawChildren = function (g, offsetX, offsetY) {
    };
}
