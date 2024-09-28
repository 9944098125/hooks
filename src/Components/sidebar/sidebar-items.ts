import { GiMatterStates } from "react-icons/gi";
import {
	MdOutlineViewSidebar,
	MdOutlineAirlineSeatLegroomReduced,
} from "react-icons/md";
import { GoSquareFill } from "react-icons/go";
import { CiMemoPad } from "react-icons/ci";
import { SiCustomink } from "react-icons/si";
import { IoSwapVertical } from "react-icons/io5";
import { TbArrowAutofitContentFilled } from "react-icons/tb";
import { CgDebug } from "react-icons/cg";
import { GiImperialCrown } from "react-icons/gi";
import { RiLayout5Fill } from "react-icons/ri";

export const sidebarItems = [
	{
		title: "State Hook",
		icon: GiMatterStates,
		link: "/",
	},
	{
		title: "Side Effect Hook",
		icon: MdOutlineViewSidebar,
		link: "/useEffect",
	},
	{
		title: "Reference Hook",
		icon: GoSquareFill,
		link: "/useRef",
	},
	{
		title: "Reducer Hook",
		icon: MdOutlineAirlineSeatLegroomReduced,
		link: "/useReducer",
	},
	{
		title: "Memo Hook",
		icon: CiMemoPad,
		link: "/useMemo",
	},
	{
		title: "Layout Effect Hook",
		icon: RiLayout5Fill,
		link: "/useLayoutEffect",
	},
	{
		title: "Imperative Hook",
		icon: GiImperialCrown,
		link: "/useImperativeHandle",
	},
	{
		title: "Debug Value Hook",
		icon: CgDebug,
		link: "/useDebugValue",
	},
	{
		title: "Context Hook",
		icon: IoSwapVertical,
		link: "/useContext",
	},
	{
		title: "Callback Hook",
		icon: TbArrowAutofitContentFilled,
		link: "/useCallback",
	},
	{
		title: "Custom Hook",
		icon: SiCustomink,
		link: "/useCustomHooks",
	},
];
