import './App.css';
import { useState } from 'react';
import UserForm from './UserForm'
import UserList from './UserList';
import logo from './images/logo.png'

function App() {
  let initialState = []
  const [list, setUsers] = useState(initialState)
  let emails = list.map(item => item.email);

  const addUser = (event, newUser) => {
    event.preventDefault()
    const newUserList = [...list]
    newUserList.push(newUser)
    if(emails.indexOf(newUser.email) !== -1){
      return alert("email already exists")
    }
    setUsers(newUserList);
  }
  const deleteUser = (e, index) => {
    e.preventDefault()
    const deleteOne =  [...list]
    deleteOne.splice(index, 1)
    setUsers(deleteOne)
  }
  const editUser = (e, index) => {
    e.preventDefault()
    const userList = [...list];
    const newList = userList.map(
      (el, i) => i === index ? { ...el, edit: true }: el
    )
    setUsers(newList)
  }
  const saveForm = (event, user, index) => {
    const userCopyList = [...list];
    const userEditList = userCopyList.map(
      (el, i) => i === index ? user : el
    )
    setUsers(userEditList)
    console.log(user)
  }

  return (
    <div>
      <img src={logo} />
      <h1>Users:</h1>
      <UserList users={list} deleteUser={deleteUser} editUser={editUser} saveForm={saveForm} />
      <h1>Add New User:</h1>
      <UserForm addUser={addUser}/>
    </div>
  );
}

export default App;
