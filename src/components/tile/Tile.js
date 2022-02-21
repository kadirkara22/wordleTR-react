import React from 'react'
import './tile.css'
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
const Tile = () => {



    return (
        <div className="tile-container">
            {
                guessRows.map((guessRow, guessRowIndex) => (
                    <div key={guessRowIndex} id={`guessRow-${guessRowIndex}`}>
                        {
                            guessRow.map((guess, guessIndex) => (
                                <div key={guessIndex} className='tile' id={`guessRow-${guessRowIndex}-tile-${guessIndex}`}></div>

                            ))
                        }
                    </div>
                ))
            }

        </div>
    )
}

export default Tile
