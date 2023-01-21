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
import { findbyid } from "src/store/features/CitySlice";
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

const CitySearchID = () => {
  const type = useSelector((state) => state.city.city);
  const [keyId, setKeyId] = useState(0);
  const dispatch = useDispatch();

  const getCityId = () => {
    dispatch(findbyid(keyId));
  };

  useEffect(() => {}, [type]);

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
                      City
                    </h5>
                  </CCol>
                  <CCol xs="auto">
                    <CFormInput
                      type="text"
                      id="ID"
                      placeholder="ID"
                      onChange={(event) => {
                        setKeyId(event.target.value);
                      }}
                    />
                  </CCol>
                  <CCol xs="auto">
                    <Link to={``} className="col align-self-end">
                      <CButton
                        className="buttonColor btn btn-secondary mb-3"
                        type="button"
                        onClick={getCityId}
                      >
                        <CIcon icon={cilMagnifyingGlass} /> Search City
                      </CButton>
                    </Link>
                  </CCol>
                </CRow>
              </CContainer>
              <CRow></CRow>
              <div className="row flex flex-wrap  ">
                <CCard className="m-4" style={{ width: "22rem" }}>
                  <CCardBody>
                    <CCardTitle className="text-center">
                      ID : {type?.id === null ? "---" : type.id}
                    </CCardTitle>
                    <CCardText className="text-center">
                      {" "}
                      City : {type?.city}
                    </CCardText>
                    <CCardText className="text-center">
                      District : {type?.district}
                    </CCardText>
                  </CCardBody>
                </CCard>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CitySearchID;
