import { useState } from "react";

const useInputBasic = (validateField) => {
	const [inputValue, setInputValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const inputIsValid = validateField(inputValue);
	const inputHasErrors = !inputIsValid && isTouched;

	const inputChangeHandler = (e) => {
		setInputValue(e.target.value);
	};

	const inputBlurHandler = (e) => {
		setIsTouched(true);
	};

	const reset = () => {
		setIsTouched(false);
		setInputValue("");
	};

	return {
		value: inputValue,
		inputChangeHandler,
		inputBlurHandler,
		inputIsValid,
		inputHasErrors,
        reset
	};
};

export default useInputBasic;
