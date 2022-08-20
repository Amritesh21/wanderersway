import { Box, Popover } from "@mui/material"
import headerLogo from './wanderer_logo5.PNG';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { UserLoginComponent } from "./UserLoginComponent";
import { logoutCall } from "../ApiLinkCall/logoutCall";

const UserPopup = (props) => {
    const{
        openUserPopup,
        setOpenUserPopup,
        popupAnchor,
    } = props; 
    return(
        <Popover
        open={openUserPopup}
        anchorEl={popupAnchor}
        onClose={() => setOpenUserPopup(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        >
            <Button onClick={() => logoutCall()}>Logout</Button>
        </Popover>
    )
} 

export const RootNavSection = () => {
    const [openUserPopup, setOpenUserPopup] = React.useState(false);
    const [popupAnchor, setPopupAnchor] = React.useState(null);
    const [iseUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

    const handleOpenUserPopup = (event) => {
        setPopupAnchor(event.currentTarget);
        setOpenUserPopup(true);
    }

    return(
        <Box sx={{display: 'flex', justifyContent: 'space-between' }}>
            <Box>
                <img src={headerLogo} /> 
            </Box>
            <Box>

            </Box>
            <Box>
                <IconButton onClick={(event) => handleOpenUserPopup(event)}>
                    <PersonOutlineIcon />
                </IconButton>
                {iseUserLoggedIn && <UserPopup openUserPopup={openUserPopup} setOpenUserPopup={setOpenUserPopup} popupAnchor={popupAnchor} />}
                {!iseUserLoggedIn && <UserLoginComponent openUserPopup={openUserPopup} setOpenUserPopup={setOpenUserPopup} setIsUserLoggedIn={setIsUserLoggedIn}/>}
            </Box>
        </Box>
    )
}