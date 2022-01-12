import { useState } from "react";
import NewTodo from "./components/NewTodoForm";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addToHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	const removeHandler = (todoId: string) => {
		const newTodos = todos.filter((todo) => todo.id !== todoId);

		setTodos(newTodos);
	};

	return (
		<div>
			<NewTodo onAddTodo={addToHandler} />
			<Todos  onRemoveTodo={removeHandler} items={todos} />
		</div>
	);
}

export default App;
