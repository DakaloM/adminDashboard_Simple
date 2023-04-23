import { TrendingUp, LineStyle, Timeline, PermIdentity, Storefront, AttachMoney, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart } from 'recharts';
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>
                            <span>Home</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        <span>Analytics</span>
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon' />
                        <span>Sales</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className='link'>

                        <li className="sidebarListItem">
                            <PermIdentity className='sidebarIcon'/>
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to="/products" className='link'>

                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon' />
                        <span>Transactions</span>
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon' />
                        <span>Reports</span>
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <MailOutline className='sidebarIcon'/>
                        <span>Mail</span>
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon' />
                        <span>Feedback</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon' />
                        <span>Messages</span>
                    </li> 
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/>
                        <span>Manage</span>
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        <span>Analytics</span>
                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcon' />
                        <span>Reports</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar