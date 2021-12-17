import './Feed.css'
import Share from '../Shareable/Share'
import Post from '../Posting/Post'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
// import { Posts } from '../../dummy-data'

const Feed = ({uname})=>{
    const [post,setPost] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        const fetching = async()=>{
            const res =
             !uname ? await axios.get(`/post/timeline/${user._id}`) :
             await axios.get('/post/prof/' + uname)

            console.log(res.data)
            setPost(res.data)

        }
        fetching()
    },[uname,user._id])
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