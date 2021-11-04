import React from 'react'
import {Button} from 'react-bootstrap'


export default function TicTacToe() {
    return (
        <div className="col-md-6 col-sm-12 py-2 justify-content-center">
            <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                <img className="card-img-top image-fluid mx-auto p-3" src='/img/TicTacToe.png' alt='food' />
                <br></br>
                <h5 class="card-title fat">TicTacToe Project</h5>
                <p className="card-text">By default, the app should
use the symbols X and O. <br></br>
On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
<br></br>
The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
<br></br>
The Entire Game should be Object-Oriented
</p>
                <p className="card-text">
                    <b>Tech Stack:</b> HTML, CSS, Bootstrap, JavaScript</p>
                    <Button variant="secondary" size="lg" href='https://kadowning1.github.io/tictactoe/' target='_blank'>
      Application
    </Button>
    <Button variant="secondary" size="lg" href='https://github.com/kadowning1/tictactoe' target='_blank'>
      Github Repo
    </Button>
            </div>
        </div>

    )
}
