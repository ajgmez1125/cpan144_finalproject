import { useState } from 'react'

function Search(props)
{
    const[citySearch, setCitySearch] = useState('')
    const[countrySearch, setCountrySearch] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        props.searchCity(citySearch)
        props.searchCountry(countrySearch)
        setCitySearch('');
        setCountrySearch('');
    }

    const setCountrySearchValue = (e) => {
        if(e.length <= 2)
        {
            if(e.match(/^[A-Za-z\s]*$/))
            {
                setCountrySearch(e.toUpperCase())
            }
        }
    }

    return(
        <form id = 'search_form' onSubmit = {submitHandler}>
            <input type = 'text' onChange = {(e) => {setCitySearch(e.target.value)}} value = {citySearch} required/>
            <input style = {{width: "20px"}} type = 'text' onChange = {(e) => {setCountrySearchValue(e.target.value)}} value = {countrySearch} />
            <br />
            <input type = 'submit'/>
        </form>
    )
}

export default Search;