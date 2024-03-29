import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Basic from "../assets/Screenshot_from_2024-03-08_11-45-27-removebg-preview(1).png";

const About = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <div className="min-h-full md:h-screen bg-third w-full flex flex-col items-center justify-center p-2">
      <div className="bg-third md:h-5/6  h-full w-full flex-col md:flex-row flex items-center md:gap-10 gap-5 justify-center ">
        <div className="md:w-1/3 w-full h-3/4 bg-second flex items-center flex-col justify-center rounded-2xl hover:bg-fifth">
          <div className="flex justify-center">
            <img src={Basic} alt="" className="w-2/3" />
          </div>
          <div className="flex flex-row justify-between w-1/3">
            <FaFacebookF size={30} />
            <FaXTwitter size={30} />
            <BsInstagram size={30} />
          </div>
        </div>
        <div className="md:w-1/3 md:h-3/4 bg-second flex items-center flex-col justify-center rounded-2xl text-first hover:bg-fifth">
          <h3 className="text-center w-3/4 text-3xl ">
            Welcome to Qidame Gebeya, your premier destination for online
            shopping in Ethiopia. At Qidame Gebeya, we strive to provide a
            seamless and enjoyable E-commerce experience, connecting buyers and
            sellers across the country. Our platform is dedicated to offering a
            wide range of products, convenient shopping features, and excellent
            customer service.
          </h3>
        </div>
      </div>
      <div className="h-1/4 w-1/2 p-4">
        <button
          onClick={back}
          type="submit"
          value="SUBMIT"
          className="md:w-1/6 h-20 bg-first hover:bg-second text-white rounded p-2 font-bold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default About;
