'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class TimePicker
 *
 * @prop {string} template - TimePicker template
 * @prop {number} currentStep - The step the TimePicker is on [0 = hours, 1 = minutes, 2 = finish]
 * @prop {object} defaultOptions - Default config options
 * @prop {string} defaultOptions.timeFormat - 12 or 24 hour format ['standard', 'military']
 * @prop {bool} defaultOptions.autoNext - Auto-next on time element select
 * @prop {object} cachedEls - Cached elements in template
 * @prop {HTMLElement} cachedEls.body - document.body
 * @prop {HTMLElement} cachedEls.overlay - Overlay element ('.mtp-overlay')[0]
 * @prop {HTMLElement} cachedEls.wrapper - Wrapper element ('.mtp-wrapper')[0]
 * @prop {HTMLElement} cachedEls.picker - Selection elements wrapper ('.mtp-picker')[0]
 * @prop {HTMLElement} cachedEls.meridiem - Meridiem selection elements wrapper ('.mtp-meridiem')[0]
 * @prop {HTMLCollection} cachedEls.meridiemSpans - Meridiem selection elements meridiem('span')
 * @prop {HTMLElement} cachedEls.displayTime - Selected time display element ('.mtp-display__time')[0]
 * @prop {HTMLElement} cachedEls.displayMerdiem - Selected meridiem display element ('.mtp-display__meridiem')[0]
 * @prop {HTMLElement} cachedEls.buttonCancel - Cancel button element ('.mtp-actions__cancel')[0]
 * @prop {HTMLElement} cachedEls.buttonBack - Back button element ('.mtp-actions__back')[0]
 * @prop {HTMLElement} cachedEls.buttonOk - Ok button element ('.mtp-actions__ok')[0]
 * @prop {HTMLElement} cachedEls.clockHours - Hour elements display wrapper ('.mtp-clock__hours')[0]
 * @prop {HTMLElement} cachedEls.clockMinutes - Minute elements display wrapper ('.mtp-clock__minutes')[0]
 * @prop {HTMLElement} cachedEls.clockMilitaryHours - Military hour elements display wrapper ('.mtp_clock__hours--military')[0]
 * @prop {HTMLElement} cachedEls.clockHand - Clock hand display ('.mtp-clock__hand')[0]
 * @prop {HTMLCollection} cachedEls.clockHoursLi - Hour list elements clockHours('li')
 * @prop {HTMLCollection} cachedEls.clockMinutesLi - Minute list elements clockMinutes('li')
 * @prop {HTMLCollection} cachedEls.clockMilitaryHoursLi - Militar Hour li elements clockMilitaryHours('li')
 */
var TimePicker = function (_Events) {
    _inherits(TimePicker, _Events);

    /**
     * Initialize new TimePicker instance
     *
     * @return {TimePicker} New TimePicker instance
     */
    function TimePicker() {
        var _ret;

        _classCallCheck(this, TimePicker);

        var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this));

        _this.template = _template2.default;
        _this.currentStep = 0;
        _this.defaultOptions = {
            timeFormat: 'standard',
            autoNext: false
        };
        _this.cachedEls = {};


        _this.setupTemplate();

        _this.cachedEls.body = document.body;
        _this.cachedEls.overlay = _this.cachedEls.body.getElementsByClassName('mtp-overlay')[0];
        _this.cachedEls.wrapper = _this.cachedEls.overlay.getElementsByClassName('mtp-wrapper')[0];
        _this.cachedEls.picker = _this.cachedEls.wrapper.getElementsByClassName('mtp-picker')[0];
        _this.cachedEls.meridiem = _this.cachedEls.wrapper.getElementsByClassName('mtp-meridiem')[0];
        _this.cachedEls.meridiemSpans = _this.cachedEls.meridiem.getElementsByTagName('span');
        _this.cachedEls.displayTime = _this.cachedEls.wrapper.getElementsByClassName('mtp-display__time')[0];
        _this.cachedEls.displayMeridiem = _this.cachedEls.wrapper.getElementsByClassName('mtp-display__meridiem')[0];
        _this.cachedEls.buttonCancel = _this.cachedEls.picker.getElementsByClassName('mtp-actions__cancel')[0];
        _this.cachedEls.buttonBack = _this.cachedEls.picker.getElementsByClassName('mtp-actions__back')[0];
        _this.cachedEls.buttonOk = _this.cachedEls.picker.getElementsByClassName('mtp-actions__ok')[0];
        _this.cachedEls.clockHours = _this.cachedEls.picker.getElementsByClassName('mtp-clock__hours')[0];
        _this.cachedEls.clockMinutes = _this.cachedEls.picker.getElementsByClassName('mtp-clock__minutes')[0];
        _this.cachedEls.clockMilitaryHours = _this.cachedEls.picker.getElementsByClassName('mtp-clock__hours-military')[0];
        _this.cachedEls.clockHand = _this.cachedEls.picker.getElementsByClassName('mtp-clock__hand')[0];
        _this.cachedEls.clockHoursLi = _this.cachedEls.clockHours.getElementsByTagName('li');
        _this.cachedEls.clockMinutesLi = _this.cachedEls.clockMinutes.getElementsByTagName('li');
        _this.cachedEls.clockMilitaryHoursLi = _this.cachedEls.clockMilitaryHours.getElementsByTagName('li');

        _this.setEvents();

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Bind event to the input element to open when `focus` event is triggered
     *
     * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
     * @param {object} options Options to merged with defaults and set to input element object
     * @return {void}
     */


    _createClass(TimePicker, [{
        key: 'bindInput',
        value: function bindInput(inputEl) {
            var _this2 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var element = inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl);

            element.mtpOptions = (0, _assign2.default)({}, this.defaultOptions, options);
            element.addEventListener('focus', function (event) {
                return _this2.showEvent(event);
            });
        }

        /**
         * Open picker with the input provided in context without binding events
         *
         * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
         * @param {object} options Options to merged with defaults and set to input element object
         * @return {void}
         */

    }, {
        key: 'openOnInput',
        value: function openOnInput(inputEl) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this.inputEl = inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl);
            this.inputEl.mtpOptions = (0, _assign2.default)({}, this.defaultOptions, options);
            this.show();
        }

        /**
         * Setup the template in DOM if not already
         *
         * @return {void}
         */

    }, {
        key: 'setupTemplate',
        value: function setupTemplate() {
            if (!this.isTemplateInDOM()) {
                document.body.insertAdjacentHTML('beforeend', _template2.default);
            }
        }

        /**
         * Set the events on picker elements
         *
         * @return {void}
         */

    }, {
        key: 'setEvents',
        value: function setEvents() {
            var _this3 = this;

            if (!this.hasSetEvents()) {
                // close
                this.cachedEls.overlay.addEventListener('click', function (event) {
                    return _this3.hideEvent(event);
                });
                this.cachedEls.buttonCancel.addEventListener('click', function (event) {
                    return _this3.hideEvent(event);
                });

                // next/prev step actions
                this.cachedEls.buttonOk.addEventListener('click', function () {
                    return _this3.changeStep(_this3.currentStep + 1);
                });
                this.cachedEls.buttonBack.addEventListener('click', function () {
                    return _this3.changeStep(0);
                });

                // meridiem select events
                [].forEach.call(this.cachedEls.meridiemSpans, function (span) {
                    span.addEventListener('click', function (event) {
                        return _this3.meridiemSelectEvent(event);
                    });
                });

                // time select events
                [].forEach.call(this.cachedEls.clockHoursLi, function (hour) {
                    hour.addEventListener('click', function (event) {
                        _this3.hourSelectEvent(event, _this3.cachedEls.clockHours, _this3.cachedEls.clockHoursLi);
                    });
                });
                [].forEach.call(this.cachedEls.clockMilitaryHoursLi, function (hour) {
                    hour.addEventListener('click', function (event) {
                        _this3.hourSelectEvent(event, _this3.cachedEls.clockMilitaryHours, _this3.cachedEls.clockMilitaryHoursLi);
                    });
                });
                [].forEach.call(this.cachedEls.clockMinutesLi, function (minute) {
                    minute.addEventListener('click', function (event) {
                        _this3.minuteSelectEvent(event, _this3.cachedEls.clockMinutes, _this3.cachedEls.clockMinutesLi);
                    });
                });

                this.cachedEls.wrapper.classList.add('mtp-events-set');
            }
        }

        /**
         * Show the picker in the DOM
         *
         * @return {void}
         */

    }, {
        key: 'show',
        value: function show() {
            var isMilitaryFormat = this.isMilitaryFormat();

            // blur input to prevent onscreen keyboard from displaying
            this.inputEl.blur();
            this.toggleHoursVisible(true, isMilitaryFormat);
            this.toggleMinutesVisible();
            this.setDisplayTime(isMilitaryFormat ? '00' : '12', 0);
            this.setDisplayTime('0', 1);

            this.cachedEls.body.style.overflow = 'hidden';
            this.cachedEls.displayMeridiem.style.display = isMilitaryFormat ? 'none' : 'inline';
            this.cachedEls.meridiem.style.display = isMilitaryFormat ? 'none' : 'block';
            this.cachedEls.overlay.style.display = 'block';
            this.cachedEls.clockHand.style.height = isMilitaryFormat ? '90px' : '105px';

            this.trigger('show');
        }

        /**
         * Event handle for input focus
         *
         * @param {Event} event Event object passed from listener
         * @return {void}
         */

    }, {
        key: 'showEvent',
        value: function showEvent(event) {
            this.inputEl = event.target;
            this.show();
        }

        /**
         * Hide the picker in the DOM
         *
         * @return {void}
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.cachedEls.overlay.style.display = 'none';
            this.cachedEls.body.style.overflow = '';

            this.inputEl.dispatchEvent(new Event('blur'));
            this.resetState();
            this.trigger('hide');
        }

        /**
         * Hide the picker element on the page
         *
         * @param {Event} event Event object passed from event listener callback
         * @return {void}
         */

    }, {
        key: 'hideEvent',
        value: function hideEvent(event) {
            event.stopPropagation();

            // only allow event based close if event.target contains one of these classes
            // hack to prevent overlay close event from triggering on all elements because
            // they are children of overlay
            var allowedClasses = ['mtp-overlay', 'mtp-actions__cancel'];
            var classList = event.target.classList;
            var isAllowed = allowedClasses.some(function (allowedClass) {
                return classList.contains(allowedClass);
            });

            if (isAllowed) {
                this.hide();
            }
        }

        /**
         * Reset picker state to defaults
         *
         * @return {void}
         */

    }, {
        key: 'resetState',
        value: function resetState() {
            this.currentStep = 0;
            this.toggleHoursVisible(true, this.isMilitaryFormat());
            this.toggleMinutesVisible();
            this.cachedEls.clockHoursLi[0].dispatchEvent(new Event('click'));
            this.cachedEls.clockMinutesLi[0].dispatchEvent(new Event('click'));
            this.cachedEls.clockMilitaryHoursLi[0].dispatchEvent(new Event('click'));
            this.cachedEls.meridiemSpans[0].dispatchEvent(new Event('click'));
        }

        /**
         * Set the displayed time, which will be used to fill input value on completetion
         *
         * @param {string} value Newly selected time value
         * @param {integer} index Index of value to replace [0 = hours, 1 = minutes]
         * @return {void}
         */

    }, {
        key: 'setDisplayTime',
        value: function setDisplayTime(value, index) {
            var time = this.cachedEls.displayTime.innerHTML.split(':');

            // prepend with zero if selecting minutes and value is single digit
            time[index] = index === 1 && value < 10 ? '0' + value : value;
            this.cachedEls.displayTime.innerHTML = time.join(':');
        }

        /**
         * Rotate the hand element to selected time
         *
         * @param {integer} nodeIndex Index of active element
         * @param {integer} increment Degree increment elements are on
         * @return {void}
         */

    }, {
        key: 'rotateHand',
        value: function rotateHand() {
            var nodeIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
            var increment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

            // 0 index is 180 degress behind 0 deg
            var rotateDeg = nodeIndex * increment - 180;
            var styleVal = 'rotate(' + rotateDeg + 'deg)';

            this.cachedEls.clockHand.style.transform = styleVal;
            this.cachedEls.clockHand.style['-webkit-transform'] = styleVal;
            this.cachedEls.clockHand.style['-ms-transform'] = styleVal;
        }

        /**
         * Change to the specified step
         *
         * @param {integer} step Index of step to change to
         * @return {void}
         */

    }, {
        key: 'changeStep',
        value: function changeStep(step) {
            var _this4 = this;

            var isMilitaryFormat = this.isMilitaryFormat();
            var hourEls = isMilitaryFormat ? this.cachedEls.clockMilitaryHoursLi : this.cachedEls.clockHoursLi;
            var minuteEls = this.cachedEls.clockMinutesLi;
            var changeStepAction = [function () {
                _this4.toggleHoursVisible(true, isMilitaryFormat);
                _this4.toggleMinutesVisible();
                _this4.rotateHand(_this4.getActiveIndex(hourEls));
            }, function () {
                _this4.toggleHoursVisible();
                _this4.toggleMinutesVisible(true);
                _this4.rotateHand(_this4.getActiveIndex(minuteEls), 6);
                _this4.cachedEls.clockHand.style.height = '115px';
            }, function () {
                _this4.timeSelected();
                _this4.hide();
            }][step];

            this.currentStep = step;
            changeStepAction();
        }

        /**
         * Toggle hour (both military and standard) clock visiblity in DOM
         *
         * @param {boolean} isVisible Is clock face toggled visible or hidden
         * @param {boolean} isMilitaryFormat Is using military hour format
         * @return {void}
         */

    }, {
        key: 'toggleHoursVisible',
        value: function toggleHoursVisible() {
            var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var isMilitaryFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this.cachedEls.clockHours.style.display = isVisible && !isMilitaryFormat ? 'block' : 'none';
            this.cachedEls.clockMilitaryHours.style.display = isVisible && isMilitaryFormat ? 'block' : 'none';
        }

        /**
         * Toggle minute clock visiblity in DOM
         *
         * @param {boolean} isVisible Is clock face toggled visible or hidden
         * @return {void}
         */

    }, {
        key: 'toggleMinutesVisible',
        value: function toggleMinutesVisible() {
            var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.cachedEls.clockMinutes.style.display = isVisible ? 'block' : 'none';
            this.cachedEls.buttonBack.style.display = isVisible ? 'inline-block' : 'none';
        }

        /**
         * Get the active time element index
         *
         * @param {HTMLCollection} timeEls Collection of time elements to find active in
         * @return {integer} Active element index
         */

    }, {
        key: 'getActiveIndex',
        value: function getActiveIndex(timeEls) {
            var activeIndex = 0;

            [].some.call(timeEls, function (timeEl, index) {
                if (timeEl.classList.contains('mtp-clock--active')) {
                    activeIndex = index;

                    return true;
                }

                return false;
            });

            return activeIndex;
        }

        /**
         * Set selected time to input element
         *
         * @return {void}
         */

    }, {
        key: 'timeSelected',
        value: function timeSelected() {
            var time = this.cachedEls.displayTime.innerHTML;
            var meridiem = this.isMilitaryFormat() ? '' : this.cachedEls.displayMeridiem.innerHTML;
            var timeValue = time + ' ' + meridiem;

            this.inputEl.value = timeValue.trim();
            this.inputEl.dispatchEvent(new Event('input'));
        }

        /**
         * Set active clock face element
         *
         * @param {Element} containerEl New active elements .parentNode
         * @param {Element} activeEl Element to set active
         * @return {void}
         */

    }, {
        key: 'setActiveEl',
        value: function setActiveEl(containerEl, activeEl) {
            var activeClassName = 'mtp-clock--active';
            var currentActive = containerEl.getElementsByClassName(activeClassName)[0];

            currentActive.classList.remove(activeClassName);
            activeEl.classList.add(activeClassName);
        }

        /**
         * Meridiem select event handler
         *
         * @param {Evenet} event Event object passed from listener
         * @return {void}
         */

    }, {
        key: 'meridiemSelectEvent',
        value: function meridiemSelectEvent(event) {
            var activeClassName = 'mtp-clock--active';
            var element = event.target;
            var currentActive = this.cachedEls.meridiem.getElementsByClassName(activeClassName)[0];
            var value = element.innerHTML;

            if (!currentActive.isEqualNode(element)) {
                currentActive.classList.remove(activeClassName);
                element.classList.add(activeClassName);
                this.cachedEls.displayMeridiem.innerHTML = value;
            }
        }

        /**
         * Hour select event handler
         *
         * @param {Event} event Event object passed from listener
         * @param {HTMLElement} containerEl Element containing time list elements
         * @param {HTMLCollection} listEls Collection of list elements
         * @return {void}
         */

    }, {
        key: 'hourSelectEvent',
        value: function hourSelectEvent(event, containerEl, listEls) {
            event.stopPropagation();

            var newActive = event.target;
            var parentEl = newActive.parentElement;
            var isInner = parentEl.classList.contains('mtp-clock__hours--inner');

            this.cachedEls.clockHand.style.height = isInner ? '90px' : '105px';
            this.setActiveEl(containerEl, newActive);

            var activeIndex = this.getActiveIndex(listEls);

            this.setDisplayTime(newActive.innerHTML, 0);
            this.rotateHand(activeIndex);
            this.trigger('hourSelected');
        }

        /**
         * Hour select event handler
         *
         * @param {Event} event Event object passed from listener
         * @param {HTMLElement} containerEl Element containing time list elements
         * @param {HTMLCollection} listEls Collection of list elements
         * @return {void}
         */

    }, {
        key: 'minuteSelectEvent',
        value: function minuteSelectEvent(event, containerEl, listEls) {
            event.stopPropagation();

            var newActive = event.target;

            this.setActiveEl(containerEl, newActive);

            var activeIndex = this.getActiveIndex(listEls);
            var displayTime = activeIndex;

            this.setDisplayTime(displayTime, 1);
            this.rotateHand(activeIndex, 6);
            this.trigger('minuteSelected');
        }

        /**
         * Check if picker set to military time mode
         *
         * @return {boolean} Is in military time mode
         */

    }, {
        key: 'isMilitaryFormat',
        value: function isMilitaryFormat() {
            return Boolean(this.inputEl.mtpOptions.timeFormat === 'military');
        }

        /**
         * Check if picker object has already set events on picker elements
         *
         * @return {boolean} Has events been set on picker elements
         */

    }, {
        key: 'hasSetEvents',
        value: function hasSetEvents() {
            return this.cachedEls.wrapper.classList.contains('mtp-events-set');
        }

        /**
         * Check if template has already been appended to DOM
         *
         * @return {boolean} Is template in DOM
         */

    }, {
        key: 'isTemplateInDOM',
        value: function isTemplateInDOM() {
            return Boolean(document.getElementsByClassName('mtp-overlay')[0]);
        }
    }]);

    return TimePicker;
}(_events2.default);

exports.default = TimePicker;