import React, {useState, useRef} from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Room from './Room';

function JoinRoom(props) {
    const location = useLocation();
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    // console.log("user is:", props.userName)
    // console.log("room id is:", roomId)
    const willMount = useRef(true);
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

    // useEffect(() => {
    //     // console.log(location.pathname);
    //     console.log(location.state);
    //     setRoomId(location.state.roomId)
    //     setUserName(location.state.userName)
    //  },[roomId]);
    
    if (willMount.current) {
        setRoomId(location.state.roomId)
        setUserName(location.state.userName)
        willMount.current = false;
    } else {
        console.log('Repeated load');
    }


    return (
        <div>
            <div style={containerStyle}>
                <Room style={roomStyle} roomId={roomId} userName={userName}/>
            </div>
        </div>
    )
}

export default JoinRoom
