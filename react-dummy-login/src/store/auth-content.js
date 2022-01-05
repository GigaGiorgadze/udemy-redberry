import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, SetIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserInfo = localStorage.getItem("isLoggedIn");

		if (storedUserInfo === "1") {
			SetIsLoggedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		localStorage.setItem("isLoggedIn", "0");
		SetIsLoggedIn(false);
	};

	const loginHandler = () => {
		localStorage.setItem("isLoggedIn", "1");
		SetIsLoggedIn(true);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
