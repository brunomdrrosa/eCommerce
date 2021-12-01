import React from 'react'
import Oferta from '../components/Oferta'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Oferta/>
      <Navbar/>
      <Carousel/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
