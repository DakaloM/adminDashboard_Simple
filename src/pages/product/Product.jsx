import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import "./product.scss";
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

const Product = () => {
  return (
    <div className='product'>
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newProduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>

        <div className="productTop"> 
          <div className="topLeft">
            <Chart title={"Product Sales"} data={productData} dataKey="Sales"/>
          </div>
          <div className="topRight">
            <div className="top">
              <img src="https://i.ibb.co/YZC6n90/coat1.png" alt="" />
              <span>Bomber Jacket</span>
            </div>
            <div className="bottom"> 
              <div className="infoItem">
                <span className="infoKey">Id:</span>
                <span className="infoValue">123sd5fg4sd86</span>
              </div>
              <div className="infoItem">
                <span className="infoKey">Sales:</span>
                <span className="infoValue">548</span>
              </div>
              <div className="infoItem">
                <span className="infoKey">Active:</span>
                <span className="infoValue">Yes</span>
              </div>
              <div className="infoItem">
                <span className="infoKey">In Stock:</span>
                <span className="infoValue">No</span>
              </div>
              
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">

            <div className="formLeft">
              <label >Product Name</label>
              <input type="text" placeholder='Bomber Jacket' />

              <label for="">In stock</label>
              <select name="inStock" id="inStock">
                <option value="yes"> Yes</option>
                <option value="no">No</option>
              </select>
              <label for="active">Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>


            <div className="formRight">
              <div className="productUpload">
                <img src="https://i.ibb.co/YZC6n90/coat1.png" alt="" 
                className="uploadIm" />
                <label for="file">
                  <Publish className='publishIcon'/>
                </label>
                <input type="file" id="file" style={{display: "none"}} />
              </div>
              <button className='productButton'>Update</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Product