import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/userSlice";

function Main() {
    const [name, setName] = useState('')
    const userList = useSelector(state => state.users.list)
    const dispatch = useDispatch()

    const handleUserChange = e => {
        setName(e.target.value)
    }

    const saveUser = () => {
        dispatch(addUser({ user: {name} }))
        setName('')
    }

    const deleteUser = userName => {
        console.log(userName)
        dispatch(removeUser({ userName }))
    }

    return ( 
        <div style={{ marginLeft: '2em' }}>
            <div className="mt">
                <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
                <input onChange={handleUserChange} value={name} type="text" style={{ marginLeft: '1em' }} />
            </div>
            <button onClick={saveUser} style={{ marginTop: '1em', backgroundColor: 'rgba(0, 100, 200, 0.9)', padding: '0.5em', color: 'white' }}>Add User</button>

            <div className="mt">
                <p>Users List:</p>
                <div>
                    {userList.map(user => 
                        <div key={user.name} style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold' }}>{user.name}</p>
                            <button 
                                onClick={() => deleteUser(user.name)}
                                style={{ marginLeft: '2em', width: '30px', height: '30px', backgroundColor: 'rgba(200, 20, 0, 0.8)', color: 'white' }}>
                                    x
                            </button>
                        </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Main;