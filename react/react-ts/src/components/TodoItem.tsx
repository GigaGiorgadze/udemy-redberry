import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
	text: string;
	id: string
	delete: (todoId: string) => void;
}> = (props) => {
	const deleteHandler =() => {
		props.delete(props.id)
	}

	return <li onClick={deleteHandler} className={classes.item}>{props.text}</li>;
};

export default TodoItem;
