import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const item = useSelector((state) => state.cart )
  return (
    <div  style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
      <span className='logo'>Redux-Ecom</span>
      <div>
        <Link className='navlink' to="/">Home</Link>
        <Link className='navlink' to='/cart'>Cart</Link>
        <span className='cartCount'>Cart items: {item.length}</span>
      </div>
    </div>
  )
}

export default Navbar