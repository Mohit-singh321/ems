import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import EmployeeComponent from './component/EmployeeComponent';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {/* // http://localhost:3000 */}

          <Route path="/" element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/employees */}

          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:3000/add-employee */}

          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
          {/* // http://localhost:3000/edit-employee/1 */}
          
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App
