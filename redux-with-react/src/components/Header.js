import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import classes from "./Header.module.css";

const Header = () => {
	const isAuth = useSelector((state) => state.auth.isAuthed);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					<li>
						<a href="/">My Products</a>
					</li>
					<li>
						<a href="/">My Sales</a>
					</li>
					<li>{isAuth && <button onClick={logoutHandler}>Logout</button>}</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
