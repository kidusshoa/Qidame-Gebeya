import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { error } = await supabase.auth.signInWithPassword(values);

    if (error) {
      toast.error("invalid credentials");
    } else {
      toast.success("Login Successful");

      navigate("/admin/dashboard");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-third w-full text-white">
        <div className="md:h-screen h-full p-5 w-full md:p-10 gap-5 md:gap-0 flex flex-col items-center">
          <div className="h-1/6 w-full flex flex-col items ">
            <div className="w-full h-1/2 bg-second hover:bg-fourth rounded-xl flex items-center p-10">
              <h1 className="text-4xl font-bold">Login To Admin</h1>
            </div>
          </div>
          <div className="md:w-2/4 w-full h-full p-5 md:p-0 md:h-1/2 bg-second rounded-3xl flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl">Log In To Qidame</h1>
            <form
              className="flex flex-col gap-5 md:w-2/3 items-center "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                {...register("email")}
                type="email"
                placeholder="User Email"
                className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
              />

              <button
                type="submit"
                value="SUBMIT"
                className="w-1/3 h-16 bg-first hover:bg-fourth rounded font-bold"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
