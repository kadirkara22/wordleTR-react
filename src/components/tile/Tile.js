import React from 'react'
import { useSelector } from 'react-redux'
import './tile.css'

const Tile = () => {
    const guessRows = useSelector((state) => state.letters.guessRows)
    const wordle = useSelector((state) => state.letters.wordle)
    const type = useSelector((state) => state.letters.type)
    const flip = useSelector((state) => state.letters.flip)
    const shake = useSelector((state) => state.letters.shake)
    const win = useSelector((state) => state.letters.win)

    console.log(type)
    console.log(wordle)
    console.log(flip)
    console.log(shake)
    console.log(win)



    return (
        <div className="tile-container">
            {
                guessRows.map((guessRow, guessRowIndex) => (
                    <div key={guessRowIndex} id={`guessRow-${guessRowIndex}`}>
                        {

                            guessRow.map((guess, guessIndex) => (

                                <div key={guessIndex} className={`${guess ? "tile PopIn" : "tile"} ${shake[guessRowIndex][guessIndex]} ${flip[guessRowIndex][guessIndex]} ${win[guessRowIndex][guessIndex]} ${type[guessRowIndex][guessIndex]} `} data={guess} id={`guessRow-${guessRowIndex}-tile-${guessIndex}`}>{guess}</div>


                            ))

                        }
                    </div>

                ))
            }

        </div>
    )
}

export default Tile
