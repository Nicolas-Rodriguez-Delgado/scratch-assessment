export default function User(props) {
  return (
    <>
      <div className="single-user">
        <span>{props.index + 1}</span>
        <li key={props.user.id}>{props.user.firstName}</li>
        <li key={props.user.id}>{props.user.lastName}</li>
        <li key={props.user.id}>{props.user.email}</li>
        <li key={props.user.id}>{props.user.role}</li>
        <li key={props.user.id}>{props.user.status}</li>
        <button onClick={(event) => props.deleteUser(event, props.index)}>
          Delete
        </button>
        <button onClick={(event) => props.editUser(event, props.index)}>Edit</button>
      </div>
    </>
  );
}
