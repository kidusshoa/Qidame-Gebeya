import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import { useForm } from "react-hook-form";

const DeleteProduct = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: "", price: "", image: "" },
  });
  const deleteProducts = async (items) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .match({ name: items.name, price: items.price });
    if (error) {
      toast.error("Failed to delete product");
    } else {
      toast.success("Deleted a products");
      reset();
    }
  };
  return (
    <div className="md:w-3/4 w-full h-1/4 bg-second rounded-3xl flex flex-col items-center p-2 md:p-0 justify-center gap-5">
      <h1 className="text-3xl">Delete Products</h1>
      <form
        className="flex md:flex-row flex-col gap-5 md:w-2/3 items-center"
        onSubmit={handleSubmit(deleteProducts)}
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

        <button
          type="submit"
          value="SUBMIT"
          className="w-1/3 h-16 bg-first hover:bg-fourth rounded font-bold"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteProduct;
