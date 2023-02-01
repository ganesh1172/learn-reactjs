import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const history = useNavigate();

  useEffect(() => {
    fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params._id]);

  return (
    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold" onClick={() => history("/")}>
        Back
      </button>
      <div className="flex">
        <img src={product.image} alt="pizza"></img>
        <div className="ml-12">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">$ {product.price}</div>
          <button className="bg-amber-500 py-1 px-8 rounded-full font-bold mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
