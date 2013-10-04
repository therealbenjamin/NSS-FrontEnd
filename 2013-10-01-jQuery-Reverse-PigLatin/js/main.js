$(document).ready(initialize);

function word_to_pig(word)
{
  return word.slice(1) + word[0] + "a";
}

function reverse_words_to_pig(sentence)
{
  var words = sentence.split(", ");
  var reversed_words = words.reverse();
  for(var i=0; i < reversed_words.length; i++)
    reversed_words[i] = word_to_pig(reversed_words[i]);
  var new_sentence = reversed_words.join("; ");
  return new_sentence;
}

function run_conversion(new_sentence)
{
  var original = $('#string').val();
  var mod = reverse_words_to_pig(original);
  $('#output').text(modified);
}

function initialize(){
  $('#pig').click(word_to_pig);
}