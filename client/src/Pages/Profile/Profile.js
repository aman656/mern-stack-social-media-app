import "./profile.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feed from "../../components/Feed/Feed";
import axios from 'axios'
import {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

const Profile = ()=> {
  const[usering,setUser] = useState({})
  const {user} =  useContext(AuthContext)
  const params = useParams().username
  console.log(params)
  useEffect(()=>{
    const fetchUser = async()=>{
      const res =  await axios.get(`/users/?uname=${params}`)
      setUser(res.data)

    }
    fetchUser()

  },[params])
 

  return (
    <>
      <Navbar />
      <div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src='/assets/cover.jpg'
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.coverPic ? user.coverPic : '/assets/no.jpg'}
                alt="no one"
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.name}</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed uname={params} />
            {/* <Right profile/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile