import { useSelector } from "react-redux";
import { selectUsers, selectUsersStatus } from "./UsersSlice";
import UserItem from "./UserItem";
import './Users.css'
import Loader from "../../UI/myLoader/Loader.jsx";

const Users = () => {
    const users = useSelector(selectUsers)
    const usersStatus = useSelector(selectUsersStatus)

    return (
			<div className="users_box">
				{usersStatus === 'loading' ? (
					<Loader />
				) : (
					<>
						<h1 className='users_header'>
							Our Users ({users.length}), user password equals ID multiplied by
							a thousand
						</h1>
						<div className='users_list'>
							{users.map(user => {
								return <UserItem user={user} key={user.id} />
							})}
						</div>
					</>
				)}
			</div>
		)
}

export default Users;
