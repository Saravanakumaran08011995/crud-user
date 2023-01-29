

export const AddUser = ({userslist,setUserslist, user, setUser}) => {

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(user.id){
      const updatedUser = userslist.map((data)=>(
        data.id == user.id ? {id:user.id, name:user.name, email:user.email, degree:user.degree, language: user.language, experience:user.experience} : data
      ));
      setUserslist(updatedUser)
      setUser({})
    }else{
      const newUser = {
        id : Math.floor(Math.random()*10000),
        name : event.target[0].value,
        email : event.target[1].value,
        degree : event.target[2].value,
        language : event.target[3].value,
        experience : event.target[4].value
      }
      setUserslist([...userslist,newUser])
      setUser({})
    }
  
  }
  
  return (
    <section className="addUser">
        <form onSubmit={handleSubmit}>
            <input type="text" name="userName" id="userName" autoComplete="off" placeholder="Name" value={user.name || ""} onChange={e => setUser({...user, name: e.target.value})}/>
            <input type="email" name="userEmail" id="userEmail" autoComplete="off" placeholder="Email" value={user.email || ""}onChange={e => setUser({...user, email: e.target.value})}/>
            <input type="text" name="userDegree" id="userDegree" autoComplete="off" placeholder="Degree" value={user.degree || ""} onChange={e => setUser({...user, degree: e.target.value})}/>
            <input type="text" name="userProgrammingLanguage" id="userProgrammingLanguage" placeholder="Programming Language" value={user.language || ""} onChange={e => setUser({...user, language: e.target.value})}/>
            <input type="text" name="userExperience" id="userExperience" autoComplete="off" placeholder="Years of Experience" value={user.experience || ""} onChange={e => setUser({...user, experience: e.target.value})}/>
            <button type="submit">{ user.id ? "Update" : "Add" }</button>
        </form>
    
    </section>
  )
}
