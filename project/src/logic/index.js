// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- state: a string describing the current state:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all positions involved in the win, otherwise empty array (STRETCH TASK)

The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:

  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/
export const newGame = () => ({
  playerState: 'plr1',
  playerBoard: [0,0,0,0,0,0,0,0,0],
  line: []
});

/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play

It will return a new game object. If the move was invalid
(because the position was already taken or the game is over),
an unchanged game will be returned.
*/

function declareWinner(game, plr) {
  const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  winPatterns.forEach(pattern => {
    if (game.playerBoard[pattern[0]] == plr
      && game.playerBoard[pattern[1]] == plr
      && game.playerBoard[pattern[2]] == plr) {
        game.playerState = 'plr' + plr + 'won';
        game.line = pattern;
      }
  } )
}

export const makeMove = (game, pos) => {


  if (game.playerBoard[pos] == 0) {
    if (game.playerState == 'plr1') {
      game.playerBoard[pos] = 1;
      game.playerState = 'plr2';
      declareWinner(game, 1);
    } else if (game.playerState == 'plr2') {
      game.playerBoard[pos] = 2;
      game.playerState = 'plr1';
      declareWinner(game, 2);
    }
  }
  
  if (game.playerState == 'plr1' || game.playerState == 'plr2') {
    let freeTiles = game.playerBoard.filter(pos=>pos === 0).length;
    if (freeTiles == 0) {
      game.playerState = 'draw';
    }
  }
  return game;
}