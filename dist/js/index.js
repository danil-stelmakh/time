'use strict';

var _timepicker = require('./timepicker');

var _timepicker2 = _interopRequireDefault(_timepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    var picker = new _timepicker2.default();

    picker.bindInput('#bind-one');
    picker.bindInput('#bind-two', { timeFormat: 'military' });
};