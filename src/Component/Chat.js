import React, { useRef, useEffect, useState } from 'react';
import { Scrollbars } from 'rc-scrollbars';
import {webSocketEndpoint} from './Endpoint';

function Chat(props) {
    // console.log("Room Id", props.roomId);
    const [messages,setMessages] = useState([]);
    const [sendMessageData, setSendMessageData] = useState('');
    const ws = useRef(null);
    const roomId = props.roomId;
    // console.log("Room id in chat is",roomId )
    const wse = webSocketEndpoint +  roomId+ "/";
    // console.log("Wse in room is ", wse)
    const ws1 = new WebSocket(wse)
   
    useEffect(() => {
        ws.current = ws1;
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = (e) => {
            const message1 = JSON.parse(e.data);
            if (message1.message){
                setMessages(messages => [...messages, message1.message]);
            }
        }
        return () => {
            ws.current.close();
        };
    }, [messages]);


    const sendMessage=(event)=>{
        event.preventDefault();
        const message = { message: sendMessageData, videoUrl:null }
        ws1.send(JSON.stringify(message))
        setSendMessageData('')
    }

    const scrollBarStyle ={
        // padding:'10px',
        padding: '11.4px 12px',
        width: 310, 
        height: 480,
        // border: '2px solid red'
    }

    return (
        <div>
            <Scrollbars style={ scrollBarStyle}>
                {messages.map((message)=>(
                    <p>{message}</p>
                ))}
            </Scrollbars>
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