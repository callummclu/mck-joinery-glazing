import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TailSpin } from 'react-loading-icons'
import { useAuth0 } from '@auth0/auth0-react'

// Component Imports
import { Nav } from './components/main/sitewide/navbar'
import { AdminNav } from './components/admin/sitewide/navbar'
import { Footer } from './components/main/sitewide/footer'

// Page Imports
import { Index } from './pages/index'
import { AdminIndex } from './pages/admin/adminIndex'
import { Error } from './pages/error'
import { Gallery } from './pages/cfacing/gallery'
import { Contact } from './pages/cfacing/contact'
import { AdminGallery } from './pages/admin/Gallery'
import { EditSingleGallery, AddSingleGallery } from './pages/admin/SingleGallery'
import { GalleryCategories } from './pages/admin/GalleryCategories'
import { AddCategory } from './pages/admin/AddCategory'
import { EditCategory } from './pages/admin/EditCategory'

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
        {window.location.host.split('.')[0] !== 'admin' && <Nav/>}
        <Routes>
          <Route path="*" element={<Error code={404}/>}/>
          {window.location.host.split('.')[0] !== 'admin' ?
                <>
                  <Route path="/" element={<Index/>}/>
                  <Route path="/gallery/:category" element={<Gallery/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                </>
          :
            <>  
              {isAuthenticated && (
                <>
                  <Route path="/" element={<AdminNav><AdminIndex/></AdminNav>}/>
                  <Route path="/gallery" element={<AdminNav><GalleryCategories/></AdminNav>}/>
                  <Route path="/gallery/:category" element={<AdminNav><AdminGallery/></AdminNav>}/>
                  <Route path="/gallery/:category/:id" element={<AdminNav><EditSingleGallery/></AdminNav>}/>
                  <Route path="/gallery/:category/add" element={<AdminNav><AddSingleGallery/></AdminNav>}/>

                  <Route path="/category/add" element={<AdminNav><AddCategory/></AdminNav>}/>
                  <Route path="/category/edit/:id" element={<AdminNav><EditCategory/></AdminNav>}/>
                </>
              )}
                  <Route path="/login" element={<Login/>}/>
            </>
          }
        </Routes>
        {window.location.host.split('.')[0] !== 'admin' && <Footer/>}
      </BrowserRouter>
    }
    </>
  );
}

export default App
