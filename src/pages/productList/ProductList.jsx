import React, { useState } from 'react';
import "./productList.scss";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { productsRows } from '../../dummyData';


  


const ProductList = () => {
    const [data, setData] = useState(productsRows)
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200, renderCell: (params) => {
          return(
              <div className='userListUser'>
                  <img 
                      className='userListImg'
                      src={params.row.image} alt="" />
                  {params.row.name}
              </div>
          ) 
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'price', headerName: 'Price', width: 130 },
        

        {
          field: 'action',
          headerName: 'Actions',
          width: 150,
          renderCell: (params) => {
              return (
                  <div className="userListButtons">
                      <Link to={`/product/${params.row.id}`}>
                          <button className="edit">Edit</button>
                      </Link>
                      <DeleteOutline  
                      className="delete"
                      onClick={() => handleDelete(params.row.id)}
                      />
                  </div>
              )
          }
        },
      
    ];
    return (
        <div className='productList'>
            <div className="userTitleContainer">
                <h1>Current Products</h1>
                <Link to="/newProduct">
                <button>Create</button>
                </Link>
            </div>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
        />
        </div>
    )
}

export default ProductList