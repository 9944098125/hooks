import React, { forwardRef, useImperativeHandle } from "react";

type Props = {};
const ChildButton = forwardRef((props: Props, ref: any) => {
	const [toggle, setToggle] = React.useState(false);

	useImperativeHandle(
		ref,
		() => ({
			toggleFunctionality() {
				setToggle(!toggle);
			},
		}),
		[toggle]
	);

	return (
		<React.Fragment>
			<button className="bg-cyan-500 hover:bg-cyan-700 text-white px-8 py-4 border-black rounded-xl">
				Child Button
			</button>
			{toggle && <span>Toggled</span>}
		</React.Fragment>
	);
});

export default ChildButton;
