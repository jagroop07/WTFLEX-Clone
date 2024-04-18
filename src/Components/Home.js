import React from 'react'
import Products from './Product'
import Frontpage from './Frontpage'
import { Homes } from './Homes'
import Bottomp from './Bottomp'
import Flex from './Flex'
import Insta from './Insta'

const Home = () => {
  return (
    <>
      <Homes/>
      <Products/>
      <Bottomp/>
      <div className='px-lg-3'>
        <Frontpage/>
        <Flex/>
        <Insta/>
      </div>
    </>
  )
}

export default Home
