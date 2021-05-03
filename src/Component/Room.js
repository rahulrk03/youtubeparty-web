import React, {useState} from 'react'
import VideoPlayer from './VideoPlayer'

function Room(props) {
    const [input, setInput] = useState("")
    const [videoUrl, setVideoUrl] = useState("")
    const addInput = (event) => {
        event.preventDefault();
        console.log(input)
        setVideoUrl(input)
        setInput('')

    }

    const containerStyle={
        display: 'flex', 
        flexDirection: 'row',
    }

    const formStyle = {
        fontFamily: "Arial",
        paddingBottom: "20px",
        marginLeft: "20px",
        // marginTop: "20px",
        display: 'flex', 
        flexDirection: 'column',
        // width:"100%"
    };

    // const roomStyle={
    //     padding:"10px",
    //     textDecoration: 'none'
    // }
    const roomIdStyle ={
        display: 'flex', 
        flexDirection: 'column',
        // padding:"10px",
        textDecoration: 'none',
        marginLeft:'650px',
    }

    const videoPlayerStyle = {
        marginLeft: "20px"
    };
    return (
        <div>
            <div style={containerStyle}>
                <form style={formStyle}>
                    <label>
                    Enter Video Url:  
                        <input type="text" name="name" 
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                        />
                        <input 
                        type="submit" 
                        value="Submit" 
                        onClick={ addInput }/>
                    </label>
                </form>
                <div style={roomIdStyle}>
                    <strong>Room Id: {props.roomId}</strong>
                </div>
            </div>
            <VideoPlayer 
                style={videoPlayerStyle}
                videoUrl={videoUrl} />
        </div>
    )
}


export default Room

