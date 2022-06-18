import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TailSpin } from 'react-loading-icons'
import { useAuth0 } from '@auth0/auth0-react'

// Component Imports
import { Nav } from './components/main/sitewide/navbar'
import { AdminNav } from './components/admin/sitewide/navbar'

// Page Imports
import { Index } from './pages/index'
import { AdminIndex } from './pages/admin/adminIndex'
import { Error } from './pages/error'
import { Gallery } from './pages/cfacing/gallery'
import { Contact } from './pages/cfacing/contact'

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={()=>loginWithRedirect()}>login</button>
}

function App() {

  const { user, isAuthenticated, isLoading} = useAuth0();

  return (
    <>
      {(window.location.host.split('.')[0] === 'admin' && isLoading) ? <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}><TailSpin fill="#06bcee" stroke="#06bcee" height="6em" width="" strokeWidth="2"/></div> : 
      <BrowserRouter>
        {window.location.host.split('.')[0] !== 'admin' ? <Nav/> : isAuthenticated && <AdminNav/>}
        <Routes>
          <Route path="*" element={<Error code={404}/>}/>
          {window.location.host.split('.')[0] !== 'admin' ?
                <>
                  <Route path="/" element={<Index/>}/>
                  <Route path="/gallery" element={<Gallery/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                </>
          :
            <>  
              {isAuthenticated && (
                <Route path="/" element={<AdminIndex/>}/>
              )}
                  <Route path="/login" element={<Login/>}/>
            </>
          }
        </Routes>
      </BrowserRouter>
    }
    </>
  );
}

export default App
