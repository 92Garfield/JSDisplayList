////////////////////////////////////////////////////////////////////////////////////////////
// Rectangle drawing class, inherits from DisplayObjectContainer
////////////////////////////////////////////////////////////////////////////////////////////

function LcgRect() {
    LcgDisplayObjectContainer.call(this);
    this.color = 'black';

    /**
     * Overloaded draw function, draws a rectangle of radius this.radius and color this.color on the screen
     *
     * @param 	{CanvasRenderingContext2D}  g       { The canvas context that will draw the text }
     * @param 	{Number}                    offsetX { The X coordinate of the drawn text }
     * @param 	{Number}                    offsetY { The Y coordinate of the drawn text }
     * 
     * @return {}
     */
    this.draw = function (g, offsetX, offsetY) {
        var myX = offsetX + this.x;
        var myY = offsetY + this.y;

        g.fillStyle = this.color;
        g.fillRect(this.x + offsetX, this.y + offsetY, this.width, this.height);
    };

}
