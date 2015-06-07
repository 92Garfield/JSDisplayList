    

function LcgEventHandler() {

	this.events = {};

	this.addEventListener = function(event, callback) {

		this.events.hasOwnProperty(event) || (this.events[event] = []);
		this.events[event].push(callback);
	};

	this.dispatchEvent = function(event) {

		var callbacks = this.events[event[0]];
		if (callbacks.length == 0) return false;

		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](event[1]);
		};

		return true;
	};

}