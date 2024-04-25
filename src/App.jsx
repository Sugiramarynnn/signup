
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from './Component/Signin';
import Signup from './Component/Signup';

function App() {
  
  return (
    <>
<Router>
  <Signin/>
  <Signup/>
  <Routes>
    <Route>

    </Route>
  </Routes>
</Router>
    </>
  )
}

export default App
