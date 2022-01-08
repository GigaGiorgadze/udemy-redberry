import { useCallback, useState } from "react";
import useHttp from "../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
	const createTask = useCallback((taskData, taskText) => {
		const generateId = taskData.name;
		const createdTask = { id: generateId, text: taskText };

		props.onAddTask(createdTask);
	});

	const { isLoading, error, sendRequest } = useHttp(createTask);

	const enterTaskHandler = async (taskText) => {
		sendRequest({
			url: "https://react-http-9c241-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: { text: taskText },
		});
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
