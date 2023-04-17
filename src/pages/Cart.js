import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {remove} from '../store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  const totalPrice = products.reduce((total, curVal) => {
    // console.log(curVal.price)
    return total + curVal.price;
  }, 0);
  console.log(parseFloat(totalPrice.toFixed(3)))
  return (
    <div>
      <h3>Cart Items</h3>
      {
        products.map(product => (
          <div className='cartCard' >
            <img src={product.image} alt='img' />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className='btn'>Remove</button>
            
            
          </div>
        ))
      }
      { totalPrice > 0 && <h2>Total Amount:{totalPrice}</h2>}

    </div>
  )
}

export default Cart