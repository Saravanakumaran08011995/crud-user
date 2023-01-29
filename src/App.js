
import { useEffect, useState } from 'react';
import './App.css';
import { AddUser } from './components/AddUser';
import { Header } from './components/Header';
import { ShowUser } from './components/ShowUser';

function App() {
  const [userslist, setUserslist] = useState( 
     JSON.parse(localStorage.getItem("userslist")) || [] )

  const [user, setUser] = useState({})

  useEffect(()=>{
    localStorage.setItem("userslist",JSON.stringify(userslist))
  }, [userslist])


  return (
    <div className="App">
      <Header/>
      <AddUser userslist={userslist} setUserslist={setUserslist} user={user} setUser={setUser}/>
      <ShowUser userslist={userslist} setUserslist={setUserslist} user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
