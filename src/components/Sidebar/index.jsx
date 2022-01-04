import React from "react";
import "./style.css";
import SidebarRow from "../SidebarRow";
const index = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <SidebarRow 
          src = "myavt"
          title = "Nguyễn Mạnh Tuân"
        />
        <SidebarRow 
          url = "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
          title = "Bạn bè"
        />
        <SidebarRow 
          url = "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
          title = "Nhóm"
        />
        <SidebarRow 
          url = "https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
          title = "Đã lưu"
          note = "+9 video mới"
        />
        <SidebarRow 
          url = "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
          title = "Marketplace"
        />
        <SidebarRow 
          url = "https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"
          title = "Chiến dịch gây quỹ"
        />
        <SidebarRow 
          url = "https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png"
          title = "Chơi game"
          note = "2 thư mục mới"
        />
        <SidebarRow 
          url = "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
          title = "Marketplace"
        />
        <SidebarRow 
          url = "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
          title = "Watch"
        />
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom--title">
          <h3>Lối tắt của bạn</h3>
        </div>
        <div className="sidebar__bottom--content">
          <SidebarRow
            url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
            title="D19 Hệ điều hành Cô Quỳnh"
          />
          <SidebarRow
            url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
            title="Cơ sở dữ liệu-Thầy Xuân Anh"
          />
          <SidebarRow
            src="avtgroup1"
            title="LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG - D19 - NHÓM NMS"
            variant = "rounded"
          />
          <SidebarRow
            src="avtgroup1"
            title="D19 PROPTIT"
            variant = "rounded"
          />

        </div>

      </div>
    </div>
  );
};

export default index;
