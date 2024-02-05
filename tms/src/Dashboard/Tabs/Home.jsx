import React from 'react'
import ContainerDetails from './HomeComponents/ContainerDetails'
import QuickOverview from './HomeComponents/QuickOverview'

function Home() {
  return (
    <div>
      <div className="welcomeMessage poppins px-7 py-6 shadow">
        <h2 className='text-2xl font-bold'>Welcome to the Terminal Management Dashboard, <span>Jabulani</span>!</h2>
      </div>
      <ContainerDetails/>
      <QuickOverview/>
    </div>

  )
}

export default Home