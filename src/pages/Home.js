import React from 'react'
import Products from '../components/Products'

const Home = () => {
    
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Welcome to redux-toolkit</h2>
        <section>
            <h3>Products</h3>
            <Products />
        </section>
    </div>
  )
}

export default Home