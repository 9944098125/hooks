import useIsOnline from "./is-online";

const StatusComponent = () => {
	const isOnline = useIsOnline();

	return (
		<div className="h-screen w-full flex items-center justify-center">
			<h1 className="text-5xl text-violet-700 font-bold">
				Your current status: {isOnline ? "Online" : "Offline"}
			</h1>
		</div>
	);
};

export default StatusComponent;
