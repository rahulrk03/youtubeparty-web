import React, { useRef, useEffect, useState }  from 'react';
import ReactPlayer from 'react-player';
import {webSocketEndpoint} from './Endpoint';


function VideoPlayer(props) {
    // console.log("Room Id", props.roomId)
    
    const [playStatus, setPlayStatus] = useState(false)
    // console.log("VideoUrl is-", props.videoUrl)
    // const playFunction = (event) => {
    //     event.preventDefault();
    //     setPlayStatus(!playStatus)
    // }
    const roomId = props.roomId;
    const wse = webSocketEndpoint +  roomId+ "/";
    const ws1 = new WebSocket(wse)
    const ws = useRef(null);

    const playFunction=(event)=>{
        event.preventDefault();
        // setVideoUrl(input)
        setPlayStatus(!playStatus)
        // const newStatus = ''
        if (playStatus){
            const message = {playStatus:"Stop"}
            ws1.send(JSON.stringify(message))
        }
        else{
            const message = {playStatus:"Resume"}
            ws1.send(JSON.stringify(message))
        }
    }

    useEffect(() => {
        ws.current = new WebSocket(wse);
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = (e) => {
            const message1 = JSON.parse(e.data);
            if (message1.playStatus === "Resume"){
                setPlayStatus(true)
            }
            else{
                setPlayStatus(false)
            }
        }
        return () => {
            ws.current.close();
        };
    });

    return (
        <div>
            <ReactPlayer
                style={props.style}
                url={props.videoUrl}
                playing = {playStatus}
                playIcon={<button onClick={playFunction}>Play</button>}
                width = "920px"
                height = "500px"
            />
            <button style={props.style}
                onClick={playFunction}
            >{playStatus? "Pause" :"Play"} </button>
        </div>
    )
}

export default VideoPlayer
