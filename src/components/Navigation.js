import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="/images/logo.png" alt="Logo" />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div className="bg-amber-500 flex rounded-full px-4 py-2">
                <span className="mr-2">10</span>
                <img src="/images/cart.png" alt="Cart" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
