import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accessories from './components/mainPages/accessoriesPage/Accessories';
import HomePage from './components/mainPages/homePage/HomePage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/accessories' element={<Accessories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;