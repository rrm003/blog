import React from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'

import './Card.css'

function alert1(){
    alert("hello")
}

function Card() {
    return (
        <div className='card'>
            <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="logo"/>
            <h4>Card Title</h4>
        </div>
    )
}

export default Card
