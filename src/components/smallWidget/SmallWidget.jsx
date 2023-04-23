import { Visibility } from '@mui/icons-material';
import React from 'react';
import "./smallWidget.scss";

const SmallWidget = () => {
  return (
    <div className='smallWidget'>
        <span className='widgetSmTitle'>New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80" alt="" className="widgetSImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Annah Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80" alt="" className="widgetSImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Annah Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80" alt="" className="widgetSImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Annah Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80" alt="" className="widgetSImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Annah Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80" alt="" className="widgetSImg" />
                <div className="widgetSmUser">
                    <span className='widgetSmUsername'>Annah Keller</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>

        </ul>
    </div>
  )
}

export default SmallWidget