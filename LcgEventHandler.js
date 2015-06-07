    

function LcgEventHandler() {

	this.events = {};

	this.addEventListener = function(event, callback) {

		this.events.hasOwnProperty(event) || (this.events[event] = []);
		this.events[event].push(callback);
	};

	this.dispatchEvent = function() {};
}