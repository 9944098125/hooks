import React from "react";
import { useAuth } from "./AuthContext";

const Login = () => {
	const { isAuthenticated, login, logout } = useAuth();

	return (
		<React.Fragment>
			<div className="h-screen w-full flex flex-col space-y-6 justify-center items-center">
				{isAuthenticated ? (
					<>
						<h2 className="text-4xl text-violet-700 font-bold">
							Welcome, you are logged in!
						</h2>
						<button
							onClick={logout}
							className="bg-white border font-bold rounded-lg border-cyan-600 px-4 py-2">
							Logout
						</button>
					</>
				) : (
					<>
						<h2 className="text-4xl text-violet-700 font-bold">
							Please log in to continue.
						</h2>
						<button
							onClick={login}
							className="bg-cyan-600 text-white font-bold px-5 py-2 border-none rounded-lg">
							Login
						</button>
					</>
				)}
			</div>
			);
		</React.Fragment>
	);
};

export default Login;
