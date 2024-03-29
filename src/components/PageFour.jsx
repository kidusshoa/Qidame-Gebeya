import { useState } from "react";
import { useCarts } from "../contexts/Cart";
import { toast } from "react-toastify";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsCartPlus } from "react-icons/bs";
import Jewelry from "../assets/jewelry.png";
import Bracelets from "../assets/Bracelets.png";
import Necklace from "../assets/Necklace.png";

const PageFour = () => {
  const { addToCart } = useCarts();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const items = [
    { id: 10001, name: "Necklace", price: "499.99", image: Jewelry },
    { id: 10002, name: "Bracelets", price: "139.99", image: Bracelets },
    { id: 10003, name: "Gemston Necklace", price: "244.50", image: Necklace },
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="h-screen bg-third w-full text-white">
        <div className="h-screen w-full p-10">
          <div className="h-1/6 w-full">
            <div className="w-full md:h-1/2 bg-second hover:bg-fourth rounded-xl flex items-center md:p-10 p-5">
              <h1 className="text-4xl font-bold">Discover Jewelries</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-4/5">
            <div>
              <h1 className="text-2xl">{items[currentImageIndex].name}</h1>
              <h1 className="text-2xl">{items[currentImageIndex].price}</h1>
            </div>
            <div className="flex md:flex-row flex-col items-center w-2/3 justify-between h-3/5">
              <GoChevronLeft
                size={100}
                onClick={prevSlide}
                className="hover:scale-150"
              />
              <img src={items[currentImageIndex].image} alt="" />
              <GoChevronRight
                size={100}
                onClick={nextSlide}
                className="hover:scale-150"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  addToCart(items[currentImageIndex]);
                  toast.info("Added to cart");
                }}
                className="w-60 h-20 bg-first hover:bg-fourth rounded-3xl text-2xl font-bold flex flex-row items-center justify-center"
              >
                Add to Cart
                <BsCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
