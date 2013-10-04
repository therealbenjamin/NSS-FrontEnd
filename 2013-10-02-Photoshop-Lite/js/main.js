'use strict';

$(document).ready(initialize);

function initialize()
{
  $('#add_color').click(addColor);
  $('#brush').click(brushClicked);
  // $('.box').click(boxClicked);
  // $('parent_selector').on('name of event', 'child selector', name_of_function);
  $('#colors').on('click', '.box', boxClicked);
  $('#add_box').click(addBoxes);
  $('#boxes').on('mouseover', '.div_box', boxHover);
}

function boxHover()
{
  var $canvas = $(this);
  var brushColor = $('#brush').css('background-color');
  $canvas.css('background-color', brushColor);
}

function addColor()
{
  var newColor = $('#color').val();
  var $color = $('<div>');
  $color.addClass('box');
  $color.css('background-color', newColor);
  $('#colors').append($color);
  clearInputAndFocus();
}

function clearInputAndFocus()
{
  $('#color').val('');
  $('#color').focus();
}

function brushClicked()
{
  alert('the brush was clicked');
}

function boxClicked()
{
  var $box = $(this);
  var color = $box.css('background-color');
  $('#brush').css('background-color', color);
}

function addBoxes()
{
  var numberOfBoxes = $('#amount').val();
  numberOfBoxes = parseInt(numberOfBoxes, 10);

  for(var i = 0; i < numberOfBoxes; i++)
  {
    var $div = $('<div>');
    $div.addClass('div_box');
    $('#boxes').append($div);
  }
}