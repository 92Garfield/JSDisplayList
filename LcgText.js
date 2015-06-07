////////////////////////////////////////////////////////////////////////////////////////////
// Text Drawing Class, inherits from DisplayObjectContainer
////////////////////////////////////////////////////////////////////////////////////////////

function LcgText() {
    LcgDisplayObjectContainer.call(this);
    this.text = '';
    this.font = 'Georgia';
    this.size = 20;
    this.color = "#000000";
    /**
     * Overloaded draw function, draws this.text on the screen
     *
     * @param 	{CanvasRenderingContext2D}  g The canvas context that will draw the text
     * @param 	{int}                       offsetX The X coordinate of the drawn text
     * @param 	{int}                       offsetY The Y coordinate of the drawn text
     * @return 	{}
     */
    this.draw = function (g, offsetX, offsetY) {
        var myX = offsetX + this.x;
        var myY = offsetY + this.y;
        g.font = this.size + "px " + this.font;
        g.fillStyle = this.color;
        g.fillText(this.text, myX, myY);
    };
}
