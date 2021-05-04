import React, {useState} from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Room from './Room';

function JoinRoom(props) {
    const location = useLocation();
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    console.log("user is:", userName)
    const containerStyle={
        padding: "10px",
        display: 'flex', 
        flexDirection: 'row',
    }

    const roomStyle={
        // width:"30%",
        display: 'flex', 
        flexDirection: 'column',
        padding:"10px",
        textDecoration: 'none'
    }

    useEffect(() => {
        // console.log(location.pathname);
        console.log(location.state);
        setRoomId(location.state.roomId)
        setUserName(location.state.userName)
     }, [location]);
    return (
        <div>
            <div style={containerStyle}>
                <Room style={roomStyle} roomId={roomId} />
            </div>
        </div>
    )
}

export default JoinRoom
