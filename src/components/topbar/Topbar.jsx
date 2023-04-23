import React from 'react';
import "./topbar.scss";
import { Language, LanguageOutlined, NotificationsNone, Settings } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="wrapper">
            <div className="topLeft">
               <span className="logo">Daky's Admin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="iconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar