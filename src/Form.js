import {Link} from 'react-router-dom';

export default function Form(){
    return(
        <div>
            <header>
                <nav>
                <h3>Lambda Eats</h3>
                <Link to='/'><button className='home-button'>Home</button></Link>
                <button className='help-button'>Help</button>
                </nav>
            </header>
            <div>
                <h1>BUILD YOUR OWN PIZZA</h1>
            </div>
            <div>
                <h2>Choice of Size</h2>
                <p>Required!</p>
                <select>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
            <div>
                <h2>Choice of Sauce</h2>
                <p>Required!</p>
                <input type='radio' value='original-red'/>
                    <label>Original Red</label><br></br>
                <input type='radio' value='garlic-ranch'/>
                    <label>Garlic Ranch</label><br></br>
                <input type='radio' value='bbq-sauce'/>
                    <label>BBQ Sauce</label><br></br>
                <input type='radio' value='spinach-alfredo'/>
                    <label>Spinach Alfredo</label><br></br>
            </div>
            <div>
                <h2>Add Toppings</h2>
                <p>Choose up to 6</p>
                <input type='checkbox' value='pepperoni'/>
                    <label>Pepperoni</label>
                <input type='checkbox' value='chicken'/>
                    <label>Chicken</label>
                <input type='checkbox' value='extra-cheese'/>
                    <label>Extra Cheese</label>
                <input type='checkbox' value='onions'/>
                    <label>Onions</label>
                <input type='checkbox' value='mushrooms'/>
                    <label>Mushrooms</label>
                <input type='checkbox' value='green-peppers'/>
                    <label>Green Peppers</label>
            </div>
            <div>
                <h2>Special Instructions</h2>
                <input type='text' placeholder='Anything else?'/>
            </div>
            <footer>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button className='order-button'>Add to Order</button>
            </footer>
        </div>
    )
}