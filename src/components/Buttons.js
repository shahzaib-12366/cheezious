import React from 'react'
import '../style/Buttons.css'


const Buttons = () => {
  return (
    <>
    <div className='Buttons'>
        <button>Cheezy Addition!</button>
        <button>Starters</button>
        <button>Somewhat Local</button>
        <button>Somewhat Sooper</button>
        <button>Cheezy Treats</button>
        <Buttons>Sandwiches & Platters</Buttons>
         <button>Sandwiches & Platter</button>
        <button>Pizza Deals</button>
        <button>Special Pizza</button>
        <button>Somewhat Amazing</button>
        <button>Pastas</button>
        <button>Burgerz</button>
        <button>Side Orders</button>
        <button>Addons</button>
    </div>
    </>
  )
}

export default Buttons