'use client'
import React from 'react'
import Nav from './components/nav'
import Imghedear from './components/imghedear'
import Section from './components/section'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Section7 from './components/section7'
import Section8 from './components/section8'
import Section9 from './components/section9'
import Section10 from './components/section10'
import Footer from './components/footer'
import NameBanner from './components/name'

export default function page() {
  return (
    <div className='w-full flex flex-wrap relative overflow-hidden 2xl:container 2xl:mx-auto '>
        <Nav/>
        <Imghedear/>
        <Section/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>
        <Footer/>
        <NameBanner/>
    </div>
  )
}
