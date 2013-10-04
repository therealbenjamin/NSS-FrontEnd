$(document).ready(initialize);

function initialize()
{
  $('#button1').click(change_green);

  $('#name_btn').click(string_length);
}

function change_green()
{
  $('#green').css({'background-color':'green', 'color':'yellow', 'font-size':'50px', 'text-align':'center'});
}

function string_length()
{
  var string = $('#name_txt').val();
  $('#name_div').text("Your name is " + string.length + " letters long.").css({'background-color':'orange', 'font-size':'90px', 'text-align':'center'});
}