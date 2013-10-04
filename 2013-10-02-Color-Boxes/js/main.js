$(document).ready(initialize);

function initialize()
{
  $('#colorButton').click(makeColorBoxes);
  $('#clearInput').click(clearInput);
  $('#clearBoxes').click(clearBoxes);
  $('#colorString').focus();
}

function clearInput()
{
  $('#colorString').val('');
  $('#colorString').focus();
}

function clearBoxes()
{
  $('#boxes').empty();
  clearInput();
}

function makeColorBoxes()
{
  var colorString = $('#colorString').val();
  var colors = colorString.split(', ');
  for(var i = 0; i < colors.length; i++)
  {
    var $color = $('<div>');
    $color.addClass('box');
    $color.text(colors[i]);
    $color.css('background-color', colors[i]);
    $('#boxes').append($color);
  }
}
