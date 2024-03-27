import { useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { removeUser } from "./UsersSlice"
import { userOn, userOut } from "../appHeader/AppHeaderSlice"
import { useNavigate } from "react-router-dom"

function UserItem({user}) {
    const [mouseOn,setMouseOn] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const openUser = useMemo(() => {
        return  () => {
					const userOnline = JSON.parse(localStorage.getItem('user'))
					if (userOnline && user.id === userOnline.id) {
						navigate(`/users/${user.id}`)
						return
					}
					const pass = prompt('enter password')
					if (pass == null) return
					if (+pass !== user.password) {
						alert('wrong password')
						return
					}
					dispatch(userOn(user))
					localStorage.setItem('user', JSON.stringify(user))
					navigate(`/users/${user.id}`)
				}
    },[])

    return (
        <div className="user_Item" onMouseLeave={() => {
            setMouseOn(false)
        }} onMouseEnter={() => {
            setMouseOn(true)
        }} onClick={() => {
            openUser()
        }}>
            {mouseOn ? <button onClick={(e) => {
                e.stopPropagation()
                const userOnline = JSON.parse(localStorage.getItem('user'))
                if(userOnline && user.id === userOnline.id) {
                    dispatch(userOut())
                    localStorage.removeItem('user')
                }
                dispatch(removeUser(user.id))
                }}>X</button> : null}
            <div className="img_box"><img src= {`https://xsgames.co/randomusers/assets/avatars/male/${user.id}.jpg`} alt="user img"/></div>
            <div className="user_info">
                <p><span>ID: </span> {user.id}</p>
                <p><span>userName:</span> {user.username}</p>
                <p><span>Full name: </span> {user.name}</p>
                <p><span>email: </span> {user.email}</p>
                <p><span>phone:</span> {user.phone}</p>
            </div>
        </div>
    )
}

export default UserItem