LcgEvent.CLICK = "LCG_EVENT_CLICK";

LcgEvent.LOAD = "LCG_EVENT_LOAD";

/**
 * @private
 */
LcgEvent.copyProperties = ["timeStamp", "isTrusted", "isChar", "pageX", "pageY",
    "altKey", "button", "clientX", "clientY", "ctrlKey",
    "metaKey", "movementX", "movementY", "screenX", "screenY",
    "shiftKey", "which", "mozInputSource"
];

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