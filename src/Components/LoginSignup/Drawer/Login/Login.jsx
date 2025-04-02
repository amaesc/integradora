import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { store } from '../../../../Store/bookStore'


const DrawerLogIn = ({ drawerOpenLogIn, toggleDrawerLogIn }) => {
  const navigate = useNavigate();
  const { language, setLanguage } = store(state => state);
  const { user, setUserInformation } = store(state => state);

  const setUserCredentialsByDataBase = async (userEmail) => {
    try{
      const emailEncoded = encodeURIComponent(userEmail);
      const fetchURL = `https://express-production-e5e6.up.railway.app/getUserInformation?email=${emailEncoded}`;

      const response = await fetch(fetchURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
  
      if(response.ok){
        setUserInformation(
          data.username, 
          data.firstName, 
          data.middleName, 
          data.lastName, 
          data.groupKey, 
          data.idiomGroupKey,
          data.dateOfBirth,
          data.profilePhotoURL,
          data.defaultThemePalette,
          data.isAdmin,
          userEmail
        );
      }
/*
      console.log("----- DATA ------");
      console.log("Username: " + data.username);
      console.log("FirstName: " + data.firstName);
      console.log("MiddleName: " + data.middleName);
      console.log("LastName: " + data.lastName);
      console.log("Email: " + userEmail);
      console.log("GroupKey: " + data.groupKey);
      console.log("IdiomGroupKey: " + data.idiomGroupKey);
      console.log("DateOfBirth: " + data.dateOfBirth);
      console.log("ProfilePhotoURL: " + data.profilePhotoURL);
      console.log("DefaultThemePalette: " + data.defaultThemePalette);
      console.log("IsAdmin: " + data.isAdmin);
      console.log("----- CLOSE DATA -----");

      console.log("----- ZUSTAND ------");
      console.log("FirstName: " + user.firstName);
      console.log("MiddleName: " + user.middleName);
      console.log("LastName: " + user.lastName);
      console.log("Email: " + user.email);
      console.log("GroupKey: " + user.groupKey);
      console.log("IdiomGroupKey: " + user.idiomGroupKey);
      console.log("DateOfBirth: " + user.dateOfBirth);
      console.log("ProfilePhotoURL: " + user.profilePhotoURL);
      console.log("DefaultThemePalette: " + user.defaultThemePalette);
      console.log("IsAdmin: " + user.isAdmin);
      console.log("----- CLOSE ZUSTAND -----");
*/
    }catch (error){
      console.log(error);
    }
  }


  const handleLogin = async (values) => {
    try {
      const emailEncoded = encodeURIComponent(values.email);
//      const fetchURL = `http://localhost:5000/login?email=${emailEncoded}&password=${values.password}`;
      const fetchURL = `https://express-production-e5e6.up.railway.app/login?email=${emailEncoded}&password=${values.password}`;

      const response = await fetch(fetchURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if(response.ok) {
        if(data.checkPasswordValue.status){
          setUserCredentialsByDataBase(values.email);
          navigate("/masterPage");
        }else{
          console.log(data.checkPasswordValue.message);
        }

      }else{
        console.log("Login failed", data.message);
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className={`drawerLogIn ${drawerOpenLogIn ? 'open' : ''}`}>
      <div className="drawerSquare"><h1>LOG IN</h1></div>
      <div className="drawerSquare">
        <div className='fontAwesomeIcon' onClick={toggleDrawerLogIn}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>

      <div style={{ gridColumn: "1/4" }}>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
              errors.email = 'Email is invalid';
            }
            if (!values.password) {
              errors.password = 'Password is required';
            }
            return errors;
          }}
          onSubmit={handleLogin}
        >
          {({ isValid, touched, errors }) => (
            <Form className='formGrid'>
              <div className="drawerSquare" style={{ gridColumn: "1/2", gridRow: "1/2" }}>
                <div className='fontAwesomeIcon'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>

              <div className='drawerSquare' style={{ gridColumn: "2/4", gridRow: "1/2" }}>
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

              <div className="drawerSquare" style={{ gridColumn: "1/2", gridRow: "2/3" }}>
                <div className='fontAwesomeIcon'>
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>

              <div className="drawerSquare" style={{ gridColumn: "2/4", gridRow: "2/3" }}>
                <div className="input">
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {touched.password && errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>
              </div>

              <div className="drawerSquare" style={{ gridColumn: "1/2", gridRow: "3/4" }}>
                <div className='squareButton'>
                  <h1>FORGOT PASSWORD?</h1>
                </div>
              </div>

              <div className="drawerSquare" style={{ gridColumn: "2/4", gridRow: "3/4" }}>
                <button
                  className='squareButton'
                  type="submit"
                  disabled={!isValid || Object.keys(errors).length > 0}
                >
                  <h1>CONFIRM</h1>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default DrawerLogIn;
