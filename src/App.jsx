import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import ContactUs from './components/ContactUs';

function App() {
  const location = useLocation();
  const isContactUsPage = location.pathname === '/contact-us';

  return (
    <div className='bg-[#0E2F26] min-h-screen flex flex-col'>
      {!isContactUsPage && <Navbar />}
      <div className='flex-grow'>
        <Routes>
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/' element={<Content />} />
        </Routes>
      </div>
      {!isContactUsPage && <Footer />}
    </div>
  );
}

export default App;
