import { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
export default function App(){
  const [orders, setOrders] = useState(
    [

    ]
  )
  const [items, setItems] = useState(
    [
      {
        id:1,
        title: 'Apple AirPods(ver 1)',
        img: 'image-1.jpeg',
        category:'headphones',
        price: '7990'
      },
      {
        id:2,
        title: 'Apple AirPods(ver 2)',
        img: 'image-2.jpeg',
        category:'headphones',
        price: '10387'
      },
      {
        id:3,
        title: 'Apple AirPods(ver 3)',
        img: 'image-3.jpeg',
        category:'headphones',
        price: '15990'
      },
      {
        id:4,
        title: 'Apple AirPods Pro(ver 1)',
        img: 'image-4.jpeg',
        category:'headphones',
        price: '20787'
      },
      {
        id:5,
        title: 'Apple AirPods(ver 2)',
        img: 'image-5.jpeg',
        category:'headphones',
        price: '22737'
      },
      {
        id:6,
        title: 'Apple AirPods Max',
        img: 'image-6.jpeg',
        category:'headphones',
        price: '42990'
      }
    ]
  )

  function deleteOrder(id){
    setOrders(del => orders.filter(el => el.id !==id))
  }
  
  function addToOrder(item){
    let isInArray = false
    orders.forEach(el =>{
      if(el.id === item.id){
          isInArray = true
          el.amount++

      }
    })
    if(!isInArray)
      setOrders(prev => { 
    const value =[...prev, {...item,amount:1}]
    return value;
  });
  }

  return(
    <div className="wrapper">
      <Header orders = {orders} onDelete ={deleteOrder}/>
      <Footer/>
      <Items items ={items} onAdd={addToOrder}/>
    </div>
)
}
