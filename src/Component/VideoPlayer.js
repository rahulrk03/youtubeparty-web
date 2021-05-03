import React, { useRef, useEffect, useState }  from 'react';
import ReactPlayer from 'react-player';


function VideoPlayer(props) {
    
    const [playStatus, setPlayStatus] = useState(false)

    // const playFunction = (event) => {
    //     event.preventDefault();
    //     setPlayStatus(!playStatus)
    // }

    const ws = useRef(null);
    const ws1 = new WebSocket('ws://localhost:8000/ws/chat/96560426/')

    const playFunction=(event)=>{
        event.preventDefault();
        // setVideoUrl(input)
        console.log(playStatus)
        setPlayStatus(!playStatus)
        console.log(playStatus)
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
        ws.current = new WebSocket("ws://localhost:8000/ws/chat/96560426/");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = (e) => {
            const message1 = JSON.parse(e.data);
            console.log("e", message1);
            if (message1.playStatus == "Resume"){
                console.log("hello")
                setPlayStatus(true)
            }
            else{
                setPlayStatus(false)
            }
        }
        return () => {
            ws.current.close();
        };
    }, []);

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
