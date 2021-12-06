import './Post.css'
import {MoreVert} from '@mui/icons-material'
import { useState } from 'react'


const Post = ({postss})=>{
    const [like,setlike]  = useState(postss.like)
    const[islike,setislike] = useState(false)
    const likeHandler = ()=>{
        setlike(islike ? like -1 : like+1)
        setislike(!islike)
    }
    return(
        <div className='post'>
            <div className="postWrap">
            <div className="postTop">
            <div className="postTl">
                <img  className="postTlimg" src="assets/me.jpg"    alt="aman"            />
                <span className="username">Aman Siddiqui</span>
                <span className="time">{postss.date}</span>
            </div>
            <div className="postTr">
                <MoreVert/>

            </div>
            </div>
            <div className="postCenter">
                <span className="postText">{postss.desc} </span>
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