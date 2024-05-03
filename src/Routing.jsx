import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Login from './components/Login/Login.jsx'
import Header from './components/Common-Feature/Header.jsx'
import EmpDetails from './components/Emp-Details/EmpDetails.jsx'
import Ragistration from './components/Ragistration/Ragistration.jsx'

function Routing() {
  return (
    <div>
       <Router>
        <Header />
          <div className='app-main__outer'>
          <Routes>
          <Route exact path='/' element={
            <Login></Login>
          } />
            <Route exact path="/employee-ragistration" element={
              <React.Suspense>
                <Ragistration />
              </React.Suspense>
            } />
            <Route exact path="/employee-details" element={
              <React.Suspense>
                <EmpDetails />
              </React.Suspense>
            } />
            
            
            </Routes>
          </div>
    </Router>
    </div>
  )
}

export default Routing
