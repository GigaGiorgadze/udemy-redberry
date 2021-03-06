import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const dispatch = useDispatch();

	const loginHandler = (e) => {
		e.preventDefault();
		if (
			emailRef.current.value.trim() === "" ||
			passwordRef.current.value.trim() === ""
		) {
			return;
		}

		dispatch(authActions.login());
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={loginHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input ref={emailRef} type="email" id="email" />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input ref={passwordRef} type="password" id="password" />
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
