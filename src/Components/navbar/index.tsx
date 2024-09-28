import React from "react";

const Navbar = () => {
	return (
		<React.Fragment>
			<div className="w-full fixed top-0 right-0 h-[70px] bg-white shadow-lg flex items-center px-10">
				<div className="flex items-center space-x-4">
					<img src="/logo.png" height={50} width={50} alt="" />
					<h3 className="text-2xl font-bold text-violet-700">Hooks</h3>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
