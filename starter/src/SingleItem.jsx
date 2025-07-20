import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "./utils.js/custom";
import { toast } from "react-toastify";
import { useDeleteTask, useEditTask } from "./reactQueryCustomHook";

const SingleItem = ({ item }) => {
  // const queryClient = useQueryClient();
  // const { mutate: editTask } = useMutation({
  //   mutationFn: ({ taskId, isDone }) =>
  //     instance.patch(`/${taskId}`, {
  //       isDone,
  //     }),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["tasks"],
  //     });
  //     toast.success("Edit Succesfully.");
  //   },
  //   onError: (error) => {
  //     toast.error(error?.response?.data?.msg);
  //   },
  // });

  // const { mutate: deleteTask } = useMutation({
  //   mutationFn: ({ taskId }) => instance.delete(`/${taskId}`),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["tasks"],
  //     });
  //     toast.success("Task Deleted Succesfully.");
  //   },
  //   onError: (error) => {
  //     toast.error(error?.response?.data?.msg);
  //   },
  // });


  const {editTask} = useEditTask()
  const {deleteTask}= useDeleteTask()
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() =>
          editTask({
            taskId: item.id,
            isDone: !item.isDone,
          })
        }
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask({ taskId: item.id })}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
