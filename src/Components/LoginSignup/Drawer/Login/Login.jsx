import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../../Context/LanguageContext';

const DrawerLogIn = ({ drawerOpenLogIn, toggleDrawerLogIn }) => {
  const navigate = useNavigate();
  const { language, changeLanguage } = useLanguage();

  const handleLogin = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful', data);
        navigate('/administrator');

      } else {
        console.log('Login failed', data.message);
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
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
          onSubmit={handleLogin} // Llamamos a handleLogin aquí
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
