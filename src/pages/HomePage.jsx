
import React from 'react'
import Hero from '../pages/Hero'
import SubHero from '../pages/SubHero'
import Product from '../pages/Product'
import Section from  '../pages/Section'
import BannerSection from './BannerSection'
import Services from '../pages/Services'
import SpecialProduct from './SpecialProduct'
import InstagramSection from './InstergramSection'
import LogoSection from './LogoSection'
import Modal from '../component/Modal'
import Footers from '../pages/Footers'
export default function HomePage() {
  return (
    <div>
      <Hero />
      <SubHero />
<Section />
        <BannerSection />
      <div>
      <Product />
   <Services />
   <SpecialProduct />
     <InstagramSection />
     <LogoSection />
      </div>
      <Modal />
      <Footers />
    </div>
  )
}


