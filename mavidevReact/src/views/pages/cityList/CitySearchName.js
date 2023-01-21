import React, { useEffect, useState } from "react";
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import { findbyname ,getAllCity} from "src/store/features/CitySlice";
import { Link } from "react-router-dom";

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
  CFormInput,
  CFormLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
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
  cilMagnifyingGlass,
} from "@coreui/icons";

const CitySearchName = () => {
  const cityList = useSelector((state) => state.city.cityList);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const getCity = () => {
    dispatch(getAllCity())
  }
  const getCityName = () => {
    dispatch(findbyname(keyword));
  };
  

  useEffect(() => {getCity()}, [keyword]);

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2">
                      City List
                    </h5>
                  </CCol>
                  <CCol xs="auto">
                    <CFormInput
                      type="text"
                      id="Name"
                      placeholder="Name"
                      onChange={(event) => {
                        setKeyword(event.target.value);
                      }}
                    />
                  </CCol>
                  <CCol xs="auto">
                      <CButton
                        className="buttonColor btn btn-secondary mb-3"
                        type="button"
                        onClick={getCityName}
                      >
                        <CIcon icon={cilMagnifyingGlass} /> Search City
                      </CButton>
                  </CCol>
                  <CCol xs="auto" >
                    ( City Size : {cityList.length} )
                  </CCol>
                </CRow>
              </CContainer>
              <CRow></CRow>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                  <CTableHeaderCell className="text-center">Index</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">City</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">District</CTableHeaderCell>
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
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CitySearchName;
