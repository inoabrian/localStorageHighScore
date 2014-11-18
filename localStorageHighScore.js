function LocalHighScore() {
  "use strict"

  this.local = {};
  this.arrayOfScores = [];

  try {
    if ('localStorage' in window && window['localStorage'] !== null)
      this.local = localStorage;
  } catch (e) {
    return false;
  }

  this.setNewScore = function(roundNumber) {
    var newHighScore = roundNumber;
    // Get scores array or if no scores true
    var scores = this.getPreviousScore();

    if (typeof scores == 'object') {
      for (var i = 0; i < scores.length; i++) {
        if (Number(scores[i]) == newHighScore) {
          return false;
        }
      }
      scores.push(newHighScore);
      scores = scores.sort(function(a, b) {
        return Number(b) - Number(a)
      });
      scores = scores.filter(function(element, index) {
        if (index < 5)
          return element;
      });
      this.addHighScore(scores);
    } else {
      this.addHighScore(newHighScore);
      return true;
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
