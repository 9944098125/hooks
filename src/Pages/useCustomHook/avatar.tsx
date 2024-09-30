import React, { useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside"; // Import the custom hook

const AvatarDropdown = () => {
	const [isOpen, setIsOpen] = useState(false); // Dropdown open state
	const dropdownRef = useRef(null); // Reference to the dropdown element

	// Custom hook to close the dropdown when clicking outside
	useClickOutside(dropdownRef, () => setIsOpen(false));

	return (
		<div className="relative">
			{/* Avatar Image */}
			<img
				src="https://t3.ftcdn.net/jpg/06/17/13/26/240_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
				alt="User Avatar"
				height={200}
				width={200}
				className="rounded-full cursor-pointer"
				onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
			/>

			{/* Dropdown */}
			{isOpen && (
				<div
					ref={dropdownRef}
					className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
					<ul className="p-2">
						<li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
							<span className="font-medium">User Name</span>
						</li>
						<li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
							Logout
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default AvatarDropdown;
