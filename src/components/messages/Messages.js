import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './message.css'
const Messages = () => {
    const [message, setMessage] = useState();
    const messages = useSelector((state) => state.letters.message)

    useEffect(() => {
        setMessage(messages)
        setTimeout(() => {
            setMessage("")
        }, 4000)
    }, [messages])

    return (
        <div className={message ? "messages" : "message-container"}>
            <div>{message}</div>
        </div>
    )
}

export default Messages
