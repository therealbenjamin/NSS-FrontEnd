/* this is a multi-line
    javascript
    */

var first_name = prompt("What is your first name?");
var last_name = prompt("What is your last name?");
var full_name = first_name + " " + last_name;
var gender = prompt("What is your gender?");
var age = prompt("How old are you?");
age = parseInt(age);
var bday_month = prompt("What month were you born in?");
var current_month = prompt("What month is it right now?");

// debugger;

var test1 = prompt("Score for Test 1?");
test1 = parseFloat(test1);

var test2 = prompt("Score for test 2?");
test2 = parseFloat(test2);

var test3 = prompt("Score for test 3?");
test3 = parseFloat(test3);

var sum = 0;
sum += test1;
sum += test2;
sum += test3;

var average = sum/3;

if(average < 70)
  console.log("Failed");
else if((average >= 70) && (average < 80))
  console.log("You made a C.");
else if ((average >= 80) && (average < 90))
  console.log("You made a B.");
else
  console.log("You made an A.");


console.log("Your full name is: " + full_name);
console.log("The average of your test scores is: " + average + "!");

var null_variable = null, undefined_variable;

// BRANCHING

if((first_name == "benjamin") && (last_name == "blackburn"))
  console.log("hey, i recognize you!");

if((gender == "female") && (age >= 21))
  console.log("Free drinks! Ladies night! Woot woot!");
else if((gender == "male") && (age >= 21))
  console.log("Looks like you are buying!");
else
  console.log("Not old enough to drink or indeterminate gender!");

var can_have_cake = (current_month == bday_month);
var cake = (current_month == bday_month) ? "chocolate":"vanilla"
console.log("Marie Antoinette says that you are eating " + cake + "!");

switch(bday_month)
{
  case 'january':
    console.log("You are a Capricorn");
    break;
  case 'february':
    console.log("You are an Aquarius");
  default:
    console.log("You are not of this world, godspeed!")
}



