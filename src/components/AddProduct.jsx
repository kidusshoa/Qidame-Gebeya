import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "", price: "", image: "" },
  });
  const onSubmit = async (values) => {
    const { error } = await supabase.from("products").insert(values);
    if (error) {
      toast.error("Failed to insert");
    } else {
      toast.success("Added products");
      reset();
    }
  };
  return (
    <div className="md:w-3/4 w-full  md:h-1/4 h-full bg-second rounded-3xl p-2 md:p-0 flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Add Products</h1>
      <form
        className="flex md:flex-row flex-col p-2 md:p-0 gap-5 w-2/3 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Name of Product"
          className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
        />
        <input
          {...register("price")}
          type="text"
          placeholder="Price"
          className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
        />
        <input
          {...register("image")}
          type="text"
          placeholder="Image Source"
          className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
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

export default AddProduct;
