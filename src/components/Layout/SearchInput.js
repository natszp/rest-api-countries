import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchInput = ({ onChangeInput }) => {


    const inputChangeHandler = (event) => {
        event.preventDefault();
        onChangeInput(event.target.value);
    };
    // without icon - 'dispatcher is null'


    return (
        <Box
            component="form"
        >
            <TextField label="Search for a country" variant="outlined" onChange={inputChangeHandler} />

        </Box>
    );


}

export default SearchInput