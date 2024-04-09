import Jordan from "../assets/jordan10.png";
import { useCarts } from "../contexts/Cart";
import { toast } from "react-toastify";
import BG from "../assets/bgg.png";

const PageThree = () => {
  const Products = {
    id: 1037,
    name: "Air Jordan 10",
    price: "199.99",
    image: Jordan,
  };

  const { addToCart } = useCarts();

  return (
    <div>
      <div
        className=" flex justify-between  flex-col h-screen w-full bg-cover inset-0 bg-center bg-no-repeat bg-fixed text-white p-5"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="md:h-1/6 md:w-1/3 flex items-center justify-center">
          <div className=" text-6xl h-full flex items-center text-left justify-center p-10 w-full">
            <h1 className=" hover:font-bold">
              Brand New <br /> {Products.name} <br /> Westbrook Edition
            </h1>
          </div>
        </div>
        <div className="h-3/6 w-full flex items-center justify-center">
          <img src={Products.image} alt="" className="md:w-1/2" />
        </div>
        <div className="h-1/6 w-full flex justify-center">
          <div
            onClick={() => {
              addToCart(Products);
              toast.info("Added to cart");
            }}
            className="md:w-1/3 md:h-3/5 bg-second hover:bg-fourth rounded-xl flex items-center justify-center text-5xl font-bold"
          >
            <h1>For Only {Products.price} ETB</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
