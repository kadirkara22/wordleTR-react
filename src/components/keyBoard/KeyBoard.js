import React, { useEffect, useState } from 'react'
import './keyBoard.css'
import Keys from '../../api/keyBoard.json'
const KeyBoard = () => {
    const [keys, setKey] = useState([])

    useEffect(() => {
        setKey(Keys.keys)
    }, [])

    return (
        <div className="key-container">
            {
                keys.map((item, index) => (
                    <button className="key-container button" key={index} id={item}>{item}</button>
                ))

            }

        </div>
    )
}

export default KeyBoard
