"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Events
 *
 * @prop {object} events - Hash table of events and their assigned handler callbacks
 */
var Events = function () {
    function Events() {
        _classCallCheck(this, Events);

        this.events = {};
    }

    _createClass(Events, [{
        key: "on",


        /**
         * Set handler on event
         *
         * @param {string} event - Event name to set handler to
         * @param {func} handler - Handler function callback
         * @return {void}
         */
        value: function on(event, handler) {
            if (!this.events[event]) {
                this.events[event] = [];
            }

            this.events[event].push(handler);
        }

        /**
         * Remove all event handler for the given event
         *
         * @param {string} event - Event name to remove handler from
         * @return {void}
         */

    }, {
        key: "off",
        value: function off(event) {
            if (this.events[event]) {
                this.events[event] = [];
            }
        }

        /**
         * Trigger event with params
         *
         * @param {string} event - Event to trigger
         * @param {object} params - Parameters to pass to event handler
         * @return {void}
         */

    }, {
        key: "trigger",
        value: function trigger(event, params) {
            if (this.events[event] && this.events[event].length) {
                this.events[event].forEach(function (handler) {
                    return handler(params);
                });
            }
        }
    }]);

    return Events;
}();

exports.default = Events;