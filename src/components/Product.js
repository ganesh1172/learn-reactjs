import { Link } from "react-router-dom";

const Product = ({ product }) => {
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
          <button className="rounded-full bg-amber-500 px-4 py-1 font-bold">ADD</button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
