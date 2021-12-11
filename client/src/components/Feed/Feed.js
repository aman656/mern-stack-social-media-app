import './Feed.css'
import Share from '../Shareable/Share'
import Post from '../Posting/Post'
import { useState,useEffect } from 'react'
import axios from 'axios'
// import { Posts } from '../../dummy-data'

const Feed = ({uname})=>{
    const [post,setPost] = useState([])
    useEffect(()=>{
        const fetching = async()=>{
            const res =
             !uname ? await axios.get("/post/timeline/61b0ed41cffee25b5aaaaa47") :
             await axios.get('/post/prof/' + uname)

            console.log(res.data)
            setPost(res.data)

        }
        fetching()
    },[uname])
    return (
        <div className="feed">
    <div className="feedWrap">
<Share/>
 {post.map((sing)=>(
<Post key = {sing._id}  postss = {sing}  />
))} 
    </div>
        </div>
    )
    
    
}

export default Feed