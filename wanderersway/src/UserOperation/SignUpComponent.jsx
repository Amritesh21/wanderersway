import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material"
import React from "react"
import { createUserAccount } from "../ApiLinkCall/createUserAccount";
import { LoginPageLogo, StyledTextFiled } from "./LoginPageCoreComponents"

export const SignUpComponent = (props) => {
    const [userName, setUserName] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [userType, setUserType] = React.useState(null);
    const [userNameError, setUserNameError] = React.useState(false);
    const [newPasswordError, setNewPasswordError] = React.useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
    const [userTypeError, setUserTypeError] = React.useState(false);

    const userTypes = [{role: "admin", account: "admin"}, {role: "traveller", account: "free"}];

    const handleCreateUser = () => {
        if(userName.trim() !== "" && newPassword.trim() !== "" && confirmPassword.trim() !== "" && userType !== null){
            setUserNameError(false);
            setNewPasswordError(false);
            setConfirmPasswordError(false);
            setUserTypeError(false);
            createUserAccount({userName: userName, newPassword: newPassword, confirmPassword: confirmPassword, userType: userType});
        }else{
            if(userName.trim() === ""){
                setUserNameError(true);
            }
            if(newPassword.trim() === ""){
                setNewPasswordError(true);
            }
            if(confirmPassword.trim() === ""){
                setConfirmPasswordError(true);
            }
            if(userType === null){
                setUserTypeError(true);
            }
        }
    }
    return(
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
                    valueVar={newPassword}
                    setterMethod={setNewPassword}
                    label={"Enter new password"}
                    error={newPasswordError}
                    helperText="Password cannot be empty"
                    type={"password"}
                />
            </Grid>
            <Grid item>
                <StyledTextFiled
                   valueVar={confirmPassword}
                   setterMethod={setConfirmPassword}
                   label={"Confirm Password"}
                   error={confirmPasswordError}
                   helperText="Confirm Password cannot be empty"
                   type={"password"}
                />
            </Grid>
            <Grid item>
                <Autocomplete
                  sx={{height: '40px',
                  '.MuiInputBase-root': {
                    height: '40px',
                    padding:'0px'
                  }
                }}
                  onChange={(event, value) => setUserType(value)}
                  options={userTypes.map((userType) => userType.role) }
                  renderInput={(params) => 
                  <TextField 
                  required 
                  sx={{
                    '.MuiInputLabel-root':{
                        top: '-4px',
                        fontSize: '13px',
                        textTransform: 'capitalize'
                    },
                  }}
                  label="User Type" 
                  error={userTypeError}
                  helperText={userTypeError && "UserType cannot be empty"}
                  {...params} 
                  />}
                />
            </Grid>
            <Grid item justifyContent={'center'}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Button variant="contained" sx={{ width: '100px', alignSelf: 'center' }} color="error" onClick={() => handleCreateUser()}>Sign Up</Button>
                    <Button sx={{fontSize: "12px"}} onClick={() => props.setViewType("login")}>Already Have An Account? Login Here</Button>
                </Box>
            </Grid>
        </Grid>
    )
}