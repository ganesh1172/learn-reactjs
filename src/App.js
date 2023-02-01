import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/products/:_id" exact element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
