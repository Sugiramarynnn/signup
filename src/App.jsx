
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Reset from './Component/Reset';
import Forgotpassword from './Component/Forgotpassword';
import Confirmation from './Component/Confirmation';


function App() {
  
  return (
    <>
      <Router>

        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path='/Reset' element={<Reset/>} />
            <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
            <Route path="/Confirmation" element={<Confirmation/>} />
      
        </Routes>
      </Router>
    </>
  );
}

export default App
