import { Link} from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoEntry from "./InfoEntry";
import classes from './CountryItemDetails.module.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const CountryItemDetails = ({ country }) => {
    country = country[0]


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
                        
                    />
                    <InfoEntry
                        title='Languages' />

                </Grid>
                <Grid item xs={8} className={classes.borders}>
                    <div>Border countries:</div>
                </Grid>
            </Grid>
        </Box>
    );

}

export default CountryItemDetails;



/*


   <div>Currencies: {currencies[1].map((currency)=> <p>{currency.name}</p>)}</div>
                    <div>Languages: {languages.map((language)=> <p>{language.name}</p>)}</div>
                    */