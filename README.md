localStorageHighScore
=====================

Creating a local storage high score table. 

```// create a LocalHighScore object;
var clientHighScores = new LocalHighScore();


// add a new high score
var newScore = 20;
clientHighScores.setNewScore(newScore);

// Result = clientHighScores.local -> Storage{HighScore:"20",length:1}

// clear the high score table
clientHighScores.resetScores();
// Result = clientHighScores.local -> Storage {length: 0}```
