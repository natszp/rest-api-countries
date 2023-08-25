import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoEntry from "./InfoEntry";
import classes from './CountryItemDetails.module.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const CountryItemDetails = ({ country }) => {

    country = country[0]

    let currenciesArray;
    let currenciesName;

    currenciesArray = Object.keys(country.currencies).map((key) => [
        key,
        country.currencies[key],
    ]);

    currenciesName = currenciesArray[0][1].name;


    let languagesArray;
    let languagesName;

    languagesArray = Object.keys(country.languages).map((key) => [
        key,
        country.languages[key],
    ]);

    languagesName = languagesArray[0][1];




    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid>
                <Button variant="outlined" className={classes.button} startIcon={<ArrowBackIcon />}><Link to="/">Back</Link></Button>
            </Grid>

            <Grid container spacing={1} className={classes.container}>
                <Grid item xs={4}>
                    <div className={classes.flag}><img src={country.flags.png} alt="flag" /></div>
                </Grid>
                <Grid item xs={4}>
                    <InfoEntry
                        title='Name'
                        information={country.name.common}
                    />
                    <InfoEntry
                        title='Population'
                        information={country.population.toLocaleString('en-US')}
                    />
                    <InfoEntry title='Region' information={country.region} />
                    <InfoEntry
                        title='Sub Region'
                        information={country.subregion}
                    />
                    <InfoEntry
                        title='Capital'
                        information={country.capital}
                    />
                </Grid>
                <Grid item xs={4}>
                    <InfoEntry
                        title='Top Level Domain'
                        information={country.tld[0]}
                    />
                    <InfoEntry
                        title='Currencies'
                        information={currenciesName}

                    />
                    <InfoEntry
                        title='Languages'
                        information={languagesName}
                    />
                </Grid>
                <Grid item xs={8} className={classes.borders}>
                   
                </Grid>
            </Grid>
        </Box>
    );

}

export default CountryItemDetails;



