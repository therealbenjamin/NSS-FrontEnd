'use strict';

$(document).ready(initialize);

function initialize() {
  $('#add').click(addRow);
  $('table').on('click', '.rsvp', rsvp);
  $('table').on('click', '.nuke', nuke);
  $('table').on('click', '.arrow_up', move);
  $('table').on('click', '.arrow_down', move);
}

function move(){
  var $up = $(this);
  var $tr = $up.parent().parent();

  if($up.hasClass('arrow_up')) {
    $tr.prev().before($tr);
  }
  else {
    $tr.next().after($tr);
  }
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
  var $arrows = $('<td>');
  $arrows.addClass('arrows');

  var $input = $('<input>');
  $input.attr('type', 'text');
  var $button = $('<input>');
  var $nukeButton = $('<input>');
  $nukeButton.attr('type', 'button');
  $nukeButton.val('NUKE!');
  $nukeButton.addClass('nuke');
  $button.attr('type', 'button');
  $button.val('RSVP!');
  $button.addClass('rsvp');

  var $arrowUp = $('<img>');
  $arrowUp.addClass('arrow_up');
  $arrowUp.attr('src', 'images/up_arrow.png');
  var $arrowDown = $('<img>');
  $arrowDown.addClass('arrow_down');
  $arrowDown.attr('src', 'images/down_arrow.png');

  $ctrl.append($input, $button);
  $nuke.append($nukeButton);
  $('table').append($tr);
  $($arrows).append($arrowUp, $arrowDown);
  $tr.append([$name, $food, $ctrl, $nuke, $arrows]);


  $input.focus();
}

function nuke(){
  var $button = $(this);
  $button.closest('tr').remove();
}