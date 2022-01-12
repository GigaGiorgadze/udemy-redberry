import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
	items: Todo[];
	onRemoveTodo: (todoId: string) => void;
}> = (props) => {
	return (
		<ul className={classes.list}>
			{props.items.map((item) => (
				<TodoItem
					delete={props.onRemoveTodo}
					id={item.id}
					text={item.text}
					key={item.id}
				/>
			))}
		</ul>
	);
};

export default Todos;
