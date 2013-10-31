var mm = require('money-math');

var Movie = function(genericMovie){
  this.title = genericMovie.title;
  this.image = genericMovie.image;
  this.color = genericMovie.color;
  this.rated = genericMovie.rated;
  this.studio = genericMovie.studio;
  this.gross = genericMovie.gross;
  this.numTheatres = genericMovie.numTheatres;

  this.grossByTheatre = function(){
    return this.gross / this.numTheatres;
  };

  this.grossUSD = function(){
    try {
    return '$' + mm.format('USD', mm.floatToAmount(this.gross));
  }
    catch(e){
      console.log("gross" + this.gross);
    }
  };

  this.grossByTheatreUSD = function(){
    try {
    return '$' + mm.format('USD', mm.floatToAmount(this.grossByTheatre()));
  }
    catch(e){
      console.log("grossByTheatre" + this.grossByTheatre());
    }
  };
};

module.exports = Movie;