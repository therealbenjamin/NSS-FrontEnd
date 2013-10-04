test("word_to_pig", function() {
  deepEqual(word_to_pig("hello"), "elloha", "Passed!" );
});

test("reverse_words_to_pig", function() {
  deepEqual(reverse_words_to_pig("hello, nashville, code"), "odeca; ashvillena; elloha", "Passed!" );
});