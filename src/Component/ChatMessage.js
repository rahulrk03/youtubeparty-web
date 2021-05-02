import React from 'react'

function ChatMessage({ message}) {
    return (
        <div>
            <p>
                <strong></strong> <em>{message}</em>
            </p>
        </div>
    )
}

export default ChatMessage
