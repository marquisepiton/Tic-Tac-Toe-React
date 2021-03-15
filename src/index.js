import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
Definition:

React - React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
        It lets you compose complex UIs from small and isolated pieces of code called “components”.

Components - Pieces of code that React use to render on the screen.

Props - (Short for "Properties") Are parameters that components use.

Render - Returns a description of what you want to see on the screen. 

JSX - extension that will allow you to write HTML and javascript files. 

*/

// Square class
class Square extends React.Component {
    constructor(props){
        super(props);
        // Remember what the user would click. 
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}
            >
                {this.props.value}
            </button>
        );
    }
}
// Class "Board" which inherit from "React.Component"
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    // A method that will render the the squares for the game.
    renderSquare(i) {
        return ( <Square value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}
                    />
        );

    }          
    render() {
        const status = 'Next player: X';

        // This return will render the squares
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
class Game extends React.Component {

    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{/* status */}</div>
                    <ol>{/* ToDo */}</ol>
                </div>
            </div >
        );

    }
}


//========================================================================


// Render the board.
ReactDOM.render(

    <Game />,
    document.getElementById('root')
);






