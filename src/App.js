import React, { useEffect } from 'react';
import './App.css';
import AppHeader from './features/appHeader/AppHeader';
import { useDispatch, useSelector } from 'react-redux';
import { addAllUsersAsync } from './features/users/UsersSlice';
import Users from './features/users/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import UserPageById from './pages/UserPageByID';
import { userOn } from './features/appHeader/AppHeaderSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addAllUsersAsync())
  },[])

  useEffect(() => {
	const user = JSON.parse(localStorage.getItem('user'))
	if (user) dispatch(userOn(user))
  },[])

  return (
		<div className='App'>
			<BrowserRouter>
				<AppHeader />
				<Routes>
					<Route exact={true} index element={<Users />} />
					<Route exact={true} path='about' element={<About />} />
					<Route exact={true} path='users' element={<Users />} />
					<Route exact={true} path='*' element={<Error />} />
					<Route exact={true} path='users/:id' element={<UserPageById />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
  }

export default App;

/* 
<AppHeader />
      <Users />
//<UserPage />
// 

const todosStatus = useSelector(selectTodosStatus)
 useEffect(() => {
    dispatch(addAllTodosAsync())
  },[])

{todosStatus == 'loaded' ? <Todos /> : <h1 style={{margin: '110px 30px'}}>Loading...</h1>} */