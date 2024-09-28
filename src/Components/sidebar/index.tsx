import React from "react";
import { sidebarItems } from "./sidebar-items";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<React.Fragment>
			<div
				id="sidebar"
				className="bg-violet-700 mt-[70px] overflow-y-scroll sidebar w-full py-10 px-5 shadow-lg">
				{sidebarItems.map((item, idx) => {
					return (
						<div className="mb-5 hover:border hover:border-white hover:rounded-lg hover:text-[19px] text-[15px]">
							<Link key={idx} to={item.link} style={{}}>
								<div className="flex items-center space-x-4 p-2">
									<item.icon className="text-white font-semibold text-xl" />
									<p className="text-white font-semibold">{item.title}</p>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default Sidebar;
