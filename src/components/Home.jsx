import PageTwo from "./PageTwo.jsx";
import { BsCartPlus } from "react-icons/bs";
import { toast } from "react-toastify";
import { useCarts } from "../contexts/Cart";
import { supabase } from "../lib/supabase";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageThree from "./PageThree.jsx";
import PageFour from "./PageFour.jsx";
import Contact from "./Contact.jsx";
import Logo from "../assets/Screenshot_from_2024-03-08_11-43-56-removebg-preview.png";
import SearchIcon from "../assets/search.png";
import ShoppingIcon from "../assets/shoppingBag.png";
import Main from "../assets/home.png";
import Abouticon from "../assets/about.png";
import Carticon from "../assets/cart.png";
import Contacticon from "../assets/Contact.png";
import Adminicon from "../assets/admin.png";
import JacketMain from "../assets/J3.png";
import WinterJ from "../assets/WinterJacket1.png";
import E1 from "../assets/E1.png";
import E2 from "../assets/E2.png";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import JacketOne from "../assets/J1.png";
import Jacket2 from "../assets/J2.png";
import Jacket3 from "../assets/J4.png";

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <div>No results found</div>;
  }
  const { addToCart } = useCarts();
  return (
    <div className="search-results ">
      {results.map((result) => (
        <div
          key={result.id}
          className="bg-fourth w-full md:h-80 h-full flex flex-row justify-center"
        >
          <div className="w-1/2">
            <img src={result.image} alt="" className="w-2/4 h-32" />
          </div>
          <div className="text-left flex flex-col w-1/2 gap-1">
            <h1>{result.name}</h1>
            <h1>{result.price} ETB</h1>
            <button
              onClick={() => {
                addToCart(result);
                toast.info("Added to cart");
              }}
              className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
            >
              <BsCartPlus size={30} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

const Home = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "", price: "" },
  });
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchProducts = async (values) => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("name", values.name);
    if (error) {
      toast.error("failed to search");
    } else {
      if (data && data.length > 0) {
        toast.success("searching");
        reset();
        setSearchResults(data);
        setShowResults(true);
      } else {
        setShowResults(false);
        console.log(error);
      }
    }
  };

  const varsities = [
    { id: 10006, name: "Varsity", price: "52.65", image: JacketOne },
    { id: 10007, name: "Varsity+", price: "52.65", image: Jacket2 },
    { id: 10007, name: "V Cotton", price: "70.00", image: Jacket3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1038, name: "Varsity", price: "52.99", image: JacketMain },
    { id: 1039, name: "Winter-J", price: "89.00", image: WinterJ },
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const electronics = [
    { id: 10004, name: "Legion T5", price: "499.50", image: E1 },
    { id: 10005, name: "PS5 Headset", price: "129.00", image: E2 },
  ];

  const { addToCart } = useCarts();

  return (
    <div>
      <div className="w-full bg-third md:h-screen h-full flex items-center text-left text-white gap-3 md:flex-row flex-col p-3 justify-between ">
        <div className="bg-second p-2 md:p-0 md:w-1/6 w-full h-full my-auto rounded-xl space-y-10">
          <div className="bg-second  h-1/3 flex justify-center items-center">
            <img src={Logo} alt="" className="h-52 w-40" />
          </div>
          <div>
            <div className="flex flex-row mx-auto gap-2 items-center justify-center p-2 ">
              <img src={Main} alt="" className="h-7 w-7 " />
              <h3 className="w-1/2 text-2xl hover:font-bold">Home</h3>
            </div>
            <div className="flex flex-row mx-auto gap-2 items-center justify-center p-2 ">
              <img src={ShoppingIcon} alt="" className="h-7 w-7" />
              <h3 className="w-1/2 text-2xl hover:font-bold">
                <Link to="/product">Products</Link>
              </h3>
            </div>
            <div className="flex flex-row mx-auto gap-2 items-center justify-center p-2 ">
              <img src={Carticon} alt="" className="h-7 w-7" />
              <h3 className="w-1/2 text-2xl hover:font-bold">
                <Link to="/cart">Cart</Link>
              </h3>
            </div>
            <div className="flex flex-row mx-auto gap-2 items-center justify-center p-2">
              <img src={Abouticon} alt="" className="h-7 w-7" />
              <h3 className="w-1/2 text-2xl hover:font-bold">
                <Link to="/about">About</Link>
              </h3>
            </div>
            <div className="flex flex-row mx-auto gap-2 items-center justify-center p-2">
              <img src={Contacticon} alt="" className="h-7 w-7" />
              <h3 className="w-1/2 text-2xl hover:font-bold">
                <a href="#contact">Contact</a>
              </h3>
            </div>
            <div className="flex flex-row mx-auto gap-2 items-center justify-center p-2">
              <img src={Adminicon} alt="" className="h-7 w-7" />
              <h3 className="w-1/2 text-2xl hover:font-bold">
                <Link to="/admin">Admin</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className=" md:w-3/6 w-full flex items-center justify-center gap-3 my-auto flex-col">
          <div className=" flex items-center w-full flex-grow text-center justify-center  flex-col p-3">
            <div className="w-full flex md:flex-row flex-col items-center mx-auto justify-between p-3 h-3/5">
              <GoChevronLeft
                className="md:hover:scale-150 "
                size={100}
                onClick={prevSlide}
              />
              <img src={slides[currentIndex].image} alt="" className=" " />
              <GoChevronRight
                size={100}
                className="md:hover:scale-150"
                onClick={nextSlide}
              />
            </div>
            <div>
              <h1 className="text-2xl">{slides[currentIndex].name}</h1>
              <h1 className="text-2xl">{slides[currentIndex].price} ETB</h1>
            </div>
            <div className="p-2">
              <button
                onClick={() => {
                  addToCart(slides[currentIndex]);
                  toast.info("Added to cart");
                }}
                className="w-32 h-18 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
              >
                <BsCartPlus size={50} />
              </button>
            </div>
          </div>
          <div className="w-full rounded-xl bg-second h-1/5 flex md:flex-row flex-col gap-2">
            <div className=" md:w-1/3 h-full flex flex-row ">
              <img src={varsities[0].image} alt="" className="w-2/4 h-40" />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{varsities[0].name}</h1>
                <h1>{varsities[0].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(varsities[0]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>
            <div className="md:w-1/3 h-full flex flex-row">
              <img src={varsities[1].image} alt="" className="w-2/4 h-40" />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{varsities[1].name}</h1>
                <h1>{varsities[1].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(varsities[1]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>
            <div className="md:w-1/3 h-full flex flex-row">
              <img src={varsities[2].image} alt="" className="w-2/4 h-40" />
              <div className="text-center flex items-center flex-col justify-center gap-1">
                <h1>{varsities[2].name}</h1>
                <h1>{varsities[2].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(varsities[2]);
                    toast.info("Added to cart");
                  }}
                  className="w-20 h-10 bg-first hover:bg-fourth rounded-3xl font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-2/6 h-full flex flex-col p-2 gap-2 ">
          <div className="h-60 ">
            <form
              className="h-20 bg-first rounded flex items-center justify-between p-2"
              onSubmit={handleSubmit(searchProducts)}
            >
              <input
                {...register("name")}
                type="text"
                className="w-5/6 h-5/6 bg-first text-3xl outline-none"
              />
              <button
                type="submit"
                className="bg-transparent border-none"
                onClick={() => setShowResults(!showResults)}
              >
                <img src={SearchIcon} alt="" className="h-14 w-14" />
              </button>
            </form>
            {showResults && <SearchResults results={searchResults} />}
          </div>
          <div className="h-5/6 bg-second rounded-xl items-center justify-between p-10 ">
            <div className="h-1/2 flex flex-row">
              <div className="w-1/2 flex flex-col items-center gap-1 p-2">
                <div>
                  <h1>Lenovo</h1>
                  <h1>{electronics[0].name}</h1>
                  <h1>Ryzen 7</h1>
                  <h1>Ram 16GB</h1>
                  <h1>SSD 512GB</h1>
                </div>
                <h1 className="text-3xl">{electronics[0].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(electronics[0]);
                    toast.info("Added to cart");
                  }}
                  className="w-40 h-20 bg-first hover:bg-fourth rounded-full font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={50} />
                </button>
              </div>
              <div className="w-1/2">
                <img
                  src={electronics[0].image}
                  alt=""
                  className="w-full h-64"
                />
              </div>
            </div>
            <div className="h-1/2 flex flex-row">
              <div className="w-1/2 flex flex-col items-center gap-1 p-2">
                <div>
                  <h1>Sony</h1>
                  <h1>{electronics[1].name}</h1>
                  <h1>3D Wireless</h1>
                  <h1>DualSense</h1>
                </div>
                <h1 className="text-3xl">{electronics[1].price} ETB</h1>
                <button
                  onClick={() => {
                    addToCart(electronics[1]);
                    toast.info("Added to cart");
                  }}
                  className="w-40 h-20 bg-first hover:bg-fourth rounded-full font-bold flex items-center justify-center"
                >
                  <BsCartPlus size={50} />
                </button>
              </div>
              <div className="w-1/2">
                <img
                  src={electronics[1].image}
                  alt=""
                  className="w-full h-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageTwo />

      <PageThree />
      <PageFour />
      <Contact />
    </div>
  );
};

export default Home;
