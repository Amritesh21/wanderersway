/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const ServiceSearchBar = () => {
    return(
        <div className="ServiceSearchBar">
            <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Find Our Services" variant="outlined" />}
            />
        </div>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 }
]