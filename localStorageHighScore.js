function LocalHighScore() {
  "use strict"

  this.local = {};
  this.arrayOfScores = [];
  this.getLocal = function() {
    try {
      if ('localStorage' in window && window['localStorage'] !== null)
        this.local = localStorage;
    } catch (e) {
      return false;
    }
  };

  this.setNewScore = function(roundNumber) {
    var newHighScore = roundNumber;
    // Get scores array or if no scores true
    var scores = this.getPreviousScore();
    var lesserScores = [];
    var flag = false;
    if (typeof scores == 'object') {
      for (var i = 0; i < scores.length; i++) {
        if (scores[i] < newHighScore) {
          if(!flag){
             lesserScores.push(newHighScore);
             flag = true;
          }else{
             if (scores[i + 1])
               lesserScores.push(scores[i + 1]);
          }
        }
        lesserScores.push(scores[i]);
     }
     scores = lesserScores;
      console.log(scores);
      this.addHighScore(scores);
    } else {
      this.addHighScore(newHighScore);
      console.log('New Score added');
    }
  };

  this.getPreviousScore = function() {
    if (this.local.getItem('HighScore'))
      return this.local.getItem('HighScore').split(',');
    else
      return false;
  };

  this.addHighScore = function(scoreToAdd) {
    this.local.setItem('HighScore', scoreToAdd);
    return true;
  };

  this.resetScores = function() {
     this.local.clear();
  };

};
