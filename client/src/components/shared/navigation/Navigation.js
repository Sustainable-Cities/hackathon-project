import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ loggedIn, handleLogout }) => {
	return (
		<div>
			<nav>
				<Link to='/home'>Home</Link>
				{!loggedIn && <Link to='/signin'>Login</Link>}
				{loggedIn && <button onClick={handleLogout}>Logout</button>}
			</nav>
		</div>
	);
};

export default Navigation;
