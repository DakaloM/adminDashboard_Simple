import { Publish } from '@mui/icons-material';
import React from 'react';
import "./newProduct.scss";

const NewProduct = () => { 
  return (
    <div className='newProduct'>
        <h1 className="addProductTitle">New Product</h1>
        <form className="productForm">
            <div className="addProductItem">
                <label>Image</label>
                <input type="file" id='file' />
            </div>
            <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder='Bomber jacket' />
            </div>
            <div className="addProductItem">
                <label>Stock</label>
                <input type="number" placeholder='123' />
            </div>
            <div className="addProductItem">
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="addProductItem">
                <button className='addProductButton'>Create</button>
            </div>
        </form>
    </div>
  )
}

export default NewProduct