import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slice";
import { ClockLoader } from "react-spinners";

const Home = () => {
  const users = useSelector((state) => state.myUsersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("users", users);

  return (
    <div>
      <h2 className="font-bold text-violet-900">
        Here is my Users list {users.isLoading && <ClockLoader />}
      </h2>
      <div className="flex justify-center items-center w-full gap-4 flex-wrap">
        {Array.isArray(users.myUsers) &&
          users.myUsers.map((user) => {
            return (
              <div
                className="border flex flex-col justify-center items-start p-3 mt-4 bg-gray-600 text-white rounded-lg"
                key={user.id}
              >
                <h1 className="font-bold"><span className="text-black">Name:</span> {user.name}</h1>
                <h3><span className="text-black font-bold">Company Name:</span> {user.company.name}</h3>
                <p><span className="text-black font-bold">Email:</span> {user.email}</p>
                <p><span className="text-black font-bold">Phone No.:</span> {user.phone}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
