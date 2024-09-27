import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'
import {FaAngleRight,FaAngleLeft} from "react-icons/fa";

export default function Order(props){
  
    return (
      <div className='item'>
        <img src={"./img/" + props.item.img} alt=''/>
        <h2>{props.item.title}</h2>
        <b>{props.item.price}Руб.</b>
        <FaTrash className='delete-icon' onClick={()=> props.onDelete(props.item.id)}/>
        <FaAngleRight className='plus' onClick={()=> props.item.amount++}/>
        <span>{props.item.amount}</span>
        <FaAngleLeft className ='minus' onClick={()=> props.item.amount--}/>
      </div>
    )
  }
