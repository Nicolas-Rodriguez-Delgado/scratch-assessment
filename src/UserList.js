import User from "./User";
import UserForm from "./UserForm";

export default function UserList(props) {
  return (
    <>
      {props.users.length > 0 ? (
        props.users.map((user, index) => {
          return user.edit ? (
            <UserForm userEdit={user} addUser={props.saveForm} index={index}/>
          ) : (
            <User
              user={user}
              index={index}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })
      ) : (
        <div>"No users found"</div>
      )}
    </>
  );
}
