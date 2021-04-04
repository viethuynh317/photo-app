import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  button: {
    background: 'green',
    "&:hover": {
      background: 'black',
    }
  }
}));


const AppHeader = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
              Photos
          </Typography>
          <Button color="secondary" variant="contained" className={classes.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    
  )
}

AppHeader.propTypes = {

}

export default AppHeader
