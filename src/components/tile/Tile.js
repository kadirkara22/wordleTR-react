import React from 'react'
import { useSelector } from 'react-redux'
import './tile.css'

const Tile = () => {

    const guessRows = useSelector((state) => state.letters.guessRows)

    console.log(guessRows)
    return (
        <div className="tile-container">
            {
                guessRows.map((guessRow, guessRowIndex) => (
                    <div key={guessRowIndex} id={`guessRow-${guessRowIndex}`}>
                        {
                            guessRow.map((guess, guessIndex) => (
                                <div key={guessIndex} className={guess ? 'tile PopIn' : 'tile'} data={guess} id={`guessRow-${guessRowIndex}-tile-${guessIndex}`}>{guess}</div>

                            ))
                        }
                    </div>
                ))
            }

        </div>
    )
}

export default Tile
