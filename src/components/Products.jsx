import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { supabase } from "../lib/supabase";
import { Oval } from "react-loader-spinner";
import { useCarts } from "../contexts/Cart";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCarts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await supabase.from("products").select();
    setProducts(data);
    setLoading(false);
  };

  return (
    <div>
      <div className="h-full min-h-screen bg-third w-full text-white">
        <div className="h-full w-full p-10 flex flex-col gap-5 ">
          <div className="w-full h-20 bg-second hover:bg-fourth rounded-xl flex justify-between items-center p-10 ">
            <h1 className="text-4xl font-bold">Products</h1>
            <Link
              to="/cart"
              className="px-8 py-4 bg-first hover:bg-third rounded p-2 font-bold"
            >
              Cart
            </Link>
          </div>
          {loading ? (
            <div className="flex items-center justify-center py-20 ">
              <Oval visible={true} height="80" width="80" color="#fff" />
            </div>
          ) : (
            <div className=" grid md:grid-cols-3 gap-5 h-nine">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full h-full flex items-center flex-row"
                >
                  <img src={product.image} alt="" className="w-3/4 h-60" />
                  <div className="text-center flex items-center flex-col justify-center gap-1">
                    <h1>{product.name}</h1>
                    <h1>{product.price}</h1>
                    <button
                      onClick={() => {
                        addToCart(product);
                        toast.info("Added to cart");
                      }}
                      className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                    >
                      <BsCartPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
