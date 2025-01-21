'use client'
import IntroNames from "../../introName"
import PricingModel from '../../pricing'
export default function PricingPage() {
    return (
      <div>
         <IntroNames name={'Pricing'} description={'My Pricing Model'}/>
          <PricingModel/>
      </div>
    )
  }