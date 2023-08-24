
import { json, useParams, useRouteLoaderData } from "react-router-dom"
import CountryItemDetails from "../components/Countries/CountryItemDetails"

const CountryItemDetailPage = () => {
    


    return (
        <>
            <CountryItemDetails />

        </>
    )
}

export default CountryItemDetailPage;

export async function loader({params}) {
    const name = params.name

    const response = await fetch('https://restcountries.com/v3.1/name/' + name)
    if(!response.ok){
        throw json({message: 'could not fetch details for the country'}, {status: 500})
    } else {
        return response
    }

}