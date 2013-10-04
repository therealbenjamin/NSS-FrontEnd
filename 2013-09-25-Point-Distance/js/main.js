var points = [];

for(var i = 0; i < 2; i++)
{
  var point = {};
  point.x = parseInt(prompt("Enter x coordinate:"));
  point.y = parseInt(prompt("Enter y coordinate:"));
  points.push(point);
}

var a = points[0].y - points[1].y;
var b = points[0].x - points[1].x;

var distance = Math.sqrt(a*a + b*b);

document.write(distance);