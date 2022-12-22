import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Products from './components/Products'
import Regis from './components/Regis'
import Container from '@mui/material/Container';
export default function App() {
  return (
    <div>
      <Router>
         <Header />
         <Container>
           <Routes>
              <Route path='' element={<Login/>}/>
              <Route path='regis' element={<Regis/>}/>
              <Route path='products' element={<Products/>}/>
           </Routes>
         </Container>
      </Router>
    </div>
  )
}
