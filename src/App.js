import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accessories from './components/mainPages/accessoriesPage/Accessories';
import HomePage from './components/mainPages/homePage/HomePage';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import React, { useState, useEffect } from 'react';

export const UserContext = React.createContext();


function App() {
    const [userData, setUserData] = useState({});
    const updateUserData = (action) => {
        switch (action.type) {
            case "LOGOUT":
                setUserData(null);
                localStorage.clear();
                break;
            case "LOGIN":
                setUserData(action.payload);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("user_data")));      
    }, []);

  return (
      <>
          <UserContext.Provider value={{ userData, updateUserData }}>
              <Router>
                  <Routes>
                      <Route path='/' element={<HomePage />} />
                      <Route path='/accessories' element={<Accessories />} />
                      <Route path='/auth/create' element={<Signup />} />
                      <Route path='/auth/login' element={<Login />} />
                  </Routes>
              </Router>
          </UserContext.Provider>
      </>
  );
}

export default App;