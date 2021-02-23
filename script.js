function Politician(name, color) {
  this.name = name;
  this.electionResults = null;
  this.totalVotes = 0;
  this. tallyTotalVotes = function () {
      this.totalVotes = 0;
      for ( var i = 0; i < this.electionResults.length; i++){
         this.totalVotes = this.totalVotes + this.electionResults[i];
      }
  };
    this.color = color;
}

var elizabeth = new Politician("Elizabeth Warren", [132, 17, 11]);

var jeb = new Politician("Jeb Bush", [245, 141, 136]);

elizabeth.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jeb.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

elizabeth.electionResults[9] = 1;
jeb.electionResults[9] = 28;
elizabeth.electionResults[4] = 17;
jeb.electionResults[4] = 38;
elizabeth.electionResults[43] = 11;
jeb.electionResults[43] = 27;

elizabeth.tallyTotalVotes();
jeb.tallyTotalVotes();

//console.log(elizabeth.totalVotes);
//console.log(jeb.totalVotes);

var winner = "?";

if (elizabeth.totalVotes > jeb.totalVotes) {
    winner = elizabeth.name;
} else if (elizabeth.totalVotes < jeb.totalVotes) {
    winner = jeb.name;
} else {
    winner = "DRAW.";
}

console.log("AND THE WINNER IS...." + winner + "!!!!");

var setStateResults = function(state) {
    theStates[state].winner = null;
    if (elizabeth.electionResults[state] > jeb.electionResults[state]){
        theStates[state].winner = elizabeth;
    } else if (elizabeth.electionResults[state] < jeb.electionResults[state]) {
    theStates[state].winner = jeb;
    }

    var stateWinner = theStates[state].winner;
    if ( stateWinner != null) {
        theStates[state].rgbColor = stateWinner.color;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }
   
    var countryResults = document.getElementById("countryResults");
    var resultsRow = countryResults.children[0].children[0];

    resultsRow.children[0].innerText = elizabeth.name;
    resultsRow.children[1].innerText = elizabeth.totalVotes;
    resultsRow.children[2].innerText = jeb.name;
    resultsRow.children[3].innerText = jeb.totalVotes;
    resultsRow.children[5].innerText = winner;

    var stateResultsTable = document.getElementById("stateResults");
    var header = stateResultsTable.children[0];
    var body = stateResultsTable.children[1];

    var stateName = header.children[0].children[0];
    var stateAbbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Result = body.children[0].children[1];
    var candidate2Result = body.children[1].children[1];
    var winnerName = body.children[2].children[1];
    
    stateName.innerText = theStates[state].nameFull;
    stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

    candidate1Name.innerText = elizabeth.name;
    candidate2Name.innerText = jeb.name;

    candidate1Result.innerText = elizabeth.electionResults[state];
    candidate2Result.innerText = jeb.electionResults[state];

    if (theStates[state].winner === null){
    winnerName.innerText = "DRAW!";
    } else {
    winnerName.innerText = theStates[state].winner.name;
    }
}






































