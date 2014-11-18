localStorageHighScore
=====================

Creating a local storage high score table. 

``` javascript
// create a LocalHighScore object;
var clientHighScores = new LocalHighScore();


// add a new high score
var newScore = 20;
clientHighScores.setNewScore(newScore);
// Result = clientHighScores.local -> Storage{HighScore:"20",length:1}

newScore = 21;
clientHighScores.setNewScore(newScore);
// Result = clientHighScores.local -> Storage{HighScore:"20,21",length:1}

// handles duplicates
// newScore still 21
clientHighScores.setNewScore(newScore);
// Result = clientHighScores.local -> Storage{HighScore:"20,21",length:1}


// clear the high score table
clientHighScores.resetScores();
// Result = clientHighScores.local -> Storage {length: 0}
```
