import React, {useState, useRef, useEffect} from 'react'
import VideoPlayer from './VideoPlayer'
import Chat from './Chat'
import Button from '@material-ui/core/Button';
import {webSocketEndpoint} from './Endpoint';
import ReconnectingWebSocket from 'reconnecting-websocket';
import Box from '@material-ui/core/Box';


const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: {  height: 400, padding:5 },
    borderColor: 'text.primary',
  };


function Room(props) {
    const ws = useRef(null);
    const wse = webSocketEndpoint + props.roomId + "/";
    // const ws1 = new WebSocket(wse)
    const ws1 = new ReconnectingWebSocket(wse)

    const [input, setInput] = useState("")
    const [videoUrl, setVideoUrl] = useState("")
    console.log('Username is - ', props.userName)

    const sendMessage=(event)=>{
        event.preventDefault();
        // console.log("videoUrl is: ", input)
        const message = { videoUrl: input, message:null }
        ws1.send(JSON.stringify(message))
        setInput('')
    }

    useEffect(() => {
        ws.current = ws1;
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");
        ws.current.onmessage = (e) => {
            const message1 = JSON.parse(e.data);
            // console.log("e", message1);
            if (message1.videoUrl){
                setVideoUrl(message1.videoUrl)
            }
        }
        return () => {
            ws.current.close();
        };
    }, [videoUrl]);

    // const addInput = (event) => {
    //     event.preventDefault();
    //     setVideoUrl(input)
    //     setInput('')
    // }

    const containerStyle={
        display: 'flex', 
        flexDirection: 'row',
    }

    const formStyle = {
        fontFamily: "Arial",
        paddingBottom: "20px",
        marginLeft: "20px",
        display: 'flex', 
        flexDirection: 'column',
    };
    const roomIdStyle ={
        display: 'flex', 
        flexDirection: 'column',
        // padding:"10px",
        textDecoration: 'none',
        marginLeft:'650px',
    }

    const mainContentStyle ={
        display: 'flex', 
        flexDirection: 'row',
    }

    const videoPlayerStyle = {
        marginLeft: "20px",
        display: 'flex', 
        flexDirection: 'column',
        paddingRight:'10px'
    };

    const chatStyle ={
        display: 'flex', 
        flexDirection: 'column',
        float:'right'
    }

    const inputStyle ={
        height:'35px',
        padding: '5px',
        width: '70%'
    }
    const inputStyleChat={
        marginLeft:10,
        float:'bottom',
        marginTop:20,
        justifyContent: 'flex-end',
    }


    return (
        <div>
            <div style={containerStyle}>
                <form style={formStyle}>
                    <label>
                        <input style={ inputStyle }type="text" name="name" 
                            placeholder= "Enter Video Url"
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                        />
                        <Button  variant="contained"
                        color="primary"
                       onClick={sendMessage}>
                       Submit
                   </Button>
                    </label>
                    {/* <TextField
                        id="filled-margin-dense"
                        placeholder="Enter Video URL"
                        className={classes.textField}
                        margin="dense"
                        variant="filled"
                        ></TextField><Button  variant="contained"
                        color="primary"
                       onClick={sendMessage}>
                       Join Room
                   </Button> */}
                </form>
                <div style={roomIdStyle}>
                    <strong>Room Id: {props.roomId}</strong>
                </div>
            </div>
            <div style={mainContentStyle}>
                <VideoPlayer 
                    style={videoPlayerStyle}
                    videoUrl={videoUrl} 
                    roomId ={props.roomId} />
                <Box borderLeft={2.5} {...defaultProps}>
                    <Chat style={inputStyleChat} roomId ={props.roomId}/>
                </Box>
            </div>
        </div>
    )
}


export default Room

