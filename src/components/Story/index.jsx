import React from "react";
import { Avatar } from "@mui/material";
import './style.css';
const Index = ({ image, profileSrc, title }) => {
  


  return (
    <div
      className="story"
    >
      <img src={require('../../images/'+image+'.jpg')} className="story__image"/>
      {/*lấy link ảnh không cần imp*/}
      <Avatar className="story__avatar" src={require('../../images/'+profileSrc+'.jpg')} sx={{width: 40, height: 40}}/>
      <h4>{title}</h4>
    </div>
  );
};

export default Index;
