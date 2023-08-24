import CountryItem from "./CountryItem"
import classes from './CountriesList.module.css'

const CountriesList = ({countries}) => {

   console.log(countries)

   return (
         <div className={classes.container}>
            <div>{countries.map(country =>
               <CountryItem
                  key={country.name.common}
                  flag={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital} />)}
            </div>
         </div>
   )
}

export default CountriesList