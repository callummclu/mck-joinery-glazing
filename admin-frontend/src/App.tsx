import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { TailSpin } from 'react-loading-icons'
import { useAuth0 } from '@auth0/auth0-react'

// Component Imports
import { AdminNav } from './components/navbar'

// Page Imports
import { AdminIndex } from './pages/adminIndex'
import { AdminGallery } from './pages/Gallery'
import { EditSingleGallery, AddSingleGallery } from './pages/SingleGallery'
import { GalleryCategories } from './pages/GalleryCategories'
import { AddCategory } from './pages/AddCategory'
import { EditCategory } from './pages/EditCategory'
import { Error } from './pages/error'

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={()=>loginWithRedirect()}>login</button>
}

function App() {

  const { user, isAuthenticated, isLoading} = useAuth0();

  return (
    <>
      {isLoading ? 
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
          <TailSpin fill="#06bcee" stroke="#06bcee" height="6em" width="" strokeWidth="2"/>
        </div> : 
      <BrowserRouter>
        <Routes>
          <>


              {isAuthenticated ? (
                <>
                  <Route path="/" element={<AdminNav><AdminIndex/></AdminNav>}/>
                  <Route path="/gallery" element={<AdminNav><GalleryCategories/></AdminNav>}/>
                  <Route path="/gallery/:category" element={<AdminNav><AdminGallery/></AdminNav>}/>
                  <Route path="/gallery/:category/:id" element={<AdminNav><EditSingleGallery/></AdminNav>}/>
                  <Route path="/gallery/:category/add" element={<AdminNav><AddSingleGallery/></AdminNav>}/>

                  <Route path="/category/add" element={<AdminNav><AddCategory/></AdminNav>}/>
                  <Route path="/category/edit/:id" element={<AdminNav><EditCategory/></AdminNav>}/>
                </>
              ) : 
              <>
              <Route path="/" element={<Navigate to="/login" replace/>}/>
              <Route path="/login" element={<Login/>}/>
              </>
            }
            <Route path="*" element={<Error code={404}/>}/>

            </>
          
        </Routes>
      </BrowserRouter>
    }
    </>
  );
}

export default App
