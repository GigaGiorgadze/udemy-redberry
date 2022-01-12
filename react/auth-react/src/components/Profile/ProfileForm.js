import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-contenxt";
import classes from "./ProfileForm.module.css";


const ProfileForm = () => {
	const newPasswordInputRef = useRef();
	const authCtx = useContext(AuthContext);
  const history = useHistory()

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredNewPassword = newPasswordInputRef.current.value;
		// add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAdfvkYKPmjA99TM1St27ZNYHHj3sQCB1k', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds!

      history.replace('/');
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
