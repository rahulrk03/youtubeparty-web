import React from 'react';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupIcon from '@material-ui/icons/Group';
import JoinRoom from './JoinRoom'


function Home() {
    const containerStyle={
        padding: "10px",
        marginTop:"4%",
        marginLeft: "15%",
        display: 'flex', 
        flexDirection: 'row'
    }
    
    const createButtonStyle={
        width:"30%",
        display: 'flex', 
        flexDirection: 'column',
        padding:"10px"
    }
    const joinButtonStyle ={
        width:"30%",
        display: 'flex', 
        flexDirection: 'column',
        padding:"10px",
        marginLeft:"90px"
    }

    return (
        <div>
            <div style={containerStyle}>
                <Button style= {createButtonStyle} variant="contained">
                    <PersonAddIcon style={{ fontSize: "50px" }}></PersonAddIcon>
                        Create a room
                </Button>
                <Button style= {joinButtonStyle} variant="contained">
                    <GroupIcon style={{ fontSize: "50px" }}></GroupIcon>
                        Join a room
                </Button>
            </div>
        </div>
    )
}

export default Home
