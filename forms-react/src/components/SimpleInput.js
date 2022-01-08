import { useEffect, useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouched] = useState();
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouched, setEnteredEmailTouched] = useState();
	let enteredNameIsValid = enteredName.trim() !== "";
	let enteredEmailIsValid =
		enteredEmail.trim() !== "" && enteredEmail.includes("@");

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const emailInputChangeHandler = (e) => {
		setEnteredEmail(e.target.value);
	};

	const nameInputBlur = (e) => {
		setEnteredNameTouched(true);
	};

	const emailInputBlur = (e) => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();
		setEnteredNameTouched(true);
		setEnteredEmailTouched(true);

		if (!enteredNameIsValid) {
			return;
		}

		setEnteredName("");
		setEnteredNameTouched(false);
		setEnteredEmailTouched(false);
	};

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	const nameInputClasses = nameInputIsInvalid
		? "form-control invalid"
		: "form-control";

	const emailInputClasses = emailInputIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					onChange={nameInputChangeHandler}
					value={enteredName}
					onBlur={nameInputBlur}
					type="text"
					id="name"
				/>
				{nameInputIsInvalid && (
					<p className="error-text">Please fill in name field!</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">Your mail</label>
				<input
					onChange={emailInputChangeHandler}
					value={enteredEmail}
					onBlur={emailInputBlur}
					type="email"
					id="email"
				/>
				{emailInputIsInvalid && (
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
