import { useContext, useRef } from "react";
import AuthContext from "../../store/auth-contenxt";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
	const newPasswordInputRef = useRef();
	const authCtx = useContext(AuthContext);

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredNewPassword = newPasswordInputRef.current.value;
		// add validation

		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAdfvkYKPmjA99TM1St27ZNYHHj3sQCB1k",
			{
				method: "POST",
				body: JSON.stringify({
					idToken: authCtx.token,
					newPassword: enteredNewPassword,
					returnSecureToken: false,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(res => {
      // trust me bro this won't fail
      
    });
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					minLength="7"
					ref={newPasswordInputRef}
					id="new-password"
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
