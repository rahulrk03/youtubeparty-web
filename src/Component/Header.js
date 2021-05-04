import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { CustomDialog } from 'react-st-modal';
import { useHistory } from 'react-router-dom';
import UserNameModal from './UserNameModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(10)
  },
}));

function Header(props) {
    const history = useHistory();
    const classes = useStyles();
    const [userName, setUserName] = useState(props.userName);
    const routeChange = () =>{
      history.push('/');
    }


  const handleChange= async ()=> {
    const result = await CustomDialog(<UserNameModal userName={userName}/>, 
      {
          title: 'Hello!'
        });
      if (result){
        setUserName(result)
      }
  }


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="menu"
                  onClick={routeChange}>
                    <HomeIcon />
                  </IconButton>
                <Typography variant="h6" onClick={routeChange} className={classes.title}>
                    Home
                </Typography>
                <form>
                <Typography variant="h6" className={classes.title} onClick={handleChange}>
                    {userName}
                </Typography>
                </form>
                {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
