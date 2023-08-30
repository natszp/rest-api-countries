import { Link, useNavigate } from "react-router-dom";

import InfoEntry from "./InfoEntry";
import classes from './CountryItemDetails.module.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CountryItemDetails = ({ country }) => {
    console.log(country)

    const navigate = useNavigate()
    country = country[0]
    // let currenciesName;
    //TODO: sprawdzić za pomocą values
    const currenciesName = Object.entries(country.currencies).map(([key, value]) => <span>{value.name} </span>);

    let languagesArray;
    let languagesName;

    languagesArray = Object.keys(country.languages).map((key) => [
        key,
        country.languages[key],
    ]);

    languagesName = languagesArray.map((element) => <span>{element[1]} </span>)


    const borderCountryHandler = (event) => {
        console.log(event.target.outerText)
        navigate(`/${event.target.outerText}`)
    }

    let borders;

    if (country.borders !== undefined) {
        borders = country.borders.map((element) =>
            <Button variant="outlined" className={classes['btn-borders']} onClick={borderCountryHandler} key={element}>{element}</Button>)
        return borders
    } else {
        borders = 'No border countries'
    }




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
                <Grid item xs={8}>
                    <InfoEntry className={classes.borders}
                        title='Border countries'
                        information={borders} />
                </Grid>
            </Grid>
        </Box>
    );

}

export default CountryItemDetails;



