import { Box, Typography } from "@material-ui/core";
import { Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from "@mui/material"
import React from "react";
import { logInAPICall } from "../ApiLinkCall/loginCalls";

const StyledTextFiled = (props) => {
    const handleOnChange = (event) => {
        props.valueVar.current = event.target.value;
    }
    return(
        <TextField
        value={props.valueVar.current}
        onChange={(event) => handleOnChange(event) } 
        label={props.label}
        sx={{
            '.MuiOutlinedInput-root':{
                height: '40px'},
            '.MuiInputLabel-root':{
                top: '-5px',
                fontSize: '13px'
            } 
        }}/>
    )
}

export const UserLoginComponent = (props) => {
    const {
        openUserPopup,
        setOpenUserPopup,
        setIsUserLoggedIn
    } = props;

    const userName = React.useRef();
    const password = React.useRef();
    const handleOnLoginButton = () =>{
        logInAPICall({username: userName.current, password : password.current}, setIsUserLoggedIn)
    }
    return(
        <Dialog open={openUserPopup} onClose={() => setOpenUserPopup(false)}>
            <DialogContent>
                <Grid container spacing={3} flexDirection={"column"}>
                    <Grid item>
                        <StyledTextFiled valueVar={userName} label={"Enter your username"}/>
                    </Grid>
                    <Grid item>
                        <StyledTextFiled valueVar={password} label={"Enter your password"}/>
                    </Grid>
                    <Grid item justifyContent={'center'}>
                        <Button variant="outlined" onClick={() => handleOnLoginButton()}>Login</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
} 