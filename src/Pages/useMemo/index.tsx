import React, { useState, useMemo } from "react";
import UserCard from "./user";

const ExpensiveComputation = (numbers: number[]) => {
	console.log("Expensive computation running...");
	return numbers.reduce((acc, curr) => acc + curr, 0);
};

const MemoWithUseMemo = () => {
	const [users] = useState([
		{ id: 1, name: "John Doe", age: 30 },
		{ id: 2, name: "Jane Doe", age: 25 },
		{ id: 3, name: "Sam Smith", age: 40 },
	]);

	const [count, setCount] = useState(0);

	// Memoizing numbersArray to prevent recreation
	const numbersArray = useMemo(
		() => Array.from({ length: 100000 }, (_, i) => i),
		[]
	);
	console.log("checking render");

	// Memoizing expensive computation
	const totalSum = useMemo(
		() => ExpensiveComputation(numbersArray),
		[numbersArray]
	);

	return (
		<div className="w-full h-screen flex items-center justify-center flex-col space-y-6">
			<p className="text-2xl text-violet-700 font-bold">
				Expensive Computation Result: {totalSum}
			</p>
			<button
				className="bg-violet-700 text-white font-bold border-none rounded-xl px-5 py-2"
				onClick={() => setCount((pre) => pre + 1)}>
				Re-render Parent (Count: {count})
			</button>
			<div className="flex items-center justify-center space-x-5">
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	);
};

export default MemoWithUseMemo;
