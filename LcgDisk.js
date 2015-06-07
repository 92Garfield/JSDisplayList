////////////////////////////////////////////////////////////////////////////////////////////
// Disk drawing class, inherits from DisplayObjectContainer
////////////////////////////////////////////////////////////////////////////////////////////

function LcgDisk() {
    DisplayObjectContainer.call(this);
    this.radius = 4;
    this.color = 'black';
    /**
     * Overloaded draw function, draws a disk of radius this.radius and color this.color on the screen
     *
     * @param 	{g} 		The canvas context that will draw the text
     * @param 	{offsetX} 	The X coordinate of the drawn text
     * @param 	{offsetY} 	The Y coordinate of the drawn text
     * @return {}
     */
    this.draw = function (g, offsetX, offsetY) {
        var myX = offsetX + this.x;
        var myY = offsetY + this.y;
        g.fillStyle = '#000000';
        g.beginPath();
        g.arc(myX, myY, this.radius, 0, Math.PI * 2);
        g.fillStyle = this.color;
        g.fill();
        g.fillStyle = this.color;
        g.stroke();
    }
}
