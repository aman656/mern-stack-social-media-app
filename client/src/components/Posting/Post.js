import './Post.css'
import {MoreVert} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from "react-router-dom"


const Post = ({postss})=>{
    const [like,setlike]  = useState(postss.like)
    const [user,setUser] = useState({})
    const[islike,setislike] = useState(false)
    useEffect(()=>{
        const fetchingUser = async()=>{
            const res = await axios.get(`/users/?id=${postss.uid}`)
            setUser(res.data)

        }
        fetchingUser()

    },[postss.uid])
    const likeHandler = ()=>{
        setlike(islike ? like -1 : like+1)
        setislike(!islike)
    }
    return(
        <div className='post'>
            <div className="postWrap">
            <div className="postTop">
            <div className="postTl">
                <Link to= {`/profile/${user.name}`}>
                <img  className="postTlimg" src={postss.coverImage || "/assets/no1.jpg"}    alt="aman"            /></Link>
                <span className="username">{user.name}</span>
                <span className="time" style={{color:"gray"}}>{format(postss.createdAt)}</span>
            </div>
            <div className="postTr">
                <MoreVert/>

            </div>
            </div>
            <div className="postCenter">
                <span className="postText">{postss.about} </span>
                <img   className="postImg" src="/assets/leaf.jpg" alt = "leaves"  />
            </div>
            <div className="postBottom">
                <div className="postBotL">
                    <img  className="likeIcon"  src="/assets/like.png" alt = "like pic"    onClick={likeHandler} />
                    <img  className="likeIcon"  src="/assets/heart.jpg" alt= "heart pic"    onClick={likeHandler}      />
                    <span className="likecount">{like} people like this</span>
                </div>
                <div className="postBotR">
                    <span className="comment">{postss.comment} comments</span>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Post