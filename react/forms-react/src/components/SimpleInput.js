import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		hasError: nameInputHasError,
		inputChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		isValid: enteredNameIsValid,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		hasError: emailInputHasError,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		isValid: enteredEmailIsValid,
		reset: resetEmailInput,
	} = useInput((value) => value.trim !== "" && value.includes("@"));

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}

		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? "form-control invalid"
		: "form-control";

	const emailInputClasses = emailInputHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					type="text"
					id="name"
				/>
				{nameInputHasError && (
					<p className="error-text">Please fill in name field!</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">Your mail</label>
				<input
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					type="email"
					id="email"
				/>
				{emailInputHasError && (
					<p className="error-text">Please fill in email field!</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
