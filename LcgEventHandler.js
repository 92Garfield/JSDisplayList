

function LcgEventHandler() {

    this.events = {};

    this.addEventListener = function (eventStringLiteral, callback) {

        this.events.hasOwnProperty(eventStringLiteral) || (this.events[eventStringLiteral] = []);
        this.events[eventStringLiteral].push(callback);
    };

    this.dispatchEvent = function (eventObject) {

        var callbacks = this.events[eventObject[0]];
        if (!callbacks || callbacks.length == 0)
            return false;

        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i](eventObject[1]);
        }
        return true;
    };

}
