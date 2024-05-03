import React from 'react'
import Intro from '../Components/Intro'
import ContainersByStatus from './ReportComponents/ContainersByStatus'
import CustomerSatisfaction from './ReportComponents/CustomerSatisfaction'
import DailyContainer from './ReportComponents/DailyContainer'
import VolumeVsService from './ReportComponents/VolumeVsService'

const Report = () => {
  return (
    <div>
        <Intro/>
        <div className="">
            <div className="flex">
                <div className="containerStatusData">
                    <ContainersByStatus/>
                </div>
                <div className="customerSatisfactionData">
                    <VolumeVsService/>
                </div>
            </div>
            {/* <div className="flex">
                <div className="dailyContainer">
                    <DailyContainer/>
                </div>
                <div className="volumeService">
                    <CustomerSatisfaction/>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Report