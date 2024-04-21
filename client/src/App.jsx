import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Listing from './pages/Listing';
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';
import Contact from './pages/Contact';
function App() {
  

  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search' element={<Search />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route path='/listing/:listingId' element={<Listing />} />

        
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
