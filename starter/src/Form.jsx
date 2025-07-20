import { useState } from "react";
import instance from "./utils.js/custom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {toast} from "react-toastify";
import { useCreateTask } from "./reactQueryCustomHook";
const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  // const queryClient = useQueryClient()
  // const { mutate: createTask, isLoading } = useMutation({
  //   mutationFn: (title) =>
  //     instance.post("/", {
  //       title,
  //     }),
  //   onSuccess: () => {
  //     setNewItemName('')
  //     queryClient.invalidateQueries({
  //       queryKey:['tasks']
  //     })
  //      toast.success('Task Added.');
  //   },
  //   onError: (error) => {
  //     toast.error(error?.response?.data?.msg);
  //   },
  // });

  const {createTask, isLoading} =  useCreateTask()
  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(newItemName);
    // try {
    //   const response = await instance.post(null,{
    //     title: newItemName
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button disabled={isLoading} type="submit" className="btn">
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
