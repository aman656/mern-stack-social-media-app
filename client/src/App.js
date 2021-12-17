import Home from "./Pages/Home/Home";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import SignIn from "./Pages/SignIn/SignIn"
import SignUp from './Pages/SignUp/SignUp'
import Profile from "./Pages/Profile/Profile";
import { AuthContext } from "./context/AuthContext";
import {useContext} from 'react'

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
     <Route  path='/' element={user ? <Home/> : <SignUp/>} />
      <Route path='/login' element={!user ?<SignIn/> : <Home/>} />
      <Route path='/register' element={<SignUp/>} />
      <Route path='/profile/:username' element={<Profile/>} />
   
    </Routes>
    </Router>
   
  );
}

export default App;
