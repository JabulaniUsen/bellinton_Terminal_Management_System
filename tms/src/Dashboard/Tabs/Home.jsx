import React from 'react'
import ContainerDetails from './HomeComponents/ContainerDetails'
import QuickOverview from './HomeComponents/QuickOverview'
import Intro from '../Components/Intro'
import RecentTransactions from './HomeComponents/RecentTransactions'

function Home() {
  return (
    <div>
      <Intro/>
      <ContainerDetails/>
      <QuickOverview/>
      <RecentTransactions/>
    </div>

  )
}

export default Home