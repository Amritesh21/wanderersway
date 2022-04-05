import { Button, makeStyles } from "@material-ui/core"
import { Link, Route, Routes } from "react-router-dom"
import { MyAppointment } from "./MyAppointments"
import { MyProfile } from "./MyProfile"
import './DashBoard.css'
import SendIcon from '@mui/icons-material/Send';
import { AppBar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

const useStyles = makeStyles({
    DashBoardAppointmentButton : {
        backgroundColor: 'Blue',
        color: 'white',
        position:'relative',
        padding: '100px',
        margin: '50px',
        fontSize: '1.3em',
        '&:hover':{
            color: 'blue'
        }
    },
    DashboardProfileButton : {
        backgroundColor: 'red',
        color: 'white',
        position:'relative',
        padding: '100px',
        margin: '50px',
        fontSize: '1.3em',
        '&:hover':{
            color: 'red'
        }
    }
})

export const DashBoard = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [displayRel, setDisplayRel] = useState('none');
    const[displayWidth, setDisplayWidth] = useState('350px');

    useEffect(() => {
        if(open === false){
            setDisplayWidth('0px');
        }else{
            setDisplayWidth('350px');
        }
    },[open])

    return(
        <div className="DashBoardContainer">
            <div style={{width: '100%', display:'flex'}}>
                {/*<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}><Button>Clocked</Button><Button>Click</Button><Button>Click2</Button></AppBar>*/}
                <Button onClick={() => setOpen(true)} sx={{display: 'auto'}}>Open</Button>
                <Drawer variant="persistent"
                    open= {open}
                    sx={{
                        position: 'temporary',
                        width: displayWidth,
                        flexShrink: 0,
                        zindex: (theme) => theme.zIndex.drawer,
                        [`& .MuiDrawer-paper`]: { width: '350px', boxSizing: 'border-box', zIndex:  1},
                        [`& .MuiPaper-root`]: {position: 'relative', padding: '20px'},
                        [`& .MuiDrawer-root`]: {position: 'relative'},
                    }}
                >   
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? 'ok' : 'done'}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Button onClick={() => setOpen(preval => !preval)}>Open</Button>
                    </Box>
                </Drawer>
                <Link to='/dashboard/MyAppointments' style={{textDecoration:'none'}}><Button variant="contained" className={classes.DashBoardAppointmentButton} startIcon={<BookOnlineIcon/>}>My Appointments</Button></Link>
                <Link to='/dashboard/MyProfile' style={{textDecoration:'none'}}><Button variant="contained" className={classes.DashboardProfileButton} startIcon={<AssignmentIndIcon/>}>My Profile</Button></Link>
                
            </div>
        </div>
    )
}