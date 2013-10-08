'use strict';

var photos = [];
var index = 0;
var page = 1;
var timer = 0;


$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
}

function searchFlickr(){
  const API_KEY = 'f2b643a85999bc1ce3676579ac5420a4';
  const PER_PAGE = 5;
  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);

  console.log(url);
}

function results(data){
  photos = data.photos.photo;
  timer = setInterval(createImage, 1000);
}

function createImage(){
  var photo = photos[index];


  var url = 'url(http://farm'+ photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg)';
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image', url);
  $('#photos').prepend($div);

  if(index < photos.length -1){
    index++;
  }
  else{
    clearInterval(timer);
    index = 0;
    page++;
    searchFlickr();
  }
}
