import { Outlet } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import CountriesList from '../components/Countries/CountriesList';
import Header from '../components/Layout/Header';
import CountryItemDetails from '../components/Countries/CountryItemDetails';

const RootLayout = () => {
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [error, setError] = useState(null)
  const [filteredRegion, setFilteredRegion] = useState('')


  const fetchCountriesHandler = useCallback(async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all/')
      if (!response.ok) {
        throw new Error('sth went wrong')
      }

      const data = await response.json()

      setAllCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
      setCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
    }
    catch (error) {
      setError(error.message)
    }
  })

  useEffect(() => {
    fetchCountriesHandler();

  }, [])

  const filterChangeHandler = (selectedRegion) => {
    setFilteredRegion(selectedRegion)
    let countriesOFTheRegion = allCountries.filter((country) => country.region === selectedRegion)
    console.log(countriesOFTheRegion)
    setCountries(countriesOFTheRegion)
    if (selectedRegion === 'All') {
      setCountries(allCountries)
    }
  }



  const inputChangeHandler = (inputData) => {
    let countriesSearched = allCountries.filter((country) => country.name.common.toLowerCase().includes(inputData))
    console.log(countriesSearched)
    setCountries(countriesSearched)
  }

  return (
    <>
      <Outlet />
      <Header onChangeFilter={filterChangeHandler} selected={filteredRegion} onChangeInput={inputChangeHandler} />
      <CountriesList countries={countries} />

    </>
  );
};
export default RootLayout;