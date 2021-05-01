import React, {useState} from 'react';
import ReactPlayer from 'react-player';


function VideoPlayer(props) {
    
    const [playStatus, setPlayStatus] = useState(false)

    const playFunction = (event) => {
        event.preventDefault();
        setPlayStatus(!playStatus)
    }

    return (
        <div>
            <ReactPlayer
                style={props.style}
                url={props.videoUrl}
                playing = {playStatus}
                playIcon={<button onClick={playFunction}>Play</button>}
                width = "1000px"
                height = "564px"
            />
            <button style={props.style}
                onClick={playFunction}
            >{playStatus? "Pause" :"Play"} </button>
        </div>
    )
}

export default VideoPlayer
