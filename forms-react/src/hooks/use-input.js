import { useState } from "react";

const useInput = (validatedValue) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validatedValue(enteredValue);
	const hasError = !valueIsValid && isTouched;

    const inputChangeHandler = (e) => {
		setEnteredValue(e.target.value);
	};

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    const inputBlurHandler = (e) => {
		setIsTouched(true);
	};

	return {
		value: enteredValue,
        isValid: valueIsValid,
		hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
	};
};

export default useInput;
