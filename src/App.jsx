import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import HomePage from './HomePage'
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import FindDoctorPage from './findDoctorPage';
import HealthRecordPage from './HealthRecords';

function App() {
  return (
    //<HealthRecordPage />
    <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/finddoctor' element={<FindDoctorPage />} />
      <Route path='/healthrecord' element={<HealthRecordPage />} />
      </Routes>
    </Router>
  )
}
export default App
