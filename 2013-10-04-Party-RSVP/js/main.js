'use strict';

$(document).ready(initialize);

function initialize() {
  $('#add').click(addRow);
  $('table').on('click', '.rsvp', rsvp);
  $('table').on('click', '.nuke', nuke);
}

function rsvp(){
  var $button = $(this);
  var $textbox = $button.prev();
  var text = $textbox.val();
  var items = text.split(', ');
  var name = items[0];
  var food = items[1];
  $button.parent().siblings('.name').text(name);
  $button.parent().siblings('.food').text(food);

}

function addRow(){
  var $tr = $('<tr>');
  var $name = $('<td>');
  $name.addClass('name');
  var $food = $('<td>');
  $food.addClass('food');
  var $ctrl = $('<td>');
  $ctrl.addClass('ctrl');
  var $nuke = $('<td>');
  $nuke.addClass('nuke');

  var $input = $('<input>');
  $input.attr('type', 'text');
  var $button = $('<input>');
  var $nukeButton = $('<input>');
  $nukeButton.attr('type', 'button');
  $nukeButton.val('NUKE!');
  $nukeButton.addClass('nuke')

  $button.attr('type', 'button');
  $button.val('RSVP!');
  $button.addClass('rsvp');

  $ctrl.append($input, $button);
  $nuke.append($nukeButton);
  $('table').append($tr);
  $tr.append([$name, $food, $ctrl, $nuke]);

  $input.focus();
}

function nuke(){
  var $button = $(this);
  $button.closest('tr').remove();
}