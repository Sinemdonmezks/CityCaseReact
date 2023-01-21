import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CLink,
  CRow,
  CFormSelect,
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilBlur ,cilDoubleQuoteSansRight
} from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { create } from '../../../store/features/CitySlice'

const SaveCity = () => {
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')
  const data = useSelector((state) => state.city.city)
  const dispatch = useDispatch()

  console.log(data)

  const createCity = async () => {
    if (city === '') {
      alert('Please enter city!')
    } else if (district === '') {
      alert('Please enter district!')
    } else {
      dispatch(
        create({
          city: city,
          district: district,
        }),
      )
    }
  }
  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center ">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Create New City</h1>
                    <p className="text-medium-emphasis">Please fill in the information...</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilBlur} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="City"
                        placeholder="City"
                        autoComplete="City"
                        onChange={(event) => {
                          setCity(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilDoubleQuoteSansRight} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="District"
                        placeholder="District"
                        autoComplete="District"
                        onChange={(event) => {
                          setDistrict(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={'/home'}>
                        <CButton size="lg" className='buttonColor' onClick={createCity}>
                          Create City
                        </CButton>
                      </Link>

                      <Link to={'/home'}>
                        <CButton size="lg" color="secondary" variant="outline">
                          Go back to home
                        </CButton>
                      </Link>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default SaveCity
