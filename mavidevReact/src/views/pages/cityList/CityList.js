import React, { useEffect } from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCity ,deleteCity} from 'src/store/features/CitySlice'
import { Link } from 'react-router-dom'

import {
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
  cilUserFollow,
} from '@coreui/icons'

const CityList = () => {
  const cityList = useSelector((state) => state.city.cityList)
  const updateChanges = useSelector((state) => state.city.isUpdated)

  const dispatch = useDispatch()

  const deleteCityById = async (value) => {
    console.log(value)
    dispatch(deleteCity(value))
  }
  const getCity = () => {
    dispatch(getAllCity())
  }

  useEffect(() => {
    getCity()
  }, [updateChanges])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2">City List</h5>
                  </CCol>
                  <CCol xs="auto" className="justify-content-end">
                  ( City Size : {cityList.length} )
                    </CCol>
                </CRow>
              </CContainer>
              <CRow>
                <CCol></CCol>
              </CRow>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                  <CTableHeaderCell className="text-center">Index</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">City</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">District</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Delete</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {cityList.map((type, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell className="text-center">
                        <div>
                          {type?.id}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>
                          {type?.city}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.district}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <CButton
                        color="danger"
                        shape="rounded-pill"
                        onClick={(e) => deleteCityById(type.id)}
                      >
                        X
                      </CButton>
                    </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default CityList
