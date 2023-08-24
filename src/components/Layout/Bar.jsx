import { useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import classes from './Bar.module.css'


import ModeNightIcon from '@mui/icons-material/ModeNight';




const Bar = () => {
    const [modeState, setModeState] = useState('light')
    const ref = useRef('bar')
    const toolbar = ref.current

    const lightModeHandler = () => {
        setModeState('light');
        document.body.classList.remove(classes['dark-mode'])
        document.body.classList.add(classes['light-mode'])
        toolbar.classList.remove(classes['dark-mode'])
        toolbar.classList.add(classes['light-mode'])

    };

    const darkModeHandler = () => {
        setModeState('dark');
        document.body.classList.remove(classes['light-mode'])
        document.body.classList.add(classes['dark-mode'])
        toolbar.classList.remove(classes['light-mode'])
        toolbar.classList.add(classes['dark-mode'])
     
    }
          
    // chciałabym napisać to zmienianie klas krócej i bardziej elegancko
    // nie zmienia się kolor tekstu w elemenatch UI - button, input, select - jak to zrobić?


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