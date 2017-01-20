"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = "\n<div class=\"mtp-overlay\" style=\"display:none\">\n    <div class=\"mtp-wrapper\">\n        <div class=\"mtp-display\">\n            <span class=\"mtp-display__time\">12:00</span>\n            <span class=\"mtp-display__meridiem\">am</span>\n        </div><!-- END .mtp-display -->\n        <div class=\"mtp-picker\">\n            <div class=\"mtp-meridiem\">\n                <span class=\"mtp-clock--active\">am</span>\n                <span>pm</span>\n            </div><!-- END .mtp-meridiem -->\n            <div class=\"mtp-clock\">\n                <div class=\"mtp-clock__center\"></div>\n                <div class=\"mtp-clock__hand\"></div>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__hours\" style=\"display:none\">\n                    <li class=\"mtp-clock--active\">12</li>\n                    <li>1</li>\n                    <li>2</li>\n                    <li>3</li>\n                    <li>4</li>\n                    <li>5</li>\n                    <li>6</li>\n                    <li>7</li>\n                    <li>8</li>\n                    <li>9</li>\n                    <li>10</li>\n                    <li>11</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__minutes\" style=\"display:none\">\n                    <li class=\"mtp-clock--active\">0</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>5</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>10</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>15</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>20</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>25</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>30</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>35</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>40</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>45</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>50</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>55</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__hours-military\" style=\"display:none\">\n                    <div class=\"mtp-clock__hours--inner\">\n                        <li class=\"mtp-clock--active\">00</li>\n                        <li>13</li>\n                        <li>14</li>\n                        <li>15</li>\n                        <li>16</li>\n                        <li>17</li>\n                        <li>18</li>\n                        <li>19</li>\n                        <li>20</li>\n                        <li>21</li>\n                        <li>22</li>\n                        <li>23</li>\n                    </div>\n                    <div class=\"mtp-clock__hours\">\n                        <li>12</li>\n                        <li>1</li>\n                        <li>2</li>\n                        <li>3</li>\n                        <li>4</li>\n                        <li>5</li>\n                        <li>6</li>\n                        <li>7</li>\n                        <li>8</li>\n                        <li>9</li>\n                        <li>10</li>\n                        <li>11</li>\n                    </div>\n                </ul>\n            </div><!-- END .mtp-clock -->\n            <div class=\"mtp-actions\">\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__cancel\">Cancel</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__back\" style=\"display:none\">Back</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__ok\">OK</button>\n            </div><!-- END .mtp-actions -->\n        </div><!-- END .mtp-picker -->\n    </div><!-- END .mtp-wrapper -->\n</div><!-- END .mtp-overlay -->\n";

exports.default = template;