import { Box, TextField } from "@mui/material";
import WanderersfamilyLogo from '../NavigationBar/wanderer_logo5.PNG';

export const StyledTextFiled = (props) => {
    const handleOnChange = (event) => {
        props.setterMethod(event.target.value);
        console.log(props.valueVar.current);
    }
    return(
        <TextField
        value={props.valueVar}
        onChange={(event) => handleOnChange(event) } 
        label={props.label}
        error={props.error}
        helperText={props.error && props.helperText}
        required
        type={props.type}
        sx={{
            '.MuiOutlinedInput-root':{
                width: '300px',
                height: '40px'},
            '.MuiInputLabel-root':{
                top: '-4px',
                fontSize: '13px',
                textTransform: 'capitalize'
            },
            '.MuiOutlinedInput-input':{
                paddingTop: '8px',
                paddingBottom: '8px',
            } 
        }}/>
    )
}

export const LoginPageLogo = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={WanderersfamilyLogo} style={{ width: '250px', alignSelf: 'center' }} alt={"wanderersfamily"} />
        </Box>
    )
}