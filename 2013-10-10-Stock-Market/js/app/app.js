'use strict';

// Firebase Schema
var Δdb;

// Local Schema
var db = {};

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://stock-market-bb.firebaseio.com/');
  getStockQuote();
}

function getStockQuote() {
  var data = {symbol: 'AAPL'};
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, receivedQuote);
}

function receivedQuote(data, textStatus, jqXHR){
  console.log(data);
  console.log(textStatus);
  console.log(jqXHR);
}