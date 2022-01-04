import React, { useState, useEffect } from "react";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { FaRegSmile } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GoSmiley } from "react-icons/go";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { IoLocationSharp } from "react-icons/io5";
import { Avatar } from "@mui/material";
import { GiMicrophone } from "react-icons/gi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
const Index = ({
  showCreatePost,
  handleShowCreatePost,
  inforPost,
  setInforPost,
}) => {
  const [newPost, setNewPost] = useState({
    message: "",
    imgUrl: "",
    time: "",
    timedate: "",
    comment: [],
    like: 0,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [messagePost, setMessagePost] = useState("");
  const [activeStyle, setActiveStyle] = useState({
    backgroundColor: "#e4e6eb",
    color: "#bcc0c4",
  });

  const [displayAddImage, setDisplayAddImage] = useState(false);

  const handleChageStatus = (e) => {
    const tmp = e.target.value;
    setMessagePost(tmp);
  };

  useEffect(() => {
    if (messagePost.trim() !== "") {
      setActiveStyle({
        backgroundColor: "#1877f2",
        color: "white",
      });
    } else {
      setActiveStyle({
        backgroundColor: "#e4e6eb",
        color: "#bcc0c4",
      });
    }
  }, [messagePost]); //dung useEffect vi ham onChange luon bi cham hon 1 ki tu

  const handlePost = () => {
    if (messagePost !== "") {
      const date = new Date();
      newPost.time = date.getTime()
      newPost.timedate = `Ngày ${date.getDay()} tháng ${date.getMonth()} lúc ${date.getHours()}:${date.getMinutes()}`
      newPost.message = messagePost;
      {
        selectedImage === null
          ? (newPost.imgUrl = "")
          : (newPost.imgUrl = URL.createObjectURL(selectedImage));
      }
      setInforPost([newPost ,...inforPost]);
      setNewPost({
        message: "",
        imgUrl: "",
        time: "",
        timedate: "",
        comment: [],
        like: 0,
      });
      setMessagePost("");
      setSelectedImage(null);
      setDisplayAddImage(false)
      handleShowCreatePost();
      console.log(inforPost)
    }
  };

  const handelRemoveImg = () =>{
    setSelectedImage(null)
    setDisplayAddImage(false)
  }

  return (
    <div className="createPost">
      {showCreatePost && (
        <div className="createPost__wrapper">
          <div className="overlay" onClick={handleShowCreatePost}></div>
          <div className="createPost__content">
            <div className="createPost__content-top">
              <h3>Tạo bài viết</h3>
              <div className="contentPost__topInfo">
                <Avatar
                  src="https://scontent.fhph2-1.fna.fbcdn.net/v/t1.6435-9/146834022_764150824508152_189088412607623086_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eiH4IXZWlrwAX8kYOa5&_nc_ht=scontent.fhph2-1.fna&oh=ed2f1eb1caf8849ef2915beb50a9cc91&oe=618111F6"
                  className="post__avatar"
                />
                <div className="post__info">
                  <h4>Nguyễn Mạnh Tuân</h4>
                  <div>
                    <span className="post__status">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/7Hw0qSEtas9.png"
                        height="12px"
                        width="12px"
                      />{" "}
                      <span>Công khai</span>
                      <GoTriangleDown fontSize="12px" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="contentPost__middle">
                <div className="post__inputText">
                  <textarea
                    placeholder="Tuân ơi, bạn đang nghĩ gì thế?"
                    value={messagePost}
                    onChange={handleChageStatus}
                  ></textarea>

                </div>


                {displayAddImage && (
                  <div className="post__wrapper-image">
                    
                    <div>
                      {selectedImage === null && (
                        <label htmlFor="selectImg">
                          <div className="post__wrapper-image--addImg">
                            <div className="remove__Img-btn" onClick={handelRemoveImg}>
                              <AiOutlineClose fontSize="24px" />
                            </div>
                            <BiImageAdd fontSize="30px" />
                            <h3>Thêm ảnh/Video</h3>
                            <p>Hoặc kéo và thả</p>
                          </div>
                        </label>
                      )}
                      {selectedImage &&(
                        <div className="post__wrapper-image--addImg">
                          <div className="remove__Img-btn" onClick={handelRemoveImg}>
                            <AiOutlineClose fontSize="24px" />
                          </div>
                          <img
                          alt="not fount"
                          width="100%"
                          height="auto"
                          style = {{objectFit: "cover"}}
                          src={URL.createObjectURL(selectedImage)}
                          />
                        </div>
                        
                      )}
                    </div>

                    <UploadAndDisplayImage
                      selectedImage={selectedImage}
                      setSelectedImage={setSelectedImage}
                    />
                  </div>
                )}

                <div className="post__addBg-and-Emotion">
                  <img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" />
                  <FaRegSmile fontSize="24px" color="#a4a8ae" />
                </div>
              </div>
              <div className="contentPost__bottom">
                <div className="post__addImg">
                  <h4>Thêm vào bài viết</h4>
                  <div className="post__iconAdd">
                    <label
                      onClick={() => {
                        setDisplayAddImage(true);
                      }}
                    >
                      <PhotoLibraryIcon
                        titleAccess="Ảnh"
                        style={{
                          fill: "RGB(69, 189, 98)",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                      />
                    </label>

                    <BsFillPersonPlusFill
                      title="Gắn thẻ"
                      style={{
                        fill: "RGB(24, 119, 242)",
                        fontSize: "30px",
                        margin: "0px 5px",
                        cursor: "pointer",
                      }}
                    />

                    <GoSmiley
                      title="Biểu cảm"
                      style={{
                        fill: "RGB(247, 187, 46)",
                        fontSize: "30px",
                        margin: "0px 5px",
                        cursor: "pointer",
                      }}
                    />

                    <IoLocationSharp
                      title="Vị trí"
                      style={{
                        fill: "RGB(245, 83, 61)",
                        fontSize: "30px",
                        margin: "0px 5px",
                        cursor: "pointer",
                      }}
                    />

                    <GiMicrophone
                      title="Âm thanh"
                      style={{
                        fill: "RGB(240, 40, 73)",
                        fontSize: "30px",
                        margin: "0px 5px",
                        cursor: "pointer",
                      }}
                    />

                    <FiMoreHorizontal
                      title="More"
                      style={{
                        fill: "RGB(109, 116, 123)",
                        fontSize: "24px",
                        margin: "0px 5px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
                <div className="post__btn-wrapper">
                  <div
                    className="post__btn"
                    style={activeStyle}
                    onClick={handlePost}
                  >
                    Đăng
                  </div>
                </div>
              </div>
            </div>
            <div className="createPost__close" onClick={handleShowCreatePost}>
              <AiOutlineClose fontSize="24px" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
