import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import StateHook from "../Pages/useState";
import Navbar from "../Components/navbar";
import Sidebar from "../Components/sidebar";

const Layout = () => {
	return (
		<div className="flex w-full h-screen">
			<div className="w-[20%] h-screen">
				<Sidebar />
			</div>
			<div className="w-[85%] overflow-y-scroll">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <StateHook />,
			},
			{
				path: "/useEffect",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useRef",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useReducer",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useMemo",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useLayoutEffect",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useImperativeHandle",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useDebugValue",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useContext",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useCallback",
				element: <h1>EffectHook</h1>,
			},
			{
				path: "/useCustomHooks",
				element: <h1>EffectHook</h1>,
			},
		],
	},
]);

export function BaseRoutes() {
	return <RouterProvider router={router} />;
}
