import React from 'react'
import { CFooter, CLink } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter color="black">
      <div>
        <CLink className="headerColor" href="">Mavi-dev Project </CLink>
        <span>&copy; 2023 creativeLabs.</span>
      </div>
      <div>
        <span className="headerColor">Powered by: </span>
        <span className="headerColor">Sinem Dönmez</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
