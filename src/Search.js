import { useState } from 'react'

function Search(props)
{
    const[search, setSearch] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        props.search(search)
        setSearch('');
    }
    return(
        <form onSubmit = {submitHandler}>
            <input type = 'text' onChange = {(e) => {setSearch(e.target.value)}} value = {search} required/>
            <input type = 'submit'/>
        </form>
    )
}

export default Search;