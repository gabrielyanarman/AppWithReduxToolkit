import MyButton from "../../UI/myButton/MyButton";
import { useSelector } from "react-redux";
import { selectHeaderStatus, selectUserOn } from "./AppHeaderSlice";
import { useDispatch } from "react-redux"
import UserInfo from './UserInfo'
import './appHeader.css'
import {userOut} from './AppHeaderSlice'
import { Link } from "react-router-dom";

function AppHeader() {
    const headerStatus = useSelector(selectHeaderStatus)
    const userOn = useSelector(selectUserOn)
    const dispatch = useDispatch()

    return (
        <header className="header">
            {headerStatus === 'userOn' ? <UserInfo user={userOn}/> : null }
            <div className="header_btns">
                <Link to='users'><MyButton>Our users</MyButton></Link>
                <Link to='about'><MyButton>about us</MyButton></Link>
                {headerStatus === 'userOn' ? <Link to='users'><MyButton onClick ={() => { 
                        dispatch(userOut());
                        localStorage.removeItem('user')
                }}>Log out</MyButton></Link> : null}
            </div>
        </header>
    )
}

export default AppHeader