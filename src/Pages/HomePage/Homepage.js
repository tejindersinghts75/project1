import React from 'react'
import Header from '../../Components/Navbar/Navbar'
import Navigator from '../../Components/Navigator/Navigator'
import HeroSec from '../../Components/HeroSec/HeroSec'
import Category from '../../Components/Category/Category'
import Products from '../../Components/Products/Products'
import Counter from '../../Components/Counter/Counter'

function Homepage() {
  return (
    <div>
        <Header/>
        <Navigator/>
        <HeroSec/>
        <Category/>
        <Products/>

    </div>
  )
}

export default Homepage