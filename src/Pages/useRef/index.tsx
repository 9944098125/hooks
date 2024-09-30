import React, { useEffect, useRef } from "react";

const ReferenceHook = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	return (
		<React.Fragment>
			<div className="flex items-center justify-center h-screen w-full">
				<label htmlFor="name" className="font-semibold text-violet-700"></label>
				<input
					ref={inputRef}
					placeholder="Enter Your Name..."
					name="name"
					type="text"
					className="h-[45px] border-none w-1/3 outline-none shadow-lg px-5 py-2"
				/>
			</div>
		</React.Fragment>
	);
};

export default ReferenceHook;
