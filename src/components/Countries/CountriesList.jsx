import CountryItem from "./CountryItem"

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const CountriesList = ({countries}) => {


   return (
      <Box>
        <Grid container spacing={1}>
        {countries.map(country =>
          <Grid item xs={3}>
            <CountryItem
                  key={country.name.common}
                  flag={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital} />
          </Grid>)}
         
        </Grid>
      </Box>
    );


}

export default CountriesList