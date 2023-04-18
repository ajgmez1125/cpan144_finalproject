import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Search()
{
    const[citySearch, setCitySearch] = useState('')
    const[countrySearch, setCountrySearch] = useState('')

    const nav = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        if(countrySearch != '')
        {
            nav('../weather/'+citySearch+'/'+countrySearch)
        }
        else
        {
            nav('../weather/'+citySearch)
        }
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
            <input type = 'text' placeholder="Location..." onChange = {(e) => {setCitySearch(e.target.value)}} value = {citySearch} required/>
            <input type = 'text' placeholder="Specific Country Code (Optional)" onChange = {(e) => {setCountrySearchValue(e.target.value)}} value = {countrySearch} />
            <br />
            <input type = 'submit' class='button' value='search'/>
        </form>
    )
}

export default Search;