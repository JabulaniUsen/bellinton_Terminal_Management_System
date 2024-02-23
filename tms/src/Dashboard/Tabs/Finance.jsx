import React from 'react'
import Intro from '../Components/Intro'
import Figures from './FinanceComponents/Figures'
import InvoiceGen from './FinanceComponents/InvoiceGen'

function Finance() {
  return (
    <div>
      <Intro/>
      <Figures/>
      <InvoiceGen/>
    </div>
  )
}

export default Finance