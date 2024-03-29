import { BsCartPlus } from "react-icons/bs";
import { useState } from "react";
import { useCarts } from "../contexts/Cart";
import { toast } from "react-toastify";
import Watch from "../assets/Watch1.png";
import Watch2 from "../assets/Watch2.png";
import Jacket3 from "../assets/J4.png";
import Jacket5 from "../assets/J5.png";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const PageTwo = () => {
  const { addToCart } = useCarts();

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1016, name: "Varsity", price: "52.99", image: Jacket3 },
    { id: 1017, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1018, name: "Varsity", price: "66.99", image: Jacket5 },
    { id: 1019, name: "Rolex", price: "189.99", image: Watch2 },
    { id: 1020, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1021, name: "Varsity", price: "66.99", image: Jacket5 },
    { id: 1022, name: "Rolex", price: "189.99", image: Watch2 },
  ];
  const slides2 = [
    { id: 1029, name: "Rolex", price: "189.99", image: Watch2 },
    { id: 1023, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1024, name: "Varsity", price: "66.99", image: Jacket5 },
    { id: 1025, name: "Rolex", price: "189.99", image: Watch2 },
    { id: 1026, name: "Varsity", price: "52.99", image: Jacket3 },
    { id: 1027, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1028, name: "Varsity", price: "66.99", image: Jacket5 },
  ];
  const slides3 = [
    { id: 1030, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1031, name: "Varsity", price: "66.99", image: Jacket5 },
    { id: 1032, name: "Rolex", price: "189.99", image: Watch2 },
    { id: 1033, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1034, name: "Varsity", price: "66.99", image: Jacket5 },
    { id: 1035, name: "Rolex", price: "189.99", image: Watch2 },
    { id: 1036, name: "Varsity", price: "52.99", image: Jacket3 },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const Products = [
    { id: 1001, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1002, name: "Varsity", price: "52.99", image: Jacket3 },
    { id: 1003, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1004, name: "Varsity", price: "66.99", image: Jacket5 },
    { id: 1005, name: "Rolex", price: "189.99", image: Watch2 },
  ];
  const Products2 = [
    { id: 1006, name: "Varsity", price: "66.99", image: Jacket5 },
    { id: 1007, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1008, name: "Varsity", price: "52.99", image: Jacket3 },
    { id: 1009, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1010, name: "Rolex", price: "189.99", image: Watch2 },
  ];
  const Products3 = [
    { id: 1011, name: "Rolex", price: "189.99", image: Watch2 },
    { id: 1012, name: "Varsity", price: "52.99", image: Jacket3 },
    { id: 1013, name: "MG-Master", price: "152.99", image: Watch },
    { id: 1014, name: "Varsity", price: "66.99", image: Jacket5 },
    { id: 1015, name: "Rolex", price: "189.99", image: Watch2 },
  ];

  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % Products.length);
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % Products2.length);
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % Products3.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? Products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="md:h-screen h-full bg-third w-full text-white">
        <div className="md:h-1/2 h-full w-full p-10">
          <div className="w-full md:h-1/5  bg-second hover:bg-fourth rounded-xl flex items-center p-10 ">
            <h1 className="text-4xl font-bold">New Products</h1>
          </div>

          <div className="flex md:flex-row flex-col items-center justify-between h-4/5">
            <GoChevronLeft
              className="hover:scale-150"
              size={100}
              onClick={prevSlide}
            />

            <div className="md:w-1/3 h-full flex items-center flex-row">
              <img
                src={slides[currentIndex].image}
                alt=""
                className="w-3/4 h-60"
              />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{slides[currentIndex].name}</h1>
                <h1>{slides[currentIndex].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(slides[currentIndex]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>

            <div className="md:w-1/3 h-full flex items-center flex-row">
              <img
                src={slides2[currentIndex].image}
                alt=""
                className="w-3/4 h-60"
              />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{slides2[currentIndex].name}</h1>
                <h1>{slides2[currentIndex].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(slides2[currentIndex]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>
            <div className="md:w-1/3 h-full flex items-center flex-row">
              <img
                src={slides3[currentIndex].image}
                alt=""
                className="w-3/4 h-60"
              />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{slides3[currentIndex].name}</h1>
                <h1>{slides3[currentIndex].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(slides3[currentIndex]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>

            <GoChevronRight
              size={100}
              onClick={nextSlide}
              className="hover:scale-150"
            />
          </div>
        </div>
        <div className="h-1/2 w-full p-10">
          <div className="w-full h-1/5 bg-second hover:bg-fourth rounded-xl flex items-center p-10">
            <h1 className="text-4xl font-bold">Standard Items</h1>
          </div>

          <div className="flex md:flex-row flex-col items-center justify-between h-4/5">
            <GoChevronLeft
              className="hover:scale-150"
              size={100}
              onClick={prevProduct}
            />

            <div className="md:w-1/3 h-full flex items-center flex-row">
              <img
                src={Products[currentProductIndex].image}
                alt=""
                className="w-3/4 h-60"
              />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{Products[currentProductIndex].name}</h1>
                <h1>{Products[currentProductIndex].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(Products[currentProductIndex]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>
            <div className="md:w-1/3 h-full flex items-center flex-row">
              <img
                src={Products2[currentProductIndex].image}
                alt=""
                className="w-3/4 h-60"
              />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{Products2[currentProductIndex].name}</h1>
                <h1>{Products2[currentProductIndex].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(Products2[currentProductIndex]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>
            <div className="md:w-1/3 h-full flex items-center flex-row">
              <img
                src={Products3[currentProductIndex].image}
                alt=""
                className="w-3/4 h-60"
              />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{Products3[currentProductIndex].name}</h1>
                <h1>{Products3[currentProductIndex].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(Products[currentProductIndex]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>

            <GoChevronRight
              size={100}
              onClick={nextProduct}
              className="hover:scale-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
