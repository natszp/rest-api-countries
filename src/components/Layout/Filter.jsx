import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const REGIONS = ['All', 'Africa', 'Asia', 'Americas', 'Europe', 'Oceania']
const Filter = ({ onChangeFilter, selected }) => {

    const dropdownChangeHandler = (event) => {
        event.preventDefault();
        onChangeFilter(event.target.value);

    };


    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label='Filter by Region'
                    value={selected}
                    onChange={dropdownChangeHandler}
                >
                    {REGIONS.map((element) =>
                        <MenuItem key={element} value={element}>{element}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Filter