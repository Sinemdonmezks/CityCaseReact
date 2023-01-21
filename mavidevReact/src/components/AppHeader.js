import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilApps, cilBell, cilColorPalette, cilEnvelopeOpen,cilFlower, cilList, cilMenu } from '@coreui/icons'

import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilFlower} size="lg" className="flower"/>
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon height={48} alt="Logo" />
         
        </CHeaderBrand>
        <CHeaderNav className="headerColor d-none d-md-flex me-auto">
        <h2>Mavi-dev PROJECT </h2>
        </CHeaderNav>
        <CHeaderNav>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
