'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
  $('#photos').on('dblclick', '.photo', removeImage);
  $('#clear').click(clearImages);
  $('#photos').on('click', '.photo', highlightImage);
  $('#delete').click(deleteImages);
  $('#save').click(saveImages);
}

function saveImages(){
  var $selected = $('.highlight');
  $selected.removeClass('highlight');
  $('#saved_photos').prepend($selected);
}

function deleteImages(){
  $('.highlight').remove();
}

function highlightImage(){
  $(this).toggleClass('highlight');
}

function clearImages()
{
  $('#photos').empty();
}

function searchFlickr(){
  const API_KEY = 'f2b643a85999bc1ce3676579ac5420a4';
  const PER_PAGE = 100;
  var page = 1;

  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);
}

function results(data){
  for(var i = 0; i < data.photos.photo.length; i++){
    createImage(data.photos.photo[i]);
  }
}

function createImage(photo){
  var url = 'url(http://farm'+ photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg)';
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image', url);
  $('#photos').prepend($div);
}

function removeImage(){
  $(this).remove();
}