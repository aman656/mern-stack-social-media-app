import Navbar from "../../components/Navbar/Navbar"
import LeftBar from "../../components/LeftBar/LeftBar"
import Feed from "../../components/Feed/Feed"
import Right from "../../components/Right/Right"
import './Home.css'
import Profile from "../Profile/Profile"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"

const Home = ()=>{
    return(
        <>
        <SignUp/>
        {/* <Profile/> */}
        {/* <Navbar/>
        <div className = "firstfloor">
        <LeftBar/>
        <Feed/>
        <Right/>
        
        
        </div> */}

        </>
    )
}

export default Home