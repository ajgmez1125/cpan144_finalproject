import Search from './Search.js'
import './styles.css'

function Home()
{
    return(
        <div className='homediv'>
            <h1>Weather Connection</h1>
            <p>Please Input City or Country</p>
            <p>You wish to see the weather for.</p>
            <Search />
        </div>
    )
}

export default Home