var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getdistance = function (another) {
    };
    return Point;
}());
var drawPoints = function (point) {
};
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();