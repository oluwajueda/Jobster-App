import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import {Landing, Error, Dashnoard, Register, Dashboard} from './pages';




function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Dashboard/>}/>
   <Route path='landing' element={<Landing/>}/>
   <Route path='register' element={<Register/>}/>
   <Route path='*' element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
