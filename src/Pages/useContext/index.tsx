import React from "react";
import { AuthProvider } from "./AuthContext";
import Login from "./login";

const ContextHook = () => {
	return (
		<AuthProvider>
			<Login />
		</AuthProvider>
	);
};

export default ContextHook;
