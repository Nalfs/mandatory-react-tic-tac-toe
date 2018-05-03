/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props) {
    let message = '';
    switch(props.messageString){
        case 'plr1':
            message = 'Player 1 - your turn!';
            break;
        case 'plr2':
            message = 'Player 2 - your turn!';
            break;
        case 'plr1won':
            message = 'Player 1 wins!';
            break;
        case 'plr2won':
            message = 'Player 2 wins!';
            break;
        case 'draw':
            message = 'Its a draw!';
            break;
        default:
            break;
    }

    return (
        <div>{message}</div>
    );
}