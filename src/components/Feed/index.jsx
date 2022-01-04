import React, {useState, useEffect} from 'react';
import './style.css';
import StoryReel from '../StoryReel';
import MessageSender from '../MessageSender'
import Post from '../Post'
const Index = ({inforPost, setInforPost}) => {


    const [removePost, setRemovePost] = useState(null)


    useEffect(() => {
        let CopyInforPost = [...inforPost]
        CopyInforPost = CopyInforPost.filter((item)=>item.time !== removePost)
        setInforPost(CopyInforPost)
    }, [removePost]);


    return (
        <div className="feed">
            <StoryReel />
            <MessageSender inforPost={inforPost} setInforPost={setInforPost}/>
            {
                inforPost.map((item,index)=>(
                    <Post key={item.time} message={item.message} time={item.time} timedate={item.timedate} imgUrl={item.imgUrl} comment={item.comment} like={item.like} setRemovePost={setRemovePost} inforPost={inforPost} setInforPost={setInforPost}/>
                ))
            }
            

        </div>
    );
}

export default Index;
