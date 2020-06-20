import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant ='h4' >
                   COVID 19 Tracking APP
         </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;