import RestApis from './RestApiUrls'

const cityService = {
  create: RestApis.cityService + '/city/create',
  findbyid: RestApis.cityService + '/city/findbyid/',
  findbyname: RestApis.cityService + '/city/findbyname/',
  findall: RestApis.cityService + '/city/findall',
  delete: RestApis.cityService + '/city/delete/',
}

export default cityService
