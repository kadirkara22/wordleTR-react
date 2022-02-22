import React, { useEffect, useState } from 'react'
import './keyBoard.css'
import Keys from '../../api/keyBoard.json'
import { useDispatch } from 'react-redux'
import { addLetter, checkRow, deleteLetter } from '../../redux/lettersSlice'
const KeyBoard = () => {
    const [keys, setKey] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        setKey(Keys.keys)
    }, [])

    const handleClick = (letter) => {

        if (letter === '«') {
            dispatch(deleteLetter())
            return
        }

        if (letter === 'ENTER') {
            dispatch(checkRow())
            return
        }

        dispatch(addLetter(letter))
    }
    return (
        <div className="key-container">
            {
                keys.map((item, index) => (
                    <button className="key-container button" key={index} id={item} onClick={() => handleClick(item)}>{item}</button>
                ))

            }

        </div>
    )
}

export default KeyBoard
