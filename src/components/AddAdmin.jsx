import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const addAdmin = async (values) => {
    console.log(values);
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    if (error) {
      toast.error("Failed to add admin");
      console.log(error);
    } else {
      toast.success("Added an admin");
      reset();
    }
  };

  return (
    <div className="md:w-3/4 w-full h-1/4 bg-second rounded-3xl p-2 md:p-0 flex flex-col items-center  justify-center gap-5">
      <h1 className="text-3xl">Add Another Admin</h1>
      <form
        className="flex md:flex-row flex-col w-full gap-5 md:w-2/3 items-center "
        onSubmit={handleSubmit(addAdmin)}
      >
        <input
          {...register("email")}
          type="text"
          placeholder="email"
          className="rounded border-orangei transition:0.3s p-3 w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
        />
        <input
          {...register("password")}
          type="text"
          placeholder="Password"
          className="rounded border-orangei transition:0.3s p-3 w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
        />

        <button
          type="submit"
          value="SUBMIT"
          className="w-1/3 h-16 bg-first hover:bg-fourth rounded font-bold"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddAdmin;
