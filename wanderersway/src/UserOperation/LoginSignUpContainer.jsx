import { Dialog, DialogContent, DialogTitle, Box, IconButton } from "@mui/material"
import React from "react";
import { LoginComponent } from "./LoginComponent";
import { SignUpComponent } from "./SignUpComponent";
import CloseIcon from '@mui/icons-material/Close';

export const LoginSignUpContainer = (props) => {
    const {
        openUserPopup,
        setOpenUserPopup,
        setIsUserLoggedIn
    } = props;

    const [viewType, setViewType] = React.useState("login");

    const handleClosePopup = () => {
        setViewType("login");
        setOpenUserPopup(false)
    }

    return(
        <>
        <Dialog open={openUserPopup} onClose={() => setOpenUserPopup(false)}>
            <DialogTitle>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton onClick={() => handleClosePopup()}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                {viewType === "login" && 
                <LoginComponent 
                 setIsUserLoggedIn={setIsUserLoggedIn}
                 setViewType={setViewType}
                />}
                {viewType === "signup" && 
                <SignUpComponent 
                setIsUserLoggedIn={setIsUserLoggedIn} 
                setViewType={setViewType}
                />}
            </DialogContent>
        </Dialog>
        </>
    )
} 