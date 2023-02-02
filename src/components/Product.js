import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);

  const addToCart = (event, product) => {
    event.preventDefault();
    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Link to={`/products/${product._id}`}>
      <div>
        <img src={product.image} alt="pizza topping" />
        <div className="text-center">
          <h3 className="text-lg font-bold py-2">{product.name}</h3>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span>₹ {product.price}</span>
          <button
            disabled={isAdding}
            onClick={(e) => {
              addToCart(e, product);
            }}
            className={`${isAdding ? "bg-green-500" : "bg-amber-500"} rounded-full px-4 py-1 font-bold`}
          >
            ADD{isAdding ? "ED" : ""}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
