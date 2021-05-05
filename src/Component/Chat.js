import React, { useRef, useEffect, useState } from 'react';
import { Scrollbars } from 'rc-scrollbars';
import {webSocketEndpoint} from './Endpoint';
import ReconnectingWebSocket from 'reconnecting-websocket';
import Box from '@material-ui/core/Box';


const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: {  height: 440, padding:5 },
    borderColor: 'text.primary',
  };

  
function Chat(props) {
    // console.log("Room Id", props.roomId);
    const [messages,setMessages] = useState([]);
    const [sendMessageData, setSendMessageData] = useState('');
    const ws = useRef(null);
    const roomId = props.roomId;
 
    const wse = webSocketEndpoint +  roomId+ "/";
    const ws1 = new ReconnectingWebSocket(wse)
   
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
        // ws1.addEventListener('open', function (event) {
        //     ws1.send(JSON.stringify(message))
        // });
        
        setSendMessageData('')
    }

    const scrollBarStyle ={
        padding: '11.4px 12px',
        width: '100%', 
        height: 450,
    }
    

    return (
        <div>
            {/* <Box borderLeft={2.5} {...defaultProps}> */}
            <Scrollbars style={ scrollBarStyle}>
                {messages.map((message)=>(
                    <p>{message}</p>
                ))}
            </Scrollbars>
            {/* </Box> */}
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