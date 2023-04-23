import React, { useState } from 'react';
import "./userList.scss";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { userRows } from '../../dummyData';


const UserList = () => {
    const [data, setData] = useState(userRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'Username', width: 200, renderCell: (params) => {
          return(
              <div className='userListUser'>
                  <img 
                      className='userListImg'
                      src={params.row.avatar} alt="" />
                  {params.row.username}
              </div>
          ) 
        } },
        { field: 'email', headerName: 'User', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        
        {
          field: 'transaction',
          headerName: 'Amount',
          width: 180,
        },
        {
          field: 'action',
          headerName: 'Actions',
          width: 150,
          renderCell: (params) => {
              return (
                  <div className="userListButtons">
                      <Link to={`/user/${params.row.id}`}>
                          <button className="edit">Edit</button>
                      </Link>
                      <DeleteOutline onClick={() => handleDelete(params.row.id)}  className="delete"/>
                  </div>
              )
          }
        },
      
      ];
      
    
  return (
    <div className='userList'>
        <div className="userTitleContainer">
            <h1>Current Users</h1>
            <Link to="/newUser">
            <button>Add User</button>
            </Link>
        </div>
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
      />
    </div>
  )
}

export default UserList
