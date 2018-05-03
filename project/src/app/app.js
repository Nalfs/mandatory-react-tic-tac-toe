import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = newGame();

    this.handleTileClick=this.handleTileClick.bind(this);
  }

  handleReset(e){
    this.setState(newGame());
  }

  handleTileClick(pos) {
    return () => {
      let newState = makeMove(this.state, pos);
      this.setState({ state: newState });
    }
  }

  render(){
    return (
      <div>
       <Message messageString={this.state.playerState}/>
        <PlayerBoard  state={this.state}
            handleTileClick={this.handleTileClick}
         />
        <button type="button" onClick={e=>this.handleReset(e)}>Reset Game</button>
        </div>
    );
  }
}

class PlayerBoard extends React.Component {
  
  render () {
    let tiles = this.props.state.playerBoard.map((value, pos) => {
      return <Tile
        key={pos}
        piece={value}
        callback={this.props.handleTileClick(pos)}
        line={this.props.state.line.includes(pos)}
      />
    });
    return (

      <div className="board">
          {tiles}
      </div>



    )
  }
}
