
/*
 * GET /colors
 */

exports.index = function(req, res){
  var colors = ['blue', 'pink', 'red', 'olive'];
  res.render('colors/index', {title: 'Colors'});
};
