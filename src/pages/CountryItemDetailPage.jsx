
import { json, useParams, useLoaderData } from "react-router-dom"
import CountryItemDetails from "../components/Countries/CountryItemDetails"

const CountryItemDetailPage = () => {
    const data = useLoaderData('detailPage')
    //ok
    console.log('data',data)

    return (
        <>
            <CountryItemDetails country={data}/>

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