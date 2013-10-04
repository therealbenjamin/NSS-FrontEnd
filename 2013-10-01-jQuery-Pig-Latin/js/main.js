$(document).ready(initialize);

function piggify(word)
{
  var pigged = word.slice(1) + word[0] + "a";
  return pigged;
}

function conv(pigged)
{
  var input = piggify($('#word').val());
  $('#output').text(input);
}

function initialize() {
  $('#pig').click(conv);
  $('#pig').css({'float':'left'});
  $('#word').css({'float':'left'});
  $('#output').css({'float':'left', 'padding':'5px 0px 5px 15px'});
}