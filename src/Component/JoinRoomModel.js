import React, {useState} from 'react'
import { useDialog } from 'react-st-modal';
import Button from '@material-ui/core/Button';


function JoinRoomModel() {

   const dialog = useDialog();
  
   const [value, setValue] = useState();

   const onClickJoin = (event) => {
    event.preventDefault();
    dialog.close(value);
    }

    const onClickClose = (event) => {
        event.preventDefault();
        dialog.close();
        }

    const containerStyle={
        padding: "10px",
        marginTop:"10px",
        // display: 'flex', 
        // flexDirection: 'row'
    }

    const inputBoxStyle ={
        display: 'flex',
        flexDirection:'row'
    }

    const buttonBoxStyle ={
        display: 'flex',
        flexDirection:'row',
        marginLeft:'165px',
        marginTop:'20px'
    }

   return (
     <div style={containerStyle}>
            <label style={inputBoxStyle}>
                Enter Room Id: 
                    <input
                        type="text"
                        style={{marginLeft:"15px"}}
                        onChange={(e) => {
                        setValue(e.target.value);
                        }}
                    />
            </label>
            <div style={buttonBoxStyle}>
            <Button  variant="contained"
                     color="primary"
                    onClick={onClickJoin}>
                    Join Room
                </Button>
                <Button variant="contained" 
                    color="secondary"
                    style={{marginLeft:"10px"}}
                    onClick={onClickClose}>
                    Cancel
                </Button>
            </div>
     </div>
   );
 }

export default JoinRoomModel
