import React, { useReducer } from "react";

const reducer = (state: { count: number }, action: any) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				count: state.count + 1,
			};
		case "DECREMENT":
			return {
				count: state.count === 0 ? 0 : state.count - 1,
			};
		default:
			return state;
	}
};

const ReducerHook = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	function increment() {
		dispatch({ type: "INCREMENT" });
	}

	function decrement() {
		dispatch({ type: "DECREMENT" });
	}

	return (
		<React.Fragment>
			<div className="flex flex-col space-y-5 items-center justify-center h-screen w-full">
				<h6 className="text-violet-700">{state.count}</h6>
				<button onClick={increment}>Increase</button>
				<button onClick={decrement}>Decrease</button>
			</div>
		</React.Fragment>
	);
};

export default ReducerHook;
