////////////////////////////////////////////////////////////////////////////////////////////
// Text Drawing Class, inherits from DisplayObjectContainer
////////////////////////////////////////////////////////////////////////////////////////////

function LcgText() {
  LcgDisplayObjectContainer.call(this);
  this.text = '';
  /**
		* Overloaded draw function, draws this.text on the screen
		*
		* @param 	{g} 		The canvas context that will draw the text
		* @param 	{offsetX} 	The X coordinate of the drawn text
		* @param 	{offsetY} 	The Y coordinate of the drawn text
		* @return 	{}
		*/
  this.draw = function (g, offsetX, offsetY) {
    var myX = offsetX + this.x;
    var myY = offsetY + this.y;
    g.font = '20px Georgia';
    g.fillText(this.text, myX, myY);
  }
}
