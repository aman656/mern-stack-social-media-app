import Navbar from "../../components/Navbar/Navbar"
import LeftBar from "../../components/LeftBar/LeftBar"
import Feed from "../../components/Feed/Feed"
import Right from "../../components/Right/Right"
import './Home.css'

const Home = ()=>{
    return(
        <>
     
    
         <Navbar/>
        <div className = "firstfloor">
        <LeftBar/>
        <Feed/>
        <Right/>
        
        
        </div> 

        </>
    )
}

export default Home