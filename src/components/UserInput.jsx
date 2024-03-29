import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import { useForm } from "react-hook-form";

export const UserInput = ({ isOpen, onClose, summary, carts }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = async (values) => {
    const { error } = await supabase
      .from("orders")
      .insert({ ...values, products: carts, total_amount: summary.total });
    if (error) {
      toast.error("Not Sent");
    } else {
      toast.success("sent orders successfully");
      reset();
      onClose();
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-second text-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  Complete Your Purchase
                </Dialog.Title>
                <div className="mt-2">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5 w-full items-center"
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
                    <input
                      {...register("address")}
                      type="text"
                      placeholder="Address"
                      className="rounded border-orangei transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:orangeii bg-first text-xl outline-none"
                    />

                    <input
                      type="submit"
                      value="SUBMIT"
                      className="w-1/3 h-16 bg-first hover:bg-fourth rounded font-bold"
                    />
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
