'use strict';


$(document).ready(initialize);

function initialize()
{
  $('#set_logo').click(setLogoImage);
  $('#set_balance').click(setBalance);
  $('#deposit').click(depositFunds);
  $('#withdraw').click(withdrawFunds);
  $('').on('click', '.deposit_list', '.withdraws_list', undoTransaction);
}

function setLogoImage()
{
  var newLogo = $('#url').val();
  $('#logo').attr('src', newLogo);

  if($('#logo').attr('src') !== '')
  {
    $('#url').remove();
    $('#set_logo').remove();
    $('#input_balance').focus();
  }
}

var balance = 0;

function setBalance()
{
  balance = $('#input_balance').val();
  balance = parseInt(balance, 10);
  $('#balance').text('$' + balance + '.00');
  $('#input_balance').remove();
  $('#set_balance').remove();
  $('#amount').focus();
}

function deposit(balance, amount)
{
  return balance + amount;
}

function withdraw(balance, amount)
{
  return balance - amount;
}

function depositFunds()
{
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  balance = deposit(balance, amount);
  $('#balance').text('$' + balance + '.00');
  updateDisplay();

  if(balance >= 0)
  {
    $('#balance').removeClass('negative');
  }

  var $deposit = $('<div>');
  $deposit.addClass('deposit_list');
  $('#deposits').append('$' + amount + '.00<br>');

}

function withdrawFunds()
{
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  balance = withdraw(balance, amount);
  $('#balance').text('$' + balance + '.00');
  updateDisplay();

  if(balance < 0)
  {
    $('#balance').addClass('negative');
  }

  var $withdraw = $('<div>');
  $withdraw.addClass('withdraws_list');
  $('#withdraws').append('$' + amount + '.00<br>');
}

function updateDisplay()
{
  $('#amount').val('');
  $('#amount').focus();
}

function undoTransaction()
{
  var $transaction = $(this);
  var cls = $transaction.attr('class');
  var amount = $transaction.text();
  amount = amount.slice(1);
  amount = parseInt(amount, 10);

  if(cls === 'deposit_list')
  {
    balance -= amount;
  }
  else
  {
    balance += amount;
  }

  $transaction.remove();
  updateDisplay();
}