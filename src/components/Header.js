import React, { useState } from 'react'
import { FaShoppingBasket} from "react-icons/fa";
import Order from './Order';

export default function Header(props) {
  let[cartOpen, setCartOpen] = useState(false)
  let summa = 0;
  props.orders.forEach(el=> summa += Number.parseFloat(el.price))
  return (
    <header>
        <div>
            <span className = 'logo'>audio accessories</span>
            <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-batton ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='shop-cart'>
              {props.orders.map(el=>(
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className ='summa'>Сумма: {summa} Руб</p>
              </div>
            )}
        </div>
        <div className = 'presentation'></div>
    </header>
  )
}

