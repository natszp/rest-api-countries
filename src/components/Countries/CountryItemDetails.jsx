import { Link, json, useParams, useRouteLoaderData } from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoEntry from "./InfoEntry";
import classes from './CountryItemDetails.module.css';

const CountryItemDetails = () => {

    const params = useParams()
    //nie działa poniżej 
    // data = useRouteLoaderData('detailPage')


    console.log(params)

    return (
        <>
            <Button variant="outlined" className={classes.button} startIcon={<ArrowBackIcon />}><Link to="/">Back</Link></Button>
            <section className={classes['details-content']}>
                <div className={classes['flag']}>flaga
                </div>
                <div className={classes['information']}>
                    <div className={classes['information--box']}>
                        <div className={classes['information--main']}>
                            <InfoEntry
                                title='Name'
                                information={params.name}
                            />
                            <InfoEntry
                                title='Population'
                            // information={params.population.toLocaleString('en-US')}
                            />
                            <InfoEntry title='Region' information={params.region} />
                            <InfoEntry
                                title='Sub Region'
                            //information={params.subregion}
                            />
                            <InfoEntry
                                title='Capital'
                            //  information={params.capital}
                            />
                        </div>
                    </div>
                    <div className={classes['information--additional']}>
                        <InfoEntry
                            title='Top Level Domain'
                        //information={params.tld[0]}
                        />
                        <InfoEntry
                            title='Currencies'

                        />
                        <InfoEntry
                            title='Languages'

                        />

                    </div>
                </div>
            </section>
        </>

    )
}

export default CountryItemDetails;



/*


   <div>Currencies: {currencies[1].map((currency)=> <p>{currency.name}</p>)}</div>
                    <div>Languages: {languages.map((language)=> <p>{language.name}</p>)}</div>
                    */