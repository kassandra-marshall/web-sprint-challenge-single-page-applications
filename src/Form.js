import React, { useState } from 'react';

function Form (props) {
    
    return(
        <form id="pizza-form">
            <label>Name: 
                <input
                    id="name-input"
                    name="pizzaName"
                    type="text"
                />
            </label>
            <label>Size: 
            <select id="size-dropdown">
                    <option>--Select a Size--</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>    
                </select> 
            </label>
            <label>Toppings:</label>
            <label>
                Pepperoni <input type="checkbox" />
            </label>
            <label>
                Sausage <input type="checkbox" />
            </label>
            <label>
                Extra Cheese <input type="checkbox" />
            </label>
            <label>
                Veggies <input type="checkbox" />
            </label>
            <label>Special Instructions:
                <input id="special-text" type="text"/>
            </label>
            <input type="submit" value="Make Pizza!" />
        </form>
    )
}

export default Form;