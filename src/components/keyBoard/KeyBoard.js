import React, { useEffect, useState } from 'react'
import './keyBoard.css'
import Keys from '../../api/keyBoard.json'
import { useDispatch, useSelector } from 'react-redux'
import { addLetter, checkRow, deleteLetter, flipTile } from '../../redux/lettersSlice'
const KeyBoard = () => {
    const isGameOver = useSelector((state) => state.letters.isGameOver)
    const keyColor = useSelector((state) => state.letters.keyColor)
    const [keys, setKey] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        setKey(Keys.keys)
    }, [])

    const addColorKey = () => {


    }
    addColorKey()
    console.log(keyColor)
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

                    <button className={item.color} key={index} id={item} onClick={() => handleClick(item)}>{item}</button>
                ))

            }

        </div>
    )
}

export default KeyBoard
