import { useEffect } from "react";

export function useClickOutside(ref: any, callback: any) {
	useEffect(() => {
		function handleClickOutside(event: any) {
			// Check if the clicked element is not inside the dropdown (ref)
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, callback]);
}
