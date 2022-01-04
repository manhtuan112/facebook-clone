import React, { useState, useEffect } from "react";
import "./style.css";
import UploadAndDisplayImage from "../CreatePost/UploadAndDisplayImage";
import { Avatar, Badge } from "@mui/material";
import { AiOutlineLike, AiOutlineClose } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { ImBin } from "react-icons/im";
import { TiCameraOutline } from "react-icons/ti";
const Index = ({
  message,
  time,
  timedate,
  imgUrl,
  comment,
  like,
  setRemovePost,
  inforPost,
  setInforPost,
}) => {
  const [showRemoveAlert, setShowRemoveAlert] = useState(false);
  const [commentInput, setCommentInput] = useState({
    time: 0,
    content: "",
    imgUrl: "",
  });
  // const [showDeleteComment, setShowDeleteComment] = useState(false);

  const [commentImage, setCommentImage] = useState(null);
  const handleComment = (e) => {
    const tmp = e.target.value;
    setCommentInput({
      time: 0,
      content: tmp,
      imgUrl: "",
      showDelete: false,
    });
    setCommentImage(null);
  };
  const handleRemovePost = (e) => {
    setShowRemoveAlert(false);
    setRemovePost(time);
  };

  const handleShowDeleteAlert = (index) => {
    console.log(index);
  };

  const handleDeleteComment = (index) => {};

  const handleIncreaseLike = (e) => {
    const index = inforPost.findIndex((item) => item.time === time);
    inforPost[index].like += 1;
    setInforPost([...inforPost]);
  };

  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTimer(new Date());
    }, 1000);
  }, []);

  const handleTimePost = (old_time, new_time, timedate) => {
    let distance = (new_time - old_time) / 1000;
    if (distance < 60) return `Vừa xong`;
    else if (distance < 3600) return `${Math.round(distance / 60)} phút`;
    else if (distance >= 3600 && distance * 3600 < 24)
      return `${Math.round(distance / 3600)} giờ`;
    else if (distance * 3600 >= 24 && distance * 3600 < 48)
      return `Hôm qua lúc ${Math.round(24 - (distance * 3600 - 24))}`;
    else return timedate;
  };

  const handleTimeComment = (old_time, new_time) => {
    let distance = (new_time - old_time) / 1000;
    if (distance < 60) return `Vừa xong`;
    else if (distance >= 60 && distance / 3600 < 1)
      return `${Math.round(distance / 60)} phút`;
    else if (distance >= 3600 && distance / 3600 < 24)
      return `${Math.round(distance / 3600)} giờ`;
    else if (distance / 3600 >= 24 && distance / (3600 * 24) < 7)
      return `${Math.round(distance / (3600 * 24))} ngày`;
    else if (distance / (3600 * 24 * 7) >= 1 && distance / (3600 * 24 * 7) < 52)
      return `${Math.round(distance / (3600 * 24 * 7))} tuần`;
    else {
      console.log(distance);
      return `${Math.round(distance / (3600 * 24 * 7 * 52))} năm`;
    }
  };

  const handleAddImageCmt = (e) => {
    setCommentImage(null);
  };

  const handlePressKey = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      const index = inforPost.findIndex((item) => item.time === time);
      const today = new Date();
      commentInput.time = today.getTime();
      commentInput.content = e.target.value;
      {
        commentImage
          ? (commentInput.imgUrl = URL.createObjectURL(commentImage))
          : (commentInput.imgUrl = "");
      }
      inforPost[index].comment.push(commentInput);
      setInforPost([...inforPost]);
      setCommentInput({
        time: 0,
        content: "",
        imgUrl: "",
        showDelete: false,
      });
      setCommentImage(null);
    }
  };

  return (
    <div className="post">
      <div className="post__top">
        <div className="post__top--wrapperInfo">
          <Avatar
            src="https://scontent.fhph2-1.fna.fbcdn.net/v/t1.6435-9/146834022_764150824508152_189088412607623086_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0n3_LJmoGFYAX-Kt_I4&_nc_ht=scontent.fhph2-1.fna&oh=86c4c8653030787a4a08160bed3ec999&oe=61753476"
            className="post__avatar"
          />
          <div className="post__topInfo">
            <h3>Nguyen Manh Tuan</h3>
          <div>{handleTimePost(time, timer.getTime(), timedate)}</div>
          </div>
        </div>
        <div
          className="post__ShowRemoveAlert"
          onClick={(e) => {
            setShowRemoveAlert(!showRemoveAlert);
          }}
        >
          <FiMoreHorizontal fontSize="24px" color="gray" />
        </div>
        {showRemoveAlert && (
          <div className="post__RemoveAlert" onClick={handleRemovePost}>
            <ImBin
              fontSize="24px"
              style={{ color: "gray", marginRight: "5px" }}
            />
            <div>
              <h4>Chuyển vào thùng rác</h4>
              <>Các thư mục trong thùng rác sẽ bị xóa sau 30 ngày</>
            </div>
          </div>
        )}
      </div>

      <div className="post__bottom">
        <p>{message}</p>
        <div className="post__image">
          <img src={imgUrl} alt="" />
        </div>
        <div className="post__count-like-and-comment">
          {like === 0 && <div></div>}

          {like !== 0 && (
            <div>
              <img
                width="18px"
                height="18px"
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                alt=""
              />
              <span>{like} like</span>
            </div>
          )}

          {comment.length !== 0 && <div>{comment.length} bình luận</div>}
        </div>
        <div className="post__options">
          {like != 0 ? (
            <div
              className="post__option blue_like"
              id="like__option"
              onClick={handleIncreaseLike}
            >
              <i className="like_icon liked"></i>
              <p>Thích</p>
            </div>
          ) : (
            <div
              className="post__option"
              id="like__option"
              onClick={handleIncreaseLike}
            >
              <i className="like_icon"></i>
              <p>Thích</p>
            </div>
          )}

          <div className="post__option">
            <label htmlFor="comment__input">
              <i className="comment_icon"></i>
              <p>Bình luận</p>
            </label>
          </div>
          <div className="post__option">
            <i className="share_icon"></i>
            <p>Chia sẻ</p>
          </div>
        </div>
        <div className="post__comment">
          {comment.lenght !== 0 &&
            comment.map((item, index) => (
              <div className="comment-item" key={item.time}>
                <div className="comment__avatar">
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                    color="success"
                  >
                    <Avatar
                      className="sidebarRow__avatar"
                      src="https://scontent.fhph2-1.fna.fbcdn.net/v/t1.6435-9/146834022_764150824508152_189088412607623086_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0n3_LJmoGFYAX-Kt_I4&_nc_ht=scontent.fhph2-1.fna&oh=86c4c8653030787a4a08160bed3ec999&oe=61753476"
                      sx={{ width: 30, height: 30 }}
                    />
                  </Badge>
                </div>
                <div>
                  <div className="comment__content-wrapper">
                    <div className="comment__content">
                      <h4>Nguyễn Mạnh Tuân</h4>
                      <p>{item.content}</p>
                    </div>

                    <div
                      className="showDeleteComment"
                      onClick={handleShowDeleteAlert(index)}
                    >
                      <FiMoreHorizontal fontSize="20px" color="gray" />
                      {item.showDelete === true && (
                        <div className="deleteCommentAlert">
                          <div
                            className="deleteComment"
                            onClick={handleDeleteComment}
                          >
                            Xóa
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {item.imgUrl !== "" && (
                    <div className="comment__image">
                      <img src={item.imgUrl} alt="" />
                    </div>
                  )}

                  <div className="comment__note">
                    <span>Thích </span>.<span> Phản hồi </span>.
                    <span>
                      {" "}
                      {handleTimeComment(item.time, timer.getTime())}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="post__comment-input">
          <div className="comment__avatar">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              color="success"
            >
              <Avatar
                className="sidebarRow__avatar"
                src="https://scontent.fhph2-1.fna.fbcdn.net/v/t1.6435-9/146834022_764150824508152_189088412607623086_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0n3_LJmoGFYAX-Kt_I4&_nc_ht=scontent.fhph2-1.fna&oh=86c4c8653030787a4a08160bed3ec999&oe=61753476"
                sx={{ width: 30, height: 30 }}
              />
            </Badge>
          </div>
          <div className="comment__input-wrapper">
            <div className="comment__input">
              <input
                id="comment__input"
                value={commentInput.content}
                onChange={handleComment}
                className="comment__input-text"
                placeholder="Viết bình luận..."
                onKeyDown={handlePressKey}
              ></input>
              <label htmlFor="selectImg" className="selectCmtImg">
                <i className="camera_icon" title="Đính kèm ảnh hoặc video"></i>
              </label>
            </div>
            <UploadAndDisplayImage
              selectedImage={commentImage}
              setSelectedImage={setCommentImage}
            />
            {commentImage && (
              <div className="post__image-comment">
                <img src={URL.createObjectURL(commentImage)} alt="" />
                <div className="image__remove" onClick={handleAddImageCmt}>
                  <AiOutlineClose fontSize="16px" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
