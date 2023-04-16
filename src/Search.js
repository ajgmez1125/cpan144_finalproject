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
            nav('weather/'+citySearch+'/'+countrySearch)
        }
        else
        {
            nav('weather/'+citySearch)
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
            <input type = 'text' onChange = {(e) => {setCitySearch(e.target.value)}} value = {citySearch} required/>
            <input style = {{width: "20px"}} type = 'text' onChange = {(e) => {setCountrySearchValue(e.target.value)}} value = {countrySearch} />
            <br />
            <input type = 'submit'/>
        </form>
    )
}

export default Search;