$(document).ready(initialize);

function change_div_text()
{
  var name = $('#name').val();
  var color = $('#color').val();
  $('#b').text(name).css('background-color', color);
}

function age_verification()
{
  var age = parseInt($('#age').val());
  if(age > 20)
  {
    $('#age_div').text("Have a beer!").css('background-color', 'green').css('font-size', '40px').css('font-weight', 'bolder');
  }
  else
    $('#age_div').text("Sorry kiddo, you are too young to drink!").css('background-color', 'red');
}

function initialize() {
  $('#clicker').click(change_div_text);
  $('#age_check').click(age_verification);

  // $('div').css('background-color', 'red');
  // $('div').css('font-size', '25px');
  // $('div').css('color', 'yellow');

  // var color = prompt("What color?");
  // $('div').css('background-color', color);
  // var size = prompt("What font size?");
  // $('div').css('font-size', size+"px");

  // var selector = prompt('Which div?');
  // var cls = prompt('Class to add?');
  // var new_text = prompt('What would you like to say?');
  // $(selector).addClass(cls);
  // $(selector).text(new_text);

  // var selector_to_hide = prompt('Which node do you want to hide?');
  // $(selector_to_hide).hide();
}