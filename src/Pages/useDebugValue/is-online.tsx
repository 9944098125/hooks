import React, { useState, useEffect, useDebugValue } from "react";

const useIsOnline = () => {
	const [isOnline, setIsOnline] = useState(navigator.onLine);

	// add a label to the custom hook in React Developer Tools
	useDebugValue(isOnline ? "Online" : "Offline");

	useEffect(() => {
		const handleOnline = () => setIsOnline(true);
		const handleOffline = () => setIsOnline(false);

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		// Cleanup the event listeners on unmount
		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	return isOnline;
};

export default useIsOnline;
