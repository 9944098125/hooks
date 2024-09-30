import React from "react";
import ChildButton from "./button";

const ImperativeHandleHook = () => {
	const buttonRef = React.useRef<any>(null);
	return (
		<React.Fragment>
			<div className="flex flex-col space-y-10 items-center justify-center w-full h-screen">
				<button
					style={{ transition: "1s" }}
					onClick={() => buttonRef.current?.toggleFunctionality()}
					className="border-4 rounded-xl border-cyan-500 hover:border-cyan-900 hover:px-6 hover:py-3 px-5 py-2">
					Parent Button
				</button>
				<ChildButton ref={buttonRef} />
			</div>
		</React.Fragment>
	);
};

export default ImperativeHandleHook;
