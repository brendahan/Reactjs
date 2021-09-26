import React from 'react'
import Card from './Card'
import { data} from '../Assets/Library/stock'
import './CardItems.css'

function CardItems() {
    return (
        <div className='cardItems'>
          <div className='allcategories'> <h1>All Categories</h1>
        { 
            data.map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
        }
        </div>
          <h1>Super-market</h1>
          {
            data.filter(stock=>stock.category==='Supermarket').map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
        }
        <h1>Phones and Tablets</h1>
          {
            data.filter(stock=>stock.category==='Phones and Tablets').map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
        }
        <h1>Electronics</h1>
          {
            data.filter(stock=>stock.category==='Electronics').map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
        }
        </div>
    )
}

export default CardItems
