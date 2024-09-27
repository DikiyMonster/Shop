import React,{} from 'react'

export default function Item(props) {
    return (
      <div className='item'>
        <img src={"./img/" + props.item.img} alt=''/>
        <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
        <h2>{props.item.title}</h2>
        <b>{props.item.price}Руб.</b>
      </div>
    )
}

