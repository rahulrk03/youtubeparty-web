import React, {useState} from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Room from './Room';

function JoinRoom(props) {
    const location = useLocation();
    const [roomId, setRoomId] = useState('')
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
        // console.log(location.state.roomId);
        setRoomId(location.state.roomId)
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
