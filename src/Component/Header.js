import React, {useState} from 'react'
import VideoPlayer from './VideoPlayer'

function Header(props) {
    const [input, setInput] = useState("")
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=7zEx0AJguSM")
    const addInput = (event) => {
        event.preventDefault();
        console.log(input)
        setVideoUrl(input)
        setInput('')

    }

    const mystyle = {
        fontFamily: "Arial",
        paddingBottom: "20px",
        marginLeft: "20px",
        marginTop: "20px"
    };

    const videoPlayerStyle = {
        marginLeft: "20px"
    };

    return (
        <div>
            <form style={mystyle}>
                <label>
                Enter Video Url:  
                    <input type="text" name="name" 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    />
                </label>
                <input 
                    type="submit" 
                    value="Submit" 
                    onClick={ addInput }/>
            </form>
            
            <VideoPlayer 
                style={videoPlayerStyle}
                videoUrl={videoUrl} />
        </div>
    )
}


export default Header

