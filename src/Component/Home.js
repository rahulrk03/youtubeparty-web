import React from 'react';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupIcon from '@material-ui/icons/Group';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {ApiEndpoint} from './Endpoint'
import './JoinModal.css';
import JoinRoomModel from './JoinRoomModel';
import { CustomDialog, Alert } from 'react-st-modal';
// import JoinRoom from './JoinRoom'
// import Header from './Header';

function Home() {
    const history = useHistory();

    function handleClick() {
        ApiEndpoint.post('/api/createRoom/')
            .then(res => {
                history.push({
                    pathname: "/joinroom",
                    state: { roomId: res.data.data }
                });
              })
      }

    const onClickJoinRoom= async ()=> {
       
            const result = await CustomDialog(<JoinRoomModel />, 
                {
                    title: 'Join a room'
                  });
            
            if (result) {
                ApiEndpoint.post('/api/joinRoom/',
                    {
                        "room_name": result
                    }
                )
                .then(res => {
                    console.log(res)
                    history.push({
                        pathname: "/joinroom",
                        state: { roomId: result }
                    }
                    );
                })
                .catch(error=>{
                    Alert('Wrong Room Id', 'Ooops');
                });
            } else {
                console.log("NotDone")
            }
            
    }

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
        padding:"10px",
        textDecoration: 'none'
    }
    const joinButtonStyle ={
        width:"30%",
        display: 'flex', 
        flexDirection: 'column',
        padding:"10px",
        marginLeft:"90px",
        textDecoration: 'none'
    }


    return (
        <div>
            {/* <Header /> */}
            <div style={containerStyle}>
            <Link style= {createButtonStyle}  onClick={handleClick}>
                <Button  variant="contained">
                    <PersonAddIcon style={{ fontSize: "50px" }}></PersonAddIcon>
                        Create a room
                </Button>
                </Link>
                <div style= {joinButtonStyle}>
                <Button variant="contained" onClick={onClickJoinRoom}>
                            <GroupIcon style={{ fontSize: "50px" }}></GroupIcon>
                                Join a room
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
