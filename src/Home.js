import {Link} from 'react-router-dom';
import React from 'react';


export default function Home(){

    return(
        <div>
            <header>
                <nav>
                <h2>Lambda Eats</h2>
                <Link to='/'><button>Home</button></Link>
                <button className='help-button'>Help</button>
                </nav>
            </header>
            <div>
                <h1>Get Your Favorite Food Delivered!</h1>
                <Link to='/pizza' id='order-pizza'>Pizza?</Link>
            </div>
        </div>
    )
}