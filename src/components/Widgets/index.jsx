import React from 'react';
import './style.css';
import {RiVideoAddFill} from 'react-icons/ri';
import {GoSearch} from 'react-icons/go';
import {FiMoreHorizontal} from 'react-icons/fi';
import SidebarRow from '../SidebarRow'


const Index = () => {
    return (
        <div className="widgets">
            <div className="widgets__navbar">
                <h3>Người liên hệ</h3>
                <div className="widgets__icon">
                    <RiVideoAddFill style={{margin: "8px", fontSize:"20px"}} />
                    <GoSearch style={{margin: "8px", fontSize:"20px"}}/>
                    <FiMoreHorizontal style={{margin: "8px", fontSize:"20px"}}/>
                </div>
            </div>

            <div className="widgets__listFriend">
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Trùm cuối"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Mai Hường"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Lê Công"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Vương Doanh"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Nguyễn Văn Lực"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Trần Hăng"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Minh Đức"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Nguyễn Huyền Trang"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Uyên Nguyễn"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Lê Thanh Bình"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Kiều Đức"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Thu Huê"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Chinh Nguyễn"
                    type = 'friend'
                />
                <SidebarRow 
                    src = "avtlistfriend"
                    title = "Phạm Trung Hiếu"
                    type = 'friend'
                />
            </div>
        </div>
    );
}

export default Index;
