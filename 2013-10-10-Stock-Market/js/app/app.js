'use strict';

// Firebase Schema
var Δdb;
var Δstocks;
var Δstatistics;

// Local Schema
var db = {};
db.stocks = [];
db.statistics = {};
db.statistics.balance = 0;
db.statistics.total = 0;


$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#add_funds').click(setFunds);
  $('#buy').click(setStock);
  $('#add_interval').click(setInterval);

  Δdb = new Firebase('https://stock-market-bb.firebaseio.com/');
  Δstocks = Δdb.child('stocks');
  Δstatistics = Δdb.child('statistics');
  Δstocks.on('child_added', stockAdded);
  Δstatistics.on('value', balanceChanged);
}

function stockAdded(snapshot) {
  var stock = snapshot.val();
  addItem(stock);
  getTotal(stock);
}


function getStockQuote(symbol, fn) {
  var data = {};
  data.symbol = $('#symbol').val();
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn); // jQuery.getJSON( url [, data ] [, success( data, textStatus, jqXHR ) ] )
}

function setFunds() {
  db.statistics.balance = parseFloat($('#funds').val());
  $('#balance').val('$' + db.statistics.balance);
  Δstatistics.set(db.statistics);
}

function setStock() {
  getStockQuote(symbol, function(data){
    var stock = {};

    var symbol = data.Data.Symbol;
    var name = data.Data.Name;
    var price = parseFloat(data.Data.LastPrice);
    var quote = price.toFixed(2);
    var quantity = parseInt($('#quantity').val(), 10);
    var total = quote * quantity;

    stock.symbol = symbol;
    stock.name = name;
    stock.boughtPrice = quote;
    stock.purchased = quantity;
    stock.total = total;

    Δstocks.push(stock);

    db.statistics.balance -= total;
    $('#balance').val('$' + db.statistics.balance);
  });
}

function addItem(stock) {
  var row = '<tr><td class="symbol"></td><td class="name"></td><td class="quote"></td><td class="purchased"></td><td class="total"></td></tr>';
  var $row = $(row);
  var num = parseFloat(stock.total);
  var n = num.toFixed(2);

  $row.children('.symbol').text(stock.symbol);
  $row.children('.name').text(stock.name);
  $row.children('.quote').text(stock.boughtPrice);
  $row.children('.purchased').text(stock.purchased);
  $row.children('.total').text('$' + n);

  $('#stock_list').append($row);
}

function balanceChanged(snapshot){
  var statistics = snapshot.val();
  db.statistics.balance = statistics.balance;
  $('#balance').val('$' + db.statistics.balance);
}

function getTotal(stock){
  db.statistics.total += (stock.boughtPrice * stock.purchased);
  $('#total').val('$' + db.statistics.total);
  Δstatistics.set(db.statistics);
}