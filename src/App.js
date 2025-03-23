import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import AdminPage from './Components/AdminPage/AdminPage';
import Map from './Components/Map/Map';
import { store } from './Store/bookStore'

import { LanguageProvider } from './Context/LanguageContext'

function App() {
  const {count, increment, decrement, position, setRoomId} = store(state => state)
  console.log(count)
  return (
    <LanguageProvider>
      <BrowserRouter>
          <Routes>
            <Route index path="/" element={<LoginSignup/>}/>
            <Route path='/administrator' element={<AdminPage/>}/>
            <Route path='/masterPage' element={<Map/>}/>
            <Route path='/zustand' element={
              <div>
                zustand {position?.roomId}
                <button 
                  onClick={() => {
                    setRoomId('TEST 02')
                  }}
                >
                  TEST
                </button>
              </div>
            } />
          </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
