import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <img className='productImg' src={props.image}/>
<p className='productName'>{props.name}</p><h2 className='productPrice'>{props.price}</h2>
        </div>
    )
}

export default Card
