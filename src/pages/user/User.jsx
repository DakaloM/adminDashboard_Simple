import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./user.scss";

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1>Edit User</h1>
            <Link to="/newUser">
            <button>Create</button>
            </Link>
        </div>

        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="" />
                    <div className="userTitle">
                        <span className="username">Anna Beker</span>
                        <span className="role">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">10-12-1997</span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+27 72 134 4014</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">Johannesburg | South Africa</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='annabeck99'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Anna Beker'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='annabeck99@gmail.com'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Date of birth</label>
                            <input type="text" placeholder='10-12-1997'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='+27 72 134 4014'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Johannesburg | South Africa'/>
                        </div>

                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="" />
                            <label htmlFor="file"><Publish className='publish' /></label>
                            <input id="file" type="file" style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User