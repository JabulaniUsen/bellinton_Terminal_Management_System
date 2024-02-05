import React from 'react'
import ContainerDetails from './HomeComponents/ContainerDetails'
import QuickOverview from './HomeComponents/QuickOverview'
import Intro from '../Components/Intro'

function Home() {
  return (
    <div>
      <Intro/>
      <ContainerDetails/>
      <QuickOverview/>
    </div>

  )
}

export default Home