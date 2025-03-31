import React, { useState } from 'react';
import { store } from "../../../../../Store/bookStore"
import { Formik, Field, Form } from 'formik';
import './SignUp.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const DrawerSignUp = () => {
  const { editUserDrawer, setEditUserDrawer } = store(state => state);
  console.log(editUserDrawer.status);
  const [isPersonalOverlayVisible, setIsPersonalOverlayVisible] = useState(false);

  const closePersonalOverlay = () => {
    setIsPersonalOverlayVisible(false);
  };

  const handleSignUp = async (values) => {
    try {
      const emailEncoded = encodeURIComponent(values.email);
      const fetchURL = `http://localhost:5000/userExists?email=${emailEncoded}`;
      const response = await fetch(fetchURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data.status);
      }

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className={`drawerEdit ${editUserDrawer.status ? 'open' : ''}`}>
      <div className="drawerSquareEdit">
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            middleName: '',
            lastName: '',
            isAdmin: false
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
              errors.email = 'Email is invalid';
            }

            if (!values.date) { errors.date = 'Date is required'; }
            if (!values.password) { errors.password = 'Password is required'; }
            if (!values.firstName) { errors.firstName = "First Name is required"; }
            if (!values.middleName) { errors.middleName = "Middle Name is required"; }

            return errors;
          }}
          onSubmit={handleSignUp}
        >
          {({ isValid, touched, errors }) => (
            <Form className='formGridUser'>

              <div style={{ display: "flex", maxHeight: "100px", gap: "15px" }}>
                <div className="drawerSquareEdit" style={{ background: "#32CD32" }}><h1>SIGN UP</h1></div>
                <div className="drawerSquareEdit">
                  <div className='fontAwesomeIcon' onClick={() => setEditUserDrawer(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
              </div>

              {/*PERSONAL INFORMATION*/}
              <div style={{ gridRow: "1/2", gridColumn: "1/4", background: "#4682B4"}}><h1>PERSONAL INFORMATION</h1></div>
              {/*EMAIL*/}
              <div className='drawerSquareEdit' style={{ background: "#32CD32" }}>
                <div className="buttonStyleForFormik" style={{}}><h1>Email</h1></div>
                <div className='drawerSquareEdit'
                  style={{
                    gridColumn: "1/2",
                    gridRow: "3/4",
                    background: "transparent",
                    paddingBottom: "10px"

                  }}>
                  <div className='input'>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email ID"
                    />
                    {touched.email && errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                  </div>
                </div>
              </div>
              {/*FULL NAME*/}
              <div className="drawerSquareEdit" style={{ background: "#40E0D0" }}>
                <div className="buttonStyleForFormik" style={{ background: "transparent" }}><h1>Name</h1></div>
                <div
                  style={{
                    display: "grid",
                    gridColumn: "1/2",
                    gridRow: "5/6",
                    display: "grid",
                    alignItems: "center",
                    background: "transparent",
                    paddingLeft: "10px"
                  }}
                >
                  <div className='buttonStyleForFormik' style={{}}>
                    <h2>First</h2>
                  </div>
                  <div style={{ gridColumn: "2/3" }}>
                    <div className='input'>
                      <Field
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                      />
                      {touched.firstName && errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                    </div>
                  </div>
                  <div className='buttonStyleForFormik' style={{}}>
                    <h2>Middle</h2>
                  </div>
                  <div style={{ gridRow: "2/3", gridColumn: "2/3" }}>
                    <div className='input'>
                      <Field
                        id="middleName"
                        type="text"
                        name="middleName"
                        placeholder="Middle Name"
                      />
                      {touched.middleName && errors.middleName && <div style={{ color: 'red' }}>{errors.middleName}</div>}
                    </div>
                  </div>
                  <div className='buttonStyleForFormik' style={{}}>
                    <h2>Last</h2>
                  </div>
                  <div style={{}}>
                    <div className='input'>
                      <Field
                        id="lastName"
                        type="lastName"
                        name="lastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*BIRTHDAY*/}
              <div className="drawerSquareEdit" style={{ background: "#FF6347" }}>
                <div className="buttonStyleForFormik" style={{ background: "transparent" }}>
                  <h1>Birthday</h1>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridColumn: "2/4",
                    gridRow: "4/5",
                    display: "grid",
                    alignItems: "center",
                    marginLeft: "15px"
                  }}
                >
                  <div className='buttonStyleForFormik' style={{ gridColumn: "1/2" }}>
                    <h2>Year</h2>
                  </div>
                  <div style={{ gridColumn: "2/3" }}>
                    <div className='input'>
                      <Field
                        id="date"
                        type="date"
                        name="date"
                        placeholder=""
                      />
                      {touched.date && errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
                    </div>
                  </div>
                </div>
              </div>
              {/*IMAGE*/}
              <div className="buttonStyleForFormik" style={{}}>
                <h1>Is admin</h1>
              </div>
              <div className="drawerSquareEdit" style={{}}>
              <div className='drawerSquareEdit'
                  style={{
                    gridColumn: "1/2",
                    gridRow: "3/4",
                    background: "transparent",
                    paddingBottom: "10px"

                  }}>
                  <div className='input'>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email ID"
                    />
                    {touched.email && errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                  </div>
                </div>
              </div>
              {/*ACADEMIC INFO*/}
              <div style={{ background: "#4682B4" }}><h1>ACADEMIC INFO</h1></div>
              {/*GROUP*/}
              <div className="drawerSquareEdit" style={{ background: "#FF69B4" }}>
                <div className="buttonStyleForFormik" style={{ background: "transparent" }}>
                  <h1>Groups</h1>
                </div>
                <div
                  style={{
                    display: "grid",
                    alignItems: "center",
                  }}
                >
                  <div className='buttonStyleForFormik' style={{ gridRow: "1/2", gridColumn: "1/2", marginLeft: "15px" }}>
                    <h2>Normal</h2>
                  </div>
                  <div style={{ gridRow: "1/2", gridColumn: "2/3" }}>
                    <div className='input'>
                      <Field
                        id="firstName"
                        type="list"
                        name="firstName"
                        placeholder="First Name"
                      />
                      {touched.firstName && errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                    </div>
                  </div>
                  <div className='buttonStyleForFormik' style={{ gridRow: "2/3", gridColumn: "1/2", marginLeft: "15px" }}>
                    <h2>Idiom</h2>
                  </div>
                  <div style={{ gridRow: "2/3", gridColumn: "2/3" }}>
                    <div className='input'>
                      <Field
                        id="middleName"
                        type="text"
                        name="middleName"
                        placeholder="Middle Name"
                      />
                      {touched.middleName && errors.middleName && <div style={{ color: 'red' }}>{errors.middleName}</div>}
                    </div>
                  </div>
                </div>
              </div>
              {/*CONFIRM*/}
              <div className='buttonStyleForFormik' style={{ borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px" }}>
                <h1>Confirm Changes</h1>
              </div>

            </Form>
          )}
        </Formik>
      </div>

      {/* PERSONAL OVERLAY */}
      <div className={`personalOverlay ${isPersonalOverlayVisible ? 'open' : ''}`} onClick={closePersonalOverlay}></div>
    </div>
  );
};

export default DrawerSignUp;