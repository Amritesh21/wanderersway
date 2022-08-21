import { Box, Button, Grid } from "@mui/material"
import React from "react";
import { logInAPICall } from "../ApiLinkCall/loginCalls";
import { LoginPageLogo, StyledTextFiled } from "./LoginPageCoreComponents";

export const LoginComponent = (props) => {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userNameError, setUserNameError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const handleOnLoginButton = () => {
        if (userName.trim() === "") {
            setUserNameError(true);
        }
        if (password.trim() === "") {
            setPasswordError(true);
        }
        if (userName.trim() !== "" && password.trim() !== "") {
            setUserNameError(false);
            setPasswordError(false);
            logInAPICall({ username: userName, password: password }, props.setIsUserLoggedIn);
        }
    }
    return (
        <Grid container spacing={3} flexDirection={"column"}>
            <Grid item>
                <LoginPageLogo />
            </Grid>
            <Grid item>
                <StyledTextFiled
                    valueVar={userName}
                    setterMethod={setUserName}
                    label={"Enter your username"}
                    error={userNameError}
                    helperText="Username cannot be empty"
                />
            </Grid>
            <Grid item>
                <StyledTextFiled
                    valueVar={password}
                    setterMethod={setPassword}
                    label={"Enter your password"}
                    error={passwordError}
                    helperText="Password cannot be empty"
                />
            </Grid>
            <Grid item justifyContent={'center'}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Button variant="contained" sx={{ width: '35px', alignSelf: 'center' }} color="error" onClick={() => handleOnLoginButton()}>Login</Button>
                    <Button onClick={() => props.setViewType("signup")}>New user? signup here</Button>
                </Box>
            </Grid>
        </Grid>
    )
}