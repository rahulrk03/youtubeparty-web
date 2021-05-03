import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

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

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
              <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>  
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <HomeIcon />
                  </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Home
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
              </Link>
            </AppBar>
        </div>
    )
}

export default Header
