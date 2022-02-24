import React, { useEffect, useState } from 'react'
import './keyBoard.css'
import { useDispatch, useSelector } from 'react-redux'
import { addLetter, checkRow, deleteLetter, flipTile } from '../../redux/lettersSlice'
const KeyBoard = () => {
    const isGameOver = useSelector((state) => state.letters.isGameOver)
    const keys = useSelector((state) => state.letters.Keys)


    const dispatch = useDispatch()

    const handleClick = (letter) => {
        if (!isGameOver) {
            if (letter === '«') {
                dispatch(deleteLetter())
                return
            }
            if (letter === 'ENTER') {
                dispatch(flipTile())
                dispatch(checkRow())
                return
            }

            dispatch(addLetter(letter))
        }

    }

    return (
        <div className="key-container">
            {
                keys.map((item, index) => (

                    <button className={item.type} key={index} id={item.key} onClick={() => handleClick(item.key)}>{item.key}</button>
                ))

            }

        </div>
    )
}

export default KeyBoard
