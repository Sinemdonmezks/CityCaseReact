import React from 'react'

const News = React.lazy(() => import('./views/pages/news/News'))
const CreateCity = React.lazy(() => import('./views/pages/saveCity/CreateCity'))
const CityList = React.lazy(() => import('./views/pages/cityList/CityList'))
const CitySearchID = React.lazy(() => import('./views/pages/cityList/CitySearchID'))
const CitySearchName = React.lazy(() => import('./views/pages/cityList/CitySearchName'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/city', name: 'City', element: CreateCity },
  { path: '/*', name: 'News', element: News },
  { path: '/city/findall', name: 'City List', element: CityList },
  { path: '/city/searchbyid', name: 'City ID', element: CitySearchID },
  { path: '/city/searchbyname', name: 'City Name', element: CitySearchName}
]
export default routes
