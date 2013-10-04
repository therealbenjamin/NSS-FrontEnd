test("piggify", function() {
  deepEqual(piggify("hello"), "elloha", "Passed!" );
  deepEqual(piggify("nashville"), "ashvillena", "Passed!" );
  deepEqual(piggify("hola"), "olaha", "Passed!" );
});

test("pig_sentence", function() {
  deepEqual(pig_sentence("hello, nashville, hola"), "olaha; ashvillena; elloha", "Passed!");
});