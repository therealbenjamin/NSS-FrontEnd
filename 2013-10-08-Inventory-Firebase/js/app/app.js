'use strict';

var Δdb;
var Δitems;
var items;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#add').click(add);
  $('#save').click(save);
  Δdb = new Firebase('https://inventory-project.firebaseio.com');
  Δitems = Δdb.child('items');
  Δdb.on('value', receivedDb);
}

function receivedDb(snapshot){
  console.log('receivedDb is being called');
  var inventory = snapshot.val();
  $('#person').val(inventory.fullName);
  $('#address').val(inventory.address);

  if(inventory.items){
    console.log('yes there are items');
    items = inventory.items;
    populate();
  } else {
    console.log('no there are no items');
    items = [];
  }
}

function populate(){
  for(var i = 0; i < items.length; i++)
  {
    var name = items[i].name;
    var count = items[i].count;
    var value = items[i].value;
    var room = items[i].room;
    var condition = items[i].condition;
    var date = items[i].date;

    var row = '<tr><td class="name"></td><td class="count"></td><td class="value"></td><td class="room"></td><td class="condition"></td><td class="date"></td></tr>';
    var $row = $(row);

    $row.children('.name').text(name);
    $row.children('.count').text(count);
    $row.children('.value').text(value);
    $row.children('.room').text(room);
    $row.children('.condition').text(condition);
    $row.children('.date').text(date);

    $('#items').append($row);
  }
}

function save(){
  var fullName = $('#person').val();
  var address = $('#address').val();
  var inventory = {};
  inventory.fullName = fullName;
  inventory.address = address;

  Δdb.update(inventory);
}

function add(){

  var name = $('#name').val();
  var count = $('#count').val();
  var value = $('#value').val();
  var room = $('#room').val();
  var condition = $('#condition').val();
  var date = $('#date').val();

  var row = '<tr><td class="name"></td><td class="count"></td><td class="value"></td><td class="room"></td><td class="condition"></td><td class="date"></td></tr>';
  var $row = $(row);

  $row.children('.name').text(name);
  $row.children('.count').text(count);
  $row.children('.value').text(value);
  $row.children('.room').text(room);
  $row.children('.condition').text(condition);
  $row.children('.date').text(date);

  var item = {};
  item.name = name;
  item.count = count;
  item.value = value;
  item.room = room;
  item.condition = condition;
  item.date = date;

  $('#items').append($row);

  items.push(item);
  Δitems.set(items);


}

