import { Box, Popover } from "@mui/material"
import headerLogo from './wanderer_logo5.PNG';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { LoginSignUpContainer } from "../UserOperation/LoginSignUpContainer";
import { logoutCall } from "../ApiLinkCall/logoutCall";
import { validateSession } from "../ApiLinkCall/loginCalls";

const UserPopup = (props) => {
    const{
        openUserPopup,
        setOpenUserPopup,
        popupAnchor,
        setIsUserLoggedIn
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
            <Button variant="contained" onClick={() => logoutCall(setIsUserLoggedIn)}>Logout</Button>
        </Popover>
    )
} 

export const RootNavSection = () => {
    const [openUserPopup, setOpenUserPopup] = React.useState(false);
    const [popupAnchor, setPopupAnchor] = React.useState(null);
    const [iseUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

    React.useEffect(() => {
        validateSession(setIsUserLoggedIn);
    },[])

    const handleOpenUserPopup = (event) => {
        setPopupAnchor(event.currentTarget);
        setOpenUserPopup(true);
    }

    return(
        <Box sx={{display: 'flex', justifyContent: 'space-between' }}>
            <Box>
                <img src={headerLogo} alt={"wanderersfamily"} style={{width: '250px', maxHeight: '70px'}}/> 
            </Box>
            <Box>

            </Box>
            <Box>
                <IconButton onClick={(event) => handleOpenUserPopup(event)}>
                    <PersonOutlineIcon />
                </IconButton>
                {iseUserLoggedIn && <UserPopup openUserPopup={openUserPopup} setOpenUserPopup={setOpenUserPopup} popupAnchor={popupAnchor} setIsUserLoggedIn={setIsUserLoggedIn}/>}
                {!iseUserLoggedIn && <LoginSignUpContainer openUserPopup={openUserPopup} setOpenUserPopup={setOpenUserPopup} setIsUserLoggedIn={setIsUserLoggedIn}/>}
            </Box>
        </Box>
    )
}