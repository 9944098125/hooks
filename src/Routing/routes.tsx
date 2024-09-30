import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import StateHook from "../Pages/useState";
import SideEffectHook from "../Pages/useEffect";
import Navbar from "../Components/navbar";
import Sidebar from "../Components/sidebar";
import ReferenceHook from "../Pages/useRef";
import ReducerHook from "../Pages/useReducer";
import LayoutEffectHook from "../Pages/useLayoutEffect";
import ImperativeHandleHook from "../Pages/useImperativeHandle";
import ContextHook from "../Pages/useContext";
import MemoWithUseMemo from "../Pages/useMemo";
import StatusComponent from "../Pages/useDebugValue";
import CallbackHook from "../Pages/useCallback";
import CustomHook from "../Pages/useCustomHook";

const Layout = () => {
	return (
		<div className="flex w-full h-screen">
			<div className="w-[20%] h-screen">
				<Sidebar />
			</div>
			<div className="w-full overflow-y-scroll">
				<Navbar />
				<div className="pl-[15rem]">
					<Outlet />
				</div>
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
				element: <SideEffectHook />,
			},
			{
				path: "/useRef",
				element: <ReferenceHook />,
			},
			{
				path: "/useReducer",
				element: <ReducerHook />,
			},
			{
				path: "/useMemo",
				element: <MemoWithUseMemo />,
			},
			{
				path: "/useLayoutEffect",
				element: <LayoutEffectHook />,
			},
			{
				path: "/useImperativeHandle",
				element: <ImperativeHandleHook />,
			},
			{
				path: "/useDebugValue",
				element: <StatusComponent />,
			},
			{
				path: "/useContext",
				element: <ContextHook />,
			},
			{
				path: "/useCallback",
				element: <CallbackHook />,
			},
			{
				path: "/useCustomHooks",
				element: <CustomHook />,
			},
		],
	},
]);

export function BaseRoutes() {
	return <RouterProvider router={router} />;
}
