import './Feed.css'
import Share from '../Shareable/Share'
import Post from '../Posting/Post'
import { Posts } from '../../dummy-data'

const Feed = ()=>{
    return (
        <div className="feed">
    <div className="feedWrap">
<Share/>
{Posts.map((sing)=>(
<Post key = {sing.id}  postss = {sing}  />
))}
    </div>
        </div>
    )
    
    
}

export default Feed