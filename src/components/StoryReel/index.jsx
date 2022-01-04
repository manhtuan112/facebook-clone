import React from "react";
import "./style.css";
import Story from "../Story";
const Index = () => {
  return (
    <div className="storyReel">
      <Story image="story1" profileSrc="avt1" title="Phạm Minh Hiếu" />
      <Story image="story2" profileSrc="avt1" title="Phạm Minh Hiếu" />
      <Story image="story3" profileSrc="avt1" title="Phạm Minh Hiếu" />
      <Story image="story4" profileSrc="avt1" title="Phạm Minh Hiếu" />
      <Story image="story5" profileSrc="avt1" title="Phạm Minh Hiếu" />
    </div>
  );
};

export default Index;
