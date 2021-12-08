import Home from "./Pages/Home/Home";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import SignIn from "./Pages/SignIn/SignIn"
import SignUp from './Pages/SignUp/SignUp'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/register' element={<SignUp/>} />
   
    </Routes>
    </Router>
   
  );
}

export default App;
