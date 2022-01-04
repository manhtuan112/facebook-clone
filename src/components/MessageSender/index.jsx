import React, {useState} from "react";
import "./style.css";
import { Avatar } from "@mui/material";
import CreatePost from '../CreatePost'

import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Index = ({setInforPost, inforPost}) => {

  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleShowCreatePost = () => {
    setShowCreatePost(!showCreatePost);
  }




  return (
    
    <div className="messageSender">
      <CreatePost showCreatePost={showCreatePost} handleShowCreatePost={handleShowCreatePost} inforPost={inforPost} setInforPost={setInforPost} />
      <div className="messageSender__top">
        <Avatar src="https://scontent.fhph2-1.fna.fbcdn.net/v/t1.6435-9/146834022_764150824508152_189088412607623086_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0n3_LJmoGFYAX-Kt_I4&_nc_ht=scontent.fhph2-1.fna&oh=86c4c8653030787a4a08160bed3ec999&oe=61753476" />
        <form action="">
          <input
            value ={input}
            onChange = {(e)=>{setInput(e.target.value)}}
            className="messageSender__input"
            placeholder="Tuân ơi, bạn đang nghĩ gì thế?"
            onClick={handleShowCreatePost}
            readOnly
          />
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__options">
          <VideoCameraFrontIcon style={{ fill: "RGB(238, 88, 113)" }} />
          <h3>Video trực tiếp</h3>
        </div>
        <div className="messageSender__options">
          <PhotoLibraryIcon style={{ fill: "RGB(69, 189, 98)" }} />
          <h3>Ảnh/Video</h3>
        </div>
        <div className="messageSender__options">
          <EmojiEmotionsIcon style={{ fill: "RGB(247, 185, 42)" }} />
          <h3>Cảm xúc/Hoạt động</h3>
        </div>
      </div>
    </div>
  );
};

export default Index;
