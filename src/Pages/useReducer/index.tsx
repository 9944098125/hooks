import React, { useEffect, useReducer, useRef } from "react";

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
	const [countDecreased, setCountDecreased] = React.useState(false);

	function increment() {
		dispatch({ type: "INCREMENT" });
		setCountDecreased(false);
	}

	function decrement() {
		dispatch({ type: "DECREMENT" });
		setCountDecreased(true);
	}

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<React.Fragment>
			<div className="flex flex-col space-y-5 items-center justify-center h-screen w-full">
				<p className="text-2xl font-semibold">
					{inputRef.current?.value} has
					{countDecreased ? " decreased" : " increased"} the count to{" "}
					<span className="text-3xl text-violet-700 font-bold">
						{state.count}
					</span>
				</p>
				<input
					type="text"
					ref={inputRef}
					className="h-[45px] w-[20rem] px-5 py-1 border border-green-700 rounded-lg"
				/>
				<div className="flex items-center space-x-10">
					<button
						className="bg-violet-700 text-white border-none px-5 py-2 rounded-lg hover:bg-violet-900"
						onClick={increment}>
						Increase
					</button>
					<button
						className="bg-red-700 text-white border-none px-5 py-2 rounded-lg hover:bg-red-900"
						onClick={decrement}>
						Decrease
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReducerHook;
