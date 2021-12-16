import "./profile.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feed from "../../components/Feed/Feed";
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Profile = ()=> {
  const[user,setUser] = useState({})
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
                src="assets/cover1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/leaf.jpg"
                alt=""
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