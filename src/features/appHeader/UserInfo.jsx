
import React from 'react';
import './appHeader.css'
import { useNavigate } from 'react-router-dom';

const UserInfo = ({user}) => {
    const navigate = useNavigate()
    return (
        <div className='header_user_info' onClick={() => {navigate(`/users/${user.id}`)}}>
            <div className="box">
                <img src= {`https://xsgames.co/randomusers/assets/avatars/male/${user.id}.jpg`} alt="user img"/>
            </div>
            <div>
                <span>{user.name}</span>
            </div>
        </div>
    );
}

export default UserInfo