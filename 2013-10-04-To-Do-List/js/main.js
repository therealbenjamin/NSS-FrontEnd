'use strict';

$(document).ready(initialize);

function initialize(){
  $('#add').click(addRow);
}

function addRow(){
  var $tr = $('<tr>');
  var $dueDate = $('<td>');
  $dueDate.addClass('dueDate');
  var $task = $('<td>');
  $task.addClass('task');
  var $color = $('<td>');
  $color.addClass('color');
  var $done = $('<td>');
  $done.addClass('done');
  var $remove = $('<td>');
  $remove.addClass('remove');
  var $updown = $('<td>');

  $tr.append([$dueDate, $task, $color, $done, $remove, $updown]);
  $('table').append($tr);
}