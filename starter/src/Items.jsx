import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import instance from "./utils.js/custom";
import { useFetchTasks } from "./reactQueryCustomHook";

const Items = () => {
//   const { isLoading, isError, error,
//     data } = useQuery({
//     queryKey: ["tasks"],
//     queryFn: async () => {
//       const response =await instance.get("")
//       return response.data.taskList
//     },
//   });

const {isLoading, isError, error, data
} = useFetchTasks('/')

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if(isError)  return <p style={{ marginTop: "1rem" }}>{error.message}</p>;

  return (
    <div className="items">
      {data.taskList?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
