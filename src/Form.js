import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';

const initialFormValues = {
    name: '',
    size: '',
    sauce: '',
    special: '',
    pepperoni: false,
    chicken: false,
    olives: false,
    onions: false,
    mushrooms: false,
    peppers: false
}

const initialFormErrors = {
    name: '',
    size: '',
    sauce: '',
    special: '',
}


const initialDisabled = true;


export default function Form(){
    const [values, setValues] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    
    const {name, size, sauce, special, pepperoni, chicken, olives, onions, mushrooms, peppers} = values;

    const validate = (name, value) => {
        yup.reach(schema, name)
          .validate(value)
          .then(() => setFormErrors({ ...formErrors, [name]: '' }))
          .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
      }

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({
          ...formValues,
          [name]: value
        })
      }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        inputChange(name, valueToUse);
    }

    const postNewOrder = newOrder => {
        // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
        //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
        //    and regardless of success or failure, the form should reset
        axios.post('https://reqres.in/api/orders', newOrder)
          .then(res => {
            setValues([res, ...newOrder]);
            setFormValues(initialFormValues);
          }).catch(err => {
            console.error(err);
            setFormValues(initialFormValues);
          })
      }
    
    const formSubmit = () => {
        const newOrder = {
          name: formValues.name.trim(),
          size: formValues.size.trim(),
          sauce: formValues.sauce.trim(),
          special: formValues.special.trim(),
          toppings: ['pepperoni', 'chicken', 'olives', 'onions', 'mushrooms', 'peppers'].filter(topping => !!formValues[topping])
        }
        postNewOrder(newOrder);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
      }, [formValues])


    return(
        <div>
            <header>
                <nav>
                <h3>Lambda Eats</h3>
                <Link to='/'><button id='order-pizza'>Home</button></Link>
                <button className='help-button'>Help</button>
                </nav>
            </header>
            <form id='pizza-form'>
                <div>
                    <h1>BUILD YOUR OWN PIZZA</h1>
                </div>
                <div>
                    <p>Name for the order:</p>
                    <input id='name-input' type='text' value={name} onChange={onChange}/>
                </div>
                <div>
                    <h2>Choice of Size</h2>
                    <p>Required!</p>
                    <select id='size-dropdown' name='size' value={size} onChange={onChange}>
                        <option value=''>Select an option</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </div>
                <div>
                    <h2>Choice of Sauce</h2>
                    <p>Required!</p>
                    <input type='radio' name='sauce' value='originalred' onChange={onChange}/>
                        <label>Original Red</label><br></br>
                    <input type='radio' name='sauce' value='garlicranch' onChange={onChange}/>
                        <label>Garlic Ranch</label><br></br>
                    <input type='radio' name='sauce' value='bbqsauce' onChange={onChange}/>
                        <label>BBQ Sauce</label><br></br>
                    <input type='radio' name='sauce' value='spinachalfredo' onChange={onChange}/>
                        <label>Spinach Alfredo</label><br></br>
                </div>
                <div>
                    <h2>Add Toppings</h2>
                    <p>Choose up to 6</p>
                    <input type='checkbox' name='pepperoni' checked={pepperoni} onChange={onChange}/>
                        <label>Pepperoni</label>
                    <input type='checkbox' name='chicken' checked={chicken} onChange={onChange}/>
                        <label>Chicken</label>
                    <input type='checkbox' name='olives' checked={olives} onChange={onChange}/>
                        <label>Olives</label>
                    <input type='checkbox' name='onions' checked={onions} onChange={onChange}/>
                        <label>Onions</label>
                    <input type='checkbox' name='mushrooms' checked={mushrooms} onChange={onChange}/>
                        <label>Mushrooms</label>
                    <input type='checkbox' name='peppers' checked={peppers} onChange={onChange}/>
                        <label>Peppers</label>
                </div>
                <div>
                    <h2>Special Instructions</h2>
                    <input id='special-text' name='special' type='text' value={special} placeholder='Anything else?' onChange={onChange}/>
                </div>
                <footer>
                    <button id='order-button' onSubmit={onSubmit}>Add to Order</button>
                </footer>
            </form>
        </div>
    )
}