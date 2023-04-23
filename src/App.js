import {
  BrowserRouter as Router,
  RouterProvider,
  Redirect,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import "./app.scss";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {

  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin

  console.log(admin)
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/users" element={<UserList />}/>
            <Route path="/newUser" element={<NewUser />}/>
            <Route path="/user/:userId" element={<User />}/>
            <Route path="/newProduct" element={<NewProduct />}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/product/:productId" element={<Product />}/>
          </Routes>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
