'use strict';

var timer;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#start').click(startTimer);
  $('#stop').click(stopTimer);
}

function createColor(){
  var dimensions = $('#dimensions').val();
  dimensions = dimensions.split(', ');
  var w = dimensions[0];
  var h = dimensions[1];

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var a = Math.random();
  var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

  // debugger;

  var $div = $('<div>');
  $div.addClass('color');
  $div.css('width', w).css('height', h).css('background-color', rgba);
  $('#colors').prepend($div);

}

function startTimer(){
  var delay = $('#delay').val();
  var seconds = delay * 1000;
  seconds = parseInt(seconds, 10);
  timer = setInterval(createColor, seconds);
}

function stopTimer(){
  clearInterval(timer);
}