
import { Route, Routes } from 'react-router-dom';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './COMPONENT/Calculator';

function App() {
 

  return (
    <>
     <h1>APP COMPONENT</h1>
     <Routes>
      <Route path='calcu' element={<Calculator/>}/>
     </Routes>
    </>
  )
}

export default App
