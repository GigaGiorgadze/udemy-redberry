import useInputBasic from "../hooks/use-input-basic";

const BasicForm = (props) => {
	const {
		value: nameValue,
		inputChangeHandler: nameChangeHandler,
		inputIsValid: nameIsValid,
		inputHasErrors: nameHasErrors,
		inputBlurHandler: nameBlurHandler,
		reset: resetName,
	} = useInputBasic((value) => value.trim() !== "");
	const {
		value: lastNameValue,
		inputChangeHandler: lastNameChangeHandler,
		inputIsValid: lastNameIsValid,
		inputHasErrors: lastNameHasError,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInputBasic((value) => value.trim() !== "");

	const {
		value: emailValue,
		inputChangeHandler: emailChangeHandler,
		inputIsValid: emailIsValid,
		inputHasErrors: emailHasError,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInputBasic((value) => value.trim() !== "" && value.includes("@"));

	let formIsValid = false;

	if (nameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	} else {
		formIsValid = false;
	}

	const submitHandler = (e) => {
		e.preventDefault();

		if (formIsValid) {
			console.log(nameValue);
		}

		resetName();
		lastNameReset();
		emailReset();
	};

	let nameClasses = !nameHasErrors ? "form-control" : "form-control invalid";
	let lastNameClasses = !lastNameHasError
		? "form-control"
		: "form-control invalid";

	let emailClasses = !emailHasError ? "form-control" : "form-control invalid";

	return (
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={nameClasses}>
					<label htmlFor="name">First Name</label>
					<input
						onChange={nameChangeHandler}
						onBlur={nameBlurHandler}
						type="text"
						id="name"
					/>
					{nameHasErrors && <p>Please enter a name</p>}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={lastNameValue}
					/>
					{lastNameHasError && <p>Please enter last name</p>}
				</div>
			</div>
			<div className="form-control">
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					onChange={emailChangeHandler}
					value={emailValue}
          onBlur={emailBlurHandler}
					id="name"
				/>
        {emailHasError && <p>Please enter email adrress</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
