import './Feed.css'
import Share from '../Shareable/Share'
import Post from '../Posting/Post'

const Feed = ()=>{
    return (
        <div className="feed">
    <div className="feedWrap">
<Share/>
<Post/>
    </div>
        </div>
    )
    
    
}

export default Feed