import React, { useState } from "react";

const AddTodo = React.memo(({ addTodo }: any) => {
	const [newTodo, setNewTodo] = useState("");

	return (
		<div>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				placeholder="Add a new task"
				className="border border-violet-700 rounded-lg px-2 py-2 w-[20rem]"
			/>
			<button
				className="bg-violet-500 border-none hover:bg-violet-900 rounded-lg text-white px-5 py-2 ml-5"
				onClick={() => addTodo(newTodo)}>
				Add Todo
			</button>
		</div>
	);
});

export default AddTodo;
