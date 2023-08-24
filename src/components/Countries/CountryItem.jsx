import classes from './CountryItem.module.css'
import { useNavigate } from 'react-router-dom';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




const CountryItem = ({ name, population, region, capital, flag }) => {


    const navigate = useNavigate()

    const detailViewHandler = () => {
        navigate(`/${name}`)

    }

    return (
    
        <Card sx={{width: 300}} className={classes.card}>
            <CardMedia
                sx={{ height: 140 }}
                image={flag}
                title={name}
                onClick={detailViewHandler}
            />
            <CardContent>
                <Typography className={classes.name}>
                   {name}
                </Typography>
               <div className={classes['other-info']}>
                    <div>Population: {population}</div>
                    <div>Region: {region}</div>
                    <div>Capital: {capital}</div>
                </div>
            </CardContent>
        </Card>
    
    );

}


export default CountryItem