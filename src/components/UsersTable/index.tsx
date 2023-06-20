import { useDispatch } from "react-redux";
import { User } from "../../@types";
import { addUser, removeUser } from "../../features/users/usersSlice";
import { SyntheticEvent, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type TableProps = {
  users: User[];
};

const UsersTable = ({ users }: TableProps) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User>();

  const dispatch = useDispatch();

  const handleRemoveUser = (user: User) => {
    setUser(user);
    dispatch(removeUser(user.id));
    setOpen(true);
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(addUser(user));
    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        DESFAZER
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Empresa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <button onClick={() => handleRemoveUser(user)}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Usuário removido"
        action={action}
      />
    </div>
  );
};

export default UsersTable;
