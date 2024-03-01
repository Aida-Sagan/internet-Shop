import React, {useState} from 'react';

import {FaShoppingCart} from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) =>{
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price));

    return (
        <div>

            {
                props.orders.map((el) => (
                <Order key={el.id} item={el} onDelete={props.onDelete} />
            ))}
            <h2>Итого: {new Intl.NumberFormat().format(summa)} $</h2>
        </div>
    )
}

const showNothing = () => {
    return (
        <div>
            <h2>Товаров нет</h2>
        </div>
    )
}
export default function Header(props){
    let [cartOpen, setCartOpen] = useState(false)

    return(
        <header>
            <div>
                <span className='logo'>IDOC</span>
                <ul className='nav'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Admin</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                    </div>

                )}

            </div>
            <div className='presentation'></div>
        </header>
    )
}