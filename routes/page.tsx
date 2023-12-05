import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Update from '../update/page';
import Create from '../create/page';


function App () {
  return (
    <Router>
        <Routes>
            <Route path='/craete' element={<Create/>}/>
            <Route path='/update' element={<Update/>}/>
            
        </Routes>
    </Router>
  )
}

export default App








