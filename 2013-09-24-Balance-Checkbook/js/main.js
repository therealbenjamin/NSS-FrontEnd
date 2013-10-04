var name = prompt("What is your name?");
var initial_balance = prompt("What is your initial balance?");
var deposit_1 = prompt("Enter first deposit amount:");
deposit_1 = parseFloat(deposit_1);

var deposit_2 = prompt("Enter second deposit amount:");
deposit_2 = parseFloat(deposit_2);

var deposit_3 = prompt("Enter third deposit amount:");
deposit_3 = parseFloat(deposit_3);

var withdrawal_1 = prompt("Enter first withdrawal amount:");
withdrawal_1 = parseFloat(withdrawal_1);

var withdrawal_2 = prompt("Enter second withdrawal amount:");
withdrawal_2 = parseFloat(withdrawal_2);

var withdrawal_3 = prompt("Enter third withdrawal amount:");
withdrawal_3 = parseFloat(withdrawal_3);

var closing_balance = ((deposit_1 + deposit_2 + deposit_3) - (withdrawal_1 + withdrawal_2 + withdrawal_3));
closing_balance = parseFloat(closing_balance);



console.log("Your name is " + name);

if(closing_balance < 0)
{
  var final_balance = closing_balance - 50;
  parseFloat(final_balance);
  console.log("You are in overdraft. The final balance less a $50 overdraft fee is $" + final_balance + ".");
}
else if(closing_balance >= 0)
{
  parseFloat(closing_balance);
  console.log("Your final balance is $" + closing_balance + ".");
}
else
{
  parseFloat(closing_balance);
  console.log("Your final balance is $" + closing_balance + ".");
}