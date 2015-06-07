    

function LcgEventHandler() {

	this.events = {};

	this.addEventListener = function(eventStringLiteral, callback) {

		this.events.hasOwnProperty(eventStringLiteral) || (this.events[eventStringLiteral] = []);
		this.events[eventStringLiteral].push(callback);
	};

	this.dispatchEvent = function(eventObject) {

		var callbacks = this.events[eventObject[0]];
		if (callbacks.length == 0) return false;

		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](eventObject[1]);
		};

		return true;
	};

}
