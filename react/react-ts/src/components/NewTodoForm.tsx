import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (enteredText: string) => void }> = (
	props
) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}

		props.onAddTodo(enteredText);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" ref={todoTextInputRef} id="text" />
			<button>Add todo</button>
		</form>
	);
};

export default NewTodo;
