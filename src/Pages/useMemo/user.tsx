import React from "react";

const UserCard = React.memo(
	({ user }: { user: { id: number; name: string; age: number } }) => {
		console.log(`Rendering user: ${user.name}`);
		return (
			<div className="border border-violet-700 rounded-xl p-5">
				<h3>{user.name}</h3>
				<p>Age: {user.age}</p>
			</div>
		);
	}
);

export default UserCard;
