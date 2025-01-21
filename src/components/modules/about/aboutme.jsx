'use client'
import React from 'react'
import IntroNames from '../../introName'
import AboutMe from '../../aboutme'

function AboutMeInfo() {
  return (
    <div>
      <IntroNames name={'About'} description={'About Me'}/>
        <AboutMe/>
    </div>
  )
}

export default AboutMeInfo
