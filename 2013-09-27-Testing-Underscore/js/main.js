function add_5(x) {
  return x+5;
};

function square(x) {
  return x*x;
};

function area(x,y) {
  return x*y;
};

function volume(l, w, h) {
  return l*w*h;
};

function power(base, exp) {
  var sum = 1;
  for(var i = 0; i < exp; i++)
    sum *= base;
  return sum;
};

function greeting(x) {
  return "Greetings, " + x + "!";
};

function pig(string) {
  return string.slice(1) + string[0] + 'a';
};

function pig_greeting(greeting, name) {
  return pig(greeting) + ', ' + pig(name) + '!';
};

function pig_sentence(sentence) {
  temp = sentence.split(" ");
  var pig_array = [];
  for(i = 0; i < temp.length; i++)
  {
    pig_array.push(pig(temp[i]));
  }
  return pig_array.join(" ");
}