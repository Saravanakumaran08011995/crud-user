

export const ShowUser = ({userslist,setUserslist, user, setUser}) => {

    const handleDelete = (id)=>{
        const updatedUsers = userslist.filter((data)=>(data.id !== id))
        setUserslist(updatedUsers)
    }

    const handleEdit = (id)=>{
        const selectedUser = userslist.find(data => data.id === id)
        setUser(selectedUser)
    }
 
  return (
    <section className="showUser">
        <div className="head">
            <div>
                <span className="title">Total Users</span>
                <span className="count">{userslist.length}</span>
            </div>
            <button onClick={()=>setUserslist([])} className="clearAll">Delete All Users</button>
        </div>
        <ul>
            {userslist.map((data)=>(
                <li key={data.id}>
                    <p>
                        <span className="userDetails">{data.name}</span>
                        <span className="userDetails">{data.email}</span>
                        <span className="userDetails">{data.degree}</span>
                        <span className="userDetails">{data.language}</span>
                        <span className="userDetails">{data.experience}</span>
                    </p>
                        <i onClick={()=>handleEdit(data.id)} className="bi bi-pencil-square"></i>
                        <i onClick={()=>handleDelete(data.id)} className="bi bi-trash"></i>
                </li>
                ))}
            
        </ul>
    </section>
  )
}
