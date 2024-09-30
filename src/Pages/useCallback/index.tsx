import React, { useState, useCallback } from "react";
import AddTodo from "./add-todo";

const CallbackHook = () => {
	const [todos, setTodos] = useState<string[]>([]);

	const addTodo = useCallback(
		(newTodo: any) => {
			setTodos((prevTodos: string[]) => [...prevTodos, newTodo]);
		},
		[] // Empty dependency array, so the function is only created once
	);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<AddTodo addTodo={addTodo} />
			<ul className="mt-5 text-left w-1/2 shadow-lg p-5 rounded-lg">
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};

export default CallbackHook;
