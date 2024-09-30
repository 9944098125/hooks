import React from "react";
import AvatarDropdown from "./avatar";

const CustomHook = () => {
	return (
		<React.Fragment>
			<div className="h-screen w-full flex items-center justify-center">
				<AvatarDropdown />
			</div>
		</React.Fragment>
	);
};

export default CustomHook;
