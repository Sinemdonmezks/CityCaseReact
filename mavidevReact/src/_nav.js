import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilLockLocked,
  cilMagnifyingGlass,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilHome,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    to: '/home',
  },
  {
    component: CNavTitle,
    name: '----------> CITY <----------',
  },
  {
    component: CNavTitle,
    name: '',
  },
  {
    component: CNavTitle,
    name: '',
  },
  {
    component: CNavGroup,
    name: 'Create City',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Create',
        to: '/city',
      }
    ],
  },
  
  {
    component: CNavGroup,
    name: 'FindAll City',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'FindAll',
        to: '/city/findall',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Search by',
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'City Id',
        to: '/city/searchbyid',
      },
      {
        component: CNavItem,
        name: 'City Name',
        to: '/city/searchbyname',
      },
    ],
  },
  
]

export default _nav
