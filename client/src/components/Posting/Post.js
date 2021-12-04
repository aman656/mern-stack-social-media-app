import './Post.css'
import {MoreVert} from '@mui/icons-material'


const Post = ()=>{
    return(
        <div className='post'>
            <div className="postWrap">
            <div className="postTop">
            <div className="postTl">
                <img  className="postTlimg" src="assets/me.jpg"    alt="aman"            />
                <span className="username">Aman Siddiqui</span>
                <span className="time">3 mins ago </span>
            </div>
            <div className="postTr">
                <MoreVert/>

            </div>
            </div>
            <div className="postCenter">
                <span className="postText">Probably not the first </span>
                <img   className="postImg" src="/assets/leaf.jpg" alt = "leaves"  />
            </div>
            <div className="postBottom">
                <div className="postBotL">
                    <img  className="likeIcon"  src="/assets/like.png" alt = "like pic"                />
                    <img  className="likeIcon"  src="/assets/heart.jpg" alt= "heart pic"              />
                    <span className="likecount">7 people like this</span>
                </div>
                <div className="postBotR">
                    <span className="comment">9 comments</span>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Post