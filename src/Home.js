import Search from './Search.js'
import './styles.css'

function Home()
{
    return(
        <div className='homediv'>
            <h1>Weather Connection</h1>
            <h3>Please Input City or Country</h3>
            <h3>You wish to see the weather for.</h3>
            <Search />
        </div>
    )
}

export default Home