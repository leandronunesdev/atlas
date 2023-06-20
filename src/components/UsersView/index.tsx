import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/users/usersSelectors";
import axios from "axios";
import { saveUsers } from "../../features/users/usersSlice";
import UsersTable from "../UsersTable";
import { useEffect } from "react";

const UsersView = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  const handleFetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(saveUsers(response.data));
      return;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={() => handleFetchUsers()}>Fetch users</button>
      {users.length > 0 && <UsersTable users={users} />}
    </div>
  );
};

export default UsersView;
