import { useRef, useState } from 'react';

import classes from './Bar.module.css'

import * as React from 'react';
import { useTheme} from '@mui/material/styles';
import { ColorModeContext } from '../../App';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const Bar = () => {
    const [modeState, setModeState] = useState('light')
    const ref = useRef('bar')
    const toolbar = ref.current


    const lightModeHandler = () => {
        colorMode.toggleColorMode()
        setModeState('light');
        document.body.classList.remove(classes['dark-mode'])
        document.body.classList.add(classes['light-mode'])
        toolbar.classList.remove(classes['dark-mode'])
        toolbar.classList.add(classes['light-mode'])

    };

    const darkModeHandler = () => {
        colorMode.toggleColorMode()
        setModeState('dark');
        document.body.classList.remove(classes['light-mode'])
        document.body.classList.add(classes['dark-mode'])
        toolbar.classList.remove(classes['light-mode'])
        toolbar.classList.add(classes['dark-mode'])

    }

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes['bar']}>
                <Toolbar className={classes['light-mode']} ref={ref}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Where in the world?
                    </Typography>
                    {modeState == 'light' && <Button onClick={darkModeHandler}><ModeNightIcon />Dark mode</Button>}
                    {modeState == 'dark' && <Button onClick={lightModeHandler}>Light mode</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Bar;