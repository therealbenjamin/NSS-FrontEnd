test("Simple Adding", function(){
  deepEqual(1+1, 2, "Adding 1+1");
});

test("Test First Letter", function(){
  deepEqual("Parthenon"[0], "P", "Find first letter in string");
});

test("Add 5", function(){
  deepEqual(add_5(3), 8, "Adding 5");
  deepEqual(add_5(5), 10, "Adding 5");
  deepEqual(add_5(-5), 0, "Adding 5");
});

test("Square", function(){
  deepEqual(square(5), 25, "Finds the square of a number");
});

test("Test Area", function(){
  deepEqual(area(3,5), 15, "Finds area");
});

test("Test Volume", function(){
  deepEqual(volume(3,3,3), 27, "Finds volume");
});

test("Power", function(){
  deepEqual(power(2,4), 16, "All your base are belong to us");
  deepEqual(power(2,2), 4, "All your base are belong to us");
  deepEqual(power(3,3), 27, "All your base are belong to us");
});

test("Greetings", function(){
  deepEqual(greeting("Jenny"), "Greetings, Jenny!", "Greetings, you!");
});

test("Pig Latin", function(){
  deepEqual(pig("hello"), "elloha", "Pig Latin function");
});

test("Pig Latin Greeting", function(){
  deepEqual(pig_greeting("hello","jenny"), "elloha, ennyja!", "Pig Latin function");
});

test("Pig Latin Sentence", function(){
  var sentence = "coding at the parthenon in nashville";
  var expected = "odingca taa heta arthenonpa nia ashvillena";
  deepEqual(pig_sentence(sentence), expected, "Pig Latin sentence");
});