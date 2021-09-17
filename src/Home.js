import {Link} from 'react-router-dom';

export default function Home(){

    return(
        <div>
            <header>
                <nav>
                <h2>Lambda Eats</h2>
                <Link to='/'><button className='home-button'>Home</button></Link>
                <button className='help-button'>Help</button>
                </nav>
            </header>
            <div>
                <h1>Get Your Favorite Food Delivered!</h1>
                <Link to='/form'>Pizza?</Link>
            </div>
        </div>
    )
}