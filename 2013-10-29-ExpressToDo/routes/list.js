var database = require('../modules/database');

exports.index = function(req, res){
  var list = database.read(__dirname + '/../db/items.json');
  res.render('list', { title: 'List Page: To Do' });
};

exports.new = function(req, res){
    res.render('list/new', { title: 'List Page: New' });
};

exports.create = function(req, res){
  var item = req.body.item;
  var date = req.body.date;
  var color = req.body.color;

  var list = database.read(__dirname + '/../db/items.json');
  var listItem = {item: item, date: date, color: color};
  list.push(listItem);
  database.write(__dirname + '/../db/items.json');

  res.redirect('/list');
};