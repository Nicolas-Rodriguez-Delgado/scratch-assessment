import React, { useState } from "react";
export default function UserForm(props) {
const editMode = props.userEdit
const prevUser = props.userEdit
  const [state, setState] = useState({
    firstName: editMode ? prevUser.firstName: "",
    lastName: editMode ? prevUser.lastName: "",
    email: editMode ? prevUser.email: "",
    role: editMode ? prevUser.role: "",
    status: editMode ? prevUser.status: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };
  const resetForm = () => {
    setState({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      status: ""
    });
  };
  return (
    <div className={editMode ? "edit-form" : "user-form"}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label>
      <p style={{display: "inline"}}>Role:</p>
      <select name="role" id="role" value={state.role} onChange={handleChange}>
        <option value=""></option>
        <option value="doctor">Doctor</option>
        <option value="Admin">Admin</option>
        <option value="accountant">Accountant</option>
      </select>
      </label>
      <label>
      <p style={{display: "inline"}}>Status:</p>
      <select name="status" id="status" value={state.status} onChange={handleChange}>
        <option value=""></option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      </label>
      <button
        onClick={(event) => {
          props.addUser(event, state, props.index);
          resetForm();
        }
    }
      >
        {editMode ? "Save" : "Add User"}
      </button>
    </div>
  );
}
