import { Avatar, Badge } from "@mui/material";
import React from "react";
import "./style.css";
const SidebarRow = ({ src, url, title, variant, type, note }) => {
  return (
    <div className="sidebarRow">
      {type !== "friend" && src && (
        <Avatar
          className="sidebarRow__avatar"
          src={require('../../images/'+src+'.jpg')}
          sx={{ width: 36, height: 36 }}
          variant={variant}
        />
      )}

      {url && (
        <img
          className="sidebarRow__image"
          src={url}
          alt=""
          sx={{ width: 36, height: 36 }}
        />
      )}
{/* style list friend */}
      {type === "friend" && src && (
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          color="success"
        >
          <Avatar
            className="sidebarRow__avatar"
            src={require('../../images/'+src+'.jpg')}
            sx={{ width: 36, height: 36 }}
          />
        </Badge>
      )}
      <div className="wr__siderbarRowTitle">
        <h4>{title}</h4>
        {note && (
          <p className="note"><div className="dote"></div><div>{note}</div></p>
        )}
      </div>
      
      
    </div>
  );
};

export default SidebarRow;
