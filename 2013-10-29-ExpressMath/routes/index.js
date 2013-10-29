
/*
 * GET home page.
 */

 var math = require('../modules/math');

exports.index = function(req, res){
  res.render('index', { title: 'Express', square: math.square(50), area: math.area(69, 175), vol: math.vol(69, 99, 1200) });
};