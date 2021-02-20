import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from '../src/components/navigation/Navigation';
import Home from '../src/components/home/Home';
import SignUp from '../src/components/signup/SignUp';
import SignIn from '../src/components/signin/SignIn';
import './App.css';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	const handleLogout = () => {
		localStorage.clear();
		setLoggedIn(false);
	};
	return (
		<div className='App'>
			<Navigation
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				handleLogout={handleLogout}
			/>
			<main>
				<Route path='/home' exact component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/signup' component={SignUp} />
				<Route
					path='/signin'
					exact
					render={() => {
						return <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
					}}
				/>
			</main>
		</div>
	);
}

export default App;
