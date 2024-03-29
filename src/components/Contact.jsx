import Zenbil from "../assets/zenbil.png";
import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "", email: "", comment: "" },
  });

  const onSubmit = async (values) => {
    const { error } = await supabase.from("comments").insert(values);
    if (error) {
      toast.error("Not Sent");
    } else {
      toast.success("sent comments");
      reset();
    }
  };

  return (
    <div id="contact">
      <div className="text-white md:h-screen h-full w-full bg-third  flex flex-col items-center justify-center">
        <div className="h-4/5 w-full flex items-center md:flex-row flex-col md:p-10 p-3 justify-center gap-5">
          <div className="md:w-1/4 h-full bg-second rounded-3xl flex flex-col items-center justify-center">
            <img src={Zenbil} alt="" className="w-3/4" />
            <h1 className="text-7xl font-bold">ቅዳሜ ገበያ</h1>
            <h1 className="text-3xl font-bold text-third">Market For All</h1>
          </div>
          <div className="md:w-2/4 w-full h-full bg-second p-5 md:p-0 rounded-3xl flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl">Get In Touch With Us</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 md:w-2/3 items-center"
            >
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
              />
              <input
                {...register("email")}
                type="text"
                placeholder="Email"
                className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
              />
              <textarea
                {...register("comment")}
                placeholder="Comment"
                className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
              ></textarea>
              <input
                type="submit"
                value="SUBMIT"
                className="w-1/3 h-16 bg-first hover:bg-fourth rounded font-bold"
              />
            </form>
          </div>
        </div>
        <div>
          {" "}
          <h1 className="md:text-2xl text-xl ">
            Qidame Gebeya 2024 Addis Ababa, Ethiopia
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
