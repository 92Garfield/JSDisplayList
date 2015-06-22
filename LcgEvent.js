////////////////////////////////////////////////////////////////////////////////////////////
// LcgEvent class
// A class for creating events
// For event handling and attaching events, see LcgEventHandler
////////////////////////////////////////////////////////////////////////////////////////////


// List of available events
////////////////////////////////////////////////////////////////////////////////////////////
LcgEvent.CLICK = "LCG_EVENT_CLICK";
LcgEvent.LOAD = "LCG_EVENT_LOAD";
LcgEvent.ANIMATION_FINISHED = "LCG_EVENT_ANIMATION_FINISHED";
////////////////////////////////////////////////////////////////////////////////////////////





// List of propertie names to be copied from the event passed to the constructor
LcgEvent.copyProperties = ["timeStamp", "isTrusted", "isChar", "pageX", "pageY",
    "altKey", "button", "clientX", "clientY", "ctrlKey",
    "metaKey", "movementX", "movementY", "screenX", "screenY",
    "shiftKey", "which", "mozInputSource"
];



/**
* @constructor
* Searches for a DisplayObject in the displayList
* @param    {string}        The name of the event type, must be one of the predefined events, can be obtained from LcgEvent."PREDEFINED_EVENT_NAME"
* @param    {jsEvent}       The original jsEvent that will be used to construct LcgEvent
*/
function LcgEvent(type, event) {
    this.currentTarget = null;
    this.type = type;
    for (var i = 0; i < LcgEvent.copyProperties.length; i++) {
        var prop = LcgEvent.copyProperties[i];
        if (event[prop]) {
            this[prop] = event[prop];
        }
    }
}