"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactKline = function (_React$Component) {
    _inherits(ReactKline, _React$Component);

    function ReactKline(props) {
        _classCallCheck(this, ReactKline);

        var _this = _possibleConstructorReturn(this, (ReactKline.__proto__ || Object.getPrototypeOf(ReactKline)).call(this, props));

        _this.state = {
            width: 200,
            height: 50,
            trends: [120, 345, 300, 432, 253, 163, 765, 324],
            stroke: "#ccc",
            strokeWidth: 1
        };
        Object.assign(_this.state, _this.props);
        return _this;
    }

    _createClass(ReactKline, [{
        key: "render",
        value: function render() {
            var width = this.state.width;
            var height = this.state.height;
            var trends = this.state.trends;

            var ratio = this.state.height / this.state.width;
            var viewHeight = 100 * ratio;
            var viewBox = "0 0 100 " + viewHeight;

            var dx = Math.floor(100 / trends.length);
            var max = trends[0];
            var min = trends[0];
            for (var i = 0; i < trends.length; i++) {
                trends[i] > max ? max = trends[i] : null;
                trends[i] < min ? min = trends[i] : null;
            }

            var points = "";
            trends.forEach(function (e, i) {
                var x = i * dx;
                var y = viewHeight - (e - min) / (max - min) * viewHeight;
                points += x + "," + y + " ";
            });

            return _react2.default.createElement(
                "svg",
                { width: width, height: height, viewBox: viewBox, preserveAspectRatio: "none" },
                _react2.default.createElement("polyline", { points: points, style: { stroke: this.state.stroke, strokeWidth: this.state.strokeWidth, fill: "none" } })
            );
        }
    }]);

    return ReactKline;
}(_react2.default.Component);

exports.default = ReactKline;