import React, { useRef, useEffect, useState } from 'react'

function Chat() {
    const [messages,setMessages] = useState([]);
    const [sendMessageData, setSendMessageData] = useState('');
    const ws = useRef(null);
    const ws1 = new WebSocket('ws://localhost:8000/ws/chat/hhh/')
   
    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:8000/ws/chat/hhh/");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = (e) => {
            const message1 = JSON.parse(e.data);
            console.log("e", message1.message);
            setMessages(messages => [...messages, message1.message]);
        }
        return () => {
            ws.current.close();
        };
    }, [messages]);


    const sendMessage=(event)=>{
        event.preventDefault();
        const message = { message: sendMessageData }
        ws1.send(JSON.stringify(message))
        setSendMessageData('')
    }

    return (
        <div>
            {messages.map((message)=>(
                <h3>{message}</h3>
            ))}
            <form onSubmit={sendMessage}>
                <label>
                    Enter Message:
                    <input type="text" name="message" 
                    value={sendMessageData} 
                    onChange={e => setSendMessageData(e.target.value)}/>
                </label>
            </form>
            
        </div>
    )
}

export default Chat