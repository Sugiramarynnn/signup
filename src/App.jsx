
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Reset from './Component/Reset';
import Forgotpassword from './Component/Forgotpassword';
import Confirmation from './Component/Confirmation';
import Confirmationpage from './Component/Confirmationpage';




function App() {
  
  return (
    <>  
      <Router>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path="/Forgotpassword" element={<Forgotpassword />} />
            <Route path="/Confirmation" element={<Confirmation />} />
            <Route path="/Confirmationpage" element={<Confirmationpage />} />
          </Route>
        </Routes>
      </Router>

      {/* <Router>

        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path='/Reset' element={<Reset/>} />
            <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
            <Route path="/Confirmation" element={<Confirmation/>} />
            <Route path="/Confirmationpage" element={<Confirmationpage/>} />
      
        </Routes>
      </Router> */}
    </>
  );
}

export default App
