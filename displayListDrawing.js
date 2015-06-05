// Sample usage of the API
////////////////////////////////////////////////////////////////////////////////////////////
document.body.innerHTML = '<div><canvas id="gantt" width="800" height="500"></canvas></div>';
var ganttCanvas = document.getElementById('gantt');
var stage = new Stage(ganttCanvas);
var txt = new Text();
txt.y = 20;
txt.x = 2;
stage.addChild(txt);
txt.t = new Date();
var dot = new Disk();
dot.y = 100;
dot.x = 100;
stage.addChild(dot);
txt.onEnterFrame = function () {
  var t1 = new Date();
  var delta = t1.getTime() - this.t.getTime();
  this.text = Math.round((1 / delta) * 1000) + ' fps';
  this.t = t1;
}
////////////////////////////////////////////////////////////////////////////////////////////
// Text Drawing Class, inherits from DisplayObjectContainer
////////////////////////////////////////////////////////////////////////////////////////////

function Text() {
  DisplayObjectContainer.call(this);
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
////////////////////////////////////////////////////////////////////////////////////////////
// Disk drawing class, inherits from DisplayObjectContainer
////////////////////////////////////////////////////////////////////////////////////////////

function Disk() {
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
////////////////////////////////////////////////////////////////////////////////////////////
// Stage class, inherits from DisplayObjectContainer
// The root DisplayObjectContainer that contains the main loop that draws all objects in the scene periodically
////////////////////////////////////////////////////////////////////////////////////////////

function Stage(canvas) {
  DisplayObjectContainer.call(this);
  var frameRate = 60;
  var g = canvas.getContext('2d');
  var _this = this;
  /**
		* Overloaded draw function, simply draws all the children of the Stage
		* @return {}
		*/
  this.draw = function () {
    this.onEnterFrame();
    this.drawChildren(g, 0, 0);
  }
  /**
		* Frame function or Main Loop function
		* Calls itself once every 1000/framerate milliseconds
		* Draws the canvas rectangle then calls the draw method
		* @return {}
		*/

  function doFrame() {
    g.clearRect(0, 0, canvas.height, canvas.width);
    _this.draw();
    setTimeout(doFrame, 1000 / frameRate);
  }
  // Calls the doFrame method for the first time during construction

  doFrame();
}

////////////////////////////////////////////////////////////////////////////////////////////
// DisplayObjectContainer class, inherits from DisplayObject
// Basically a DisplayObject with children
////////////////////////////////////////////////////////////////////////////////////////////

function DisplayObjectContainer() {
  DisplayObject.call(this);
  // Children of this DisplayObjectContainer whose draw method it will call every frame
  // Typically all of them should be of type DisplayObject
  var displayList = [
  ];
  
  /**
		* Adds a DisplayObject to the displayList
		* @param 	{DisplayObject} The DisplayObject to be added
		* @return 	{boolean} 		True if the DisplayObject was added, false otherwise.
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
  }
  
  /**
		* Adds a DisplayObject to the displayList at a given position
		* @param 	{DisplayObject} The DisplayObject to be added
		* @param 	{index} 		The index of the Display Object to be added in the display list
		* @return 	{boolean} 		True if the DisplayObject was added, false otherwise
		*/
  this.addChildAt = function (displayObject, index) {
    if (index < 0) return false;
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
		* @param 	{DisplayObject} The DisplayObject that will be searched for
		* @return 	{int} 			The index of the DisplayObject if found, or -1 otherwise
		*/
  this.findChild = function (displayObject) {
    var dlLength = displayList.length;
    for (var i = 0; i < dlLength; i++) {
      if (displayList[i] == displayObject) {
        displayList.splice(i, 1);
        return i;
      }
    }
    return - 1;
  }
  
  /**
		* Searches for and removes a DisplayObject from the displayList
		* @param 	{DisplayObject} The DisplayObject to be removed
		* @return 	{boolean} 		True if the DisplayObject was removed, false otherwise
		*/
  this.removeChild = function (displayObject) {
    var dlLength = displayList.length;
    var foundObjectAt = this.findChild(displayObject);
    if (foundObjectAt != - 1) {
      displayList.splice(foundObjectAt, 1);
      return true;
    }
    return false;
  }
  
  /**
		* Removes a DisplayObject from the displayList based off of its index
		* @param 	{index} 	The index of the Display Object to be removed in the display list
		* @return 	{boolean} 	True if the DisplayObject was removed, false otherwise.
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
		* @param 	{index} 		The index of the Display Object to be fetched from the display list
		* @return 	{displayObject} The display object if the index is in range, null otherwise
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
		* @param 	{g} 		The canvas context that will be used to draw
		* @param 	{offsetX} 	The X coordinate of the container
		* @param 	{offsetY} 	The Y coordinate of the container
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
