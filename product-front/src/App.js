import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./Components/products";
import CreateProduct from "./Components/createProduct";
import UpdateProduct from "./Components/updateProduct";
import Navbar from "./Components/navbar";
import ProductDetails from "./Components/productDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/create" element={<CreateProduct />}></Route>
          <Route path="/update/:id" element={<UpdateProduct />}></Route>
          <Route
            path="/productDetails/:id"
            element={<ProductDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
