import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";

function Main() {
    const [name, setName] = useState('')
    const userList = useSelector(state => state.users.list)
    const dispatch = useDispatch()

    console.log(userList)

    const handleUserChange = e => {
        setName(e.target.value)
    }

    const saveUser = () => {
        dispatch(addUser({ user: {name} }))
    }

    return ( 
        <div>
            <div className="mt">
                <label htmlFor="name">Name</label>
                <input onChange={handleUserChange} value={name} type="text" />
            </div>
            <button onClick={saveUser} >Add User</button>

            <div className="mt">
                <p>Users List:</p>
                {userList.map(user => 
                    <p key={user.name}>{user.name}</p>   
                )}
            </div>
        </div>
    );
}

export default Main;