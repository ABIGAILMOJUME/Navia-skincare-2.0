import React from 'react'
import ShopProducts from '../components/ShopProducts/ShopProducts';
import Ingredients from '../components/Ingredients/Ingredients';
import MainShop from '../components/MainShop/mainshop';
import ParallaxImage from '../components/ParallaxImage/ParallaxImage'
import Footer from '../components/Footer/Footer'
import Photogrid from '../components/PhotoGrid/photogrid'




const Shop = () => {
  return (
    <div>
      <ShopProducts/>
      <Ingredients/>
      <MainShop/>
      <ParallaxImage/>
      <Footer/>
      <Photogrid/>
    </div>
  )
}

export default Shop;