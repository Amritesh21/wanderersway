import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { lightBlue } from '@material-ui/core/colors';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles({
    filterButton : {
        backgroundColor : 'purple',
        color: 'white',
        '&:hover' : {
            backgroundColor : '#ee4848' 
        }
    },
})


export const SearchFilterComponent = () => {

    const classes = useStyles();

    const [travelCompanion, setTravelCompanion] = useState("couple");
    const [travelBudget, setTravelBudget] = useState([10000, 100000]);

    return(
        <div className="searchFilterComponent">
            <Box sx={{
                bgcolor: 'background.paper',
                boxShadow: '5px 10px 8px 10px grey',
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                margin: 40,
                marginLeft: 10,
                display:'flex',
                flexDirection: 'column',
                width: '15%' ,
                position: 'relative',
                alignItems: 'center',
                
            }}>
                <Typography variant='h6'> Filter On Your Requirement </Typography>
                <Box sx={{
                    border: '1px solid purple',
                    borderRadius: '5px',
                    alignContent: 'center',
                    padding: 10,
                    margin: 5
                }}>
                    <Typography varient="h6">Your Companion</Typography>
                    <RadioGroup value={travelCompanion} onChange={(e) => setTravelCompanion(e.target.value)}>
                        <FormControlLabel value="single" control={<Radio />} label="Single" />
                        <FormControlLabel value="couple" control={<Radio />} label="Couple" />
                        <FormControlLabel value="family_friends" control={<Radio />} label="With Family/Friends" />
                    </RadioGroup>
                </Box>
                <Box className='BudgetRange' 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 5,
                    border: '1px solid purple',
                    padding: '5px 55px',
                    borderRadius: '5px'
                }}>
                <Typography varient="h6">Travel Budget</Typography>
                    INR {travelBudget[0]}
                    <Slider 
                     value={travelBudget}
                     onChange={(e, newval) => setTravelBudget(newval)}
                     min={0}
                     max={500000}
                     valueLabelDisplay="auto"
                     aria-labelledby="range-slider"
                    />
                    INR {travelBudget[1]}
                </Box>
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    alignSelf: 'center'
                }}>
                    <Button variant='contained' className={classes.filterButton}>Filter</Button>
                    &emsp;
                    <Button variant='contained' className={classes.filterButton}>Clear</Button>
                </Box>
              
            </Box>
        </div>
    )
}