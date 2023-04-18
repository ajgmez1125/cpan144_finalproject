import Search from './Search.js'

function Error()
{
    return(
        <div className='homediv'>
            <h2>There was an error processing your request</h2>
            <h3>Please Try Again</h3>
            <Search />
        </div>
    )
}

export default Error;