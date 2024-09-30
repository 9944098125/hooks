import React, { useEffect, useLayoutEffect } from "react";

const LayoutEffectHook = () => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value = "Hello Srinivas";
		}
	}, []);

	useLayoutEffect(() => {
		console.log("Input Value => ", inputRef.current?.value);
	}, []);

	return (
		<React.Fragment>
			{/* generally useLayoutEffect is called in the early stages of 
    component rendering */}
			<div className="flex items-center justify-center h-screen w-full">
				<input
					ref={inputRef}
					value="Hello Learners"
					className="text-2xl px-5 py-1 rounded-lg font-semibold border border-violet-700 text-violet-700 shadow-lg"
				/>
			</div>
		</React.Fragment>
	);
};

export default LayoutEffectHook;
