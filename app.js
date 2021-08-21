const team = {
  _players:[
    { 
      firstName: 'Pete', 
      lastName: 'Wheeler', 
      age: 54
    }, 
    { 
      firstName: 'Prince', 
      lastName: 'Wells', 
      age: 31
    }, 
    { 
      firstName: 'Corelli', 
      lastName: 'Fremps', 
      age: 35
    }
  ],
  _games:[
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
   {
  opponent: 'Panthers',
  teamPoints: 58,
  opponentPoints: 17
},
{
  opponent: 'Wailers',
  teamPoints: 32,
  opponentPoints: 25
}
],

  
get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },


addPlayer (firstName, lastName, age) {
     const player = {
       firstName,
      lastName,
      age
     }
     this._players.push(player);
   },

   addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this._games.push(game);
  },
   
};
team.addGame('Titans', 100, 98);
//console.log(team.players);

team.addGame('Berekum Chelsea', 34, 19);
team.addGame('Kotoko', 55, 28);
team.addGame('Hearts of Oak', 39, 40);

//console.log();
//console.log(team.players);
console.log(team.games);

