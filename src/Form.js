import React, { useState } from 'react';
import axios from 'axios';
import schema from './schema'
import * as yup from 'yup';

function Form () {
    const [formValues, setFormValues] = useState({
        pizzaName: '',
        size: '',
        toppings: false,
        instructions: ''
    })
    const[errors, setErrors] = useState({
        pizzaName: '',
        size: '',
        toppings: false,
        instructions: ''
    })

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: ''}))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    const onChange = evt => {
        const { checked, value, name, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        setFormErrors(name, valueToUse)
        setFormValues({ ...formValues, [name]: valueToUse})
    }
    
    const onSubmit = evt => {
        evt.preventDefault();
        const newFormValues = {
            pizzaName: formValues.pizzaName.trim(),
            size: formValues.size.trim(),
            toppings: formValues.toppings,
            instructions: formValues.instructions.trim()
        };
        axios.post("https://reqres.in/api/orders", { newFormValues })
            .then(res => {
                setFormValues({
                    pizzaName: '',
                    size: '',
                    toppings: false,
                    instructions: ''
                })
            })
            .catch(err => console.error(err))
    } 
    return(
        <form id="pizza-form" onSubmit={onSubmit}>
            <div style={{color: "red"}}>
                <div>{errors.pizzaName}</div>
            </div>
            <label>Name: 
                <input
                    id="name-input"
                    name="pizzaName"
                    type="text"
                    value={formValues.pizzaName}
                    onChange={onChange}
                />
            </label>
            <label>Size: 
            <select id="size-dropdown" name= "size" value={formValues.size} onChange={onChange}>
                    <option>--Select a Size--</option>
                    <option name="small">Small</option>
                    <option name="medium">Medium</option>
                    <option name="large">Large</option>    
                </select> 
            </label>
            <label>Toppings:</label>
            <label>
                Pepperoni <input type="checkbox" name="toppings" value={formValues.toppings} onChange={onChange}/>
            </label>
            <label>
                Sausage <input type="checkbox" name="toppings" value={formValues.toppings} onChange={onChange}/>
            </label>
            <label>
                Extra Cheese <input type="checkbox" name="toppings" value={formValues.toppings} onChange={onChange}/>
            </label>
            <label>
                Veggies <input type="checkbox" name="toppings" value={formValues.toppings} onChange={onChange}/>
            </label>
            <label>Special Instructions:
                <input id="special-text" type="text" name="instructions" value={formValues.instructions} onChange={onChange}/>
            </label>
            <input id="order-button" type="submit" value="Add To Order" />
        </form>
    )
}

export default Form;