import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Faq from './routes/Faq';
import Home from './components/Home';
import Pricing from './routes/Pricing'
import Contact from './routes/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
