import React from 'react'
import HomeHero from './components/HomeHero'
import HomePopularproduct from './components/HomePopularproduct'
import HomeFeatureProduct from './components/HomeFeatureProduct'
import HomeCTA from './components/HomeCTA'

const Homecover = () => {
  return (
    <div>
      <HomeHero/>
      <HomePopularproduct/>
      <HomeFeatureProduct/>
      <HomeCTA/>
    </div>
  )
}

export default Homecover
