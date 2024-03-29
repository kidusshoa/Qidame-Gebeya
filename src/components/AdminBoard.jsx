import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import AddAdmin from "./AddAdmin";

const AdminBoard = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <div className="h-full md:h-screen bg-third ">
      <div className="md:h-screen h-full  w-full text-white">
        <div className="md:h-screen  w-full md:p-10 p-4 flex gap-10 flex-col items-center">
          <div className="h-one w-full flex flex-col items ">
            <div className="w-full h-full bg-second hover:bg-fourth rounded-xl flex md:flex-row flex-col gap-5 md:gap-0 md:justify-between items-center p-10">
              <h1 className="text-4xl font-bold">
                Qidame Gebeya Admin Dashboard
              </h1>

              <button
                onClick={back}
                type="submit"
                value="SUBMIT"
                className="md:w-1/6 h-16 bg-first hover:bg-third rounded p-2 font-bold"
              >
                Back to Home
              </button>
            </div>
          </div>
          <AddProduct />
          <DeleteProduct />
          <AddAdmin />
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
