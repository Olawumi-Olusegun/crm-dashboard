import { ChevronDown, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";
import { useRef, useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Engage");
    const [openCard, setOpenCard] = useState(false);

    const cardRef = useRef<HTMLDivElement | null>(null)


    return (
        <div className="w-full">
            <div className="flex items-center gap-3 border-b border-gray-200">
                <button
                    className={`text-center text-sm py-2 ${activeTab === "Engage"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-600"
                        }`}
                    onClick={() => setActiveTab("Engage")}
                >
                    Engage
                </button>
                <button
                    className={`text-center text-sm py-2 ${activeTab === "Research"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-600"
                        }`}
                    onClick={() => setActiveTab("Research")}
                >
                    Research
                </button>
            </div>

            <div className="py-4 lg:px-4 h-full">
                {activeTab === "Engage" && <div className=" flex-col gap-3 rounded-md bg-white p-2 px-3">
                    <div className="bg-blue-50/50 rounded-md p-4 flex flex-col gap-3 relative shadow-md">
                        <h4 className="text-xs font-medium text-blue-700 ">Why i pick this leads</h4>
                        <ul className="list-disc text-xs list-inside text-black/80">
                            <li className="">Jane is a key decision maker and was browsing <span className="text-black font-medium">expresso machine</span> on first coffee website </li>
                            <li className="">Multiple people at the company have reported slowness during <span className="text-black font-medium">service request</span></li>
                            <li className="">Northwind Trader currently see  <span className="text-black font-medium">$200M in revenue</span> from there in-store coffe shops </li>
                        </ul>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_180px_180px] gap-3">
                            <div className="bg-white rounded-xl shadow-md h-16 flex items-center gap-2 p-2">
                                <div className="h-8 w-8 rounded-full shrink-0 border shadow-sm bg-gray-300 flex items-center justify-center overflow-hidden">
                                    <img src="https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg" alt="user-profile" className="h-full w-full  object-contain " />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs">Decision makers</span>
                                    <span className="text-xs font-bold text-blue-500">Yes</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md h-16 flex items-center gap-2 p-2">
                                <div className="h-8 w-8 rounded-full shrink-0 border shadow-sm bg-gray-300 flex items-center justify-center overflow-hidden">
                                    <img src="https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg" alt="user-profile" className="h-full w-full object-contain " />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs">Potential Deal value</span>
                                    <span className="text-xs font-bold text-blue-500">$1m</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md h-16 flex items-center gap-2 p-2">
                                <div className="h-8 w-8 rounded-full shrink-0 border shadow-sm bg-gray-300 flex items-center justify-center overflow-hidden">
                                    <img src="https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg" alt="user-profile" className="h-full w-full object-contain " />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs">Intent</span>
                                    <span className="text-xs font-bold text-blue-500">High</span>
                                </div>
                            </div>
                        </div>
                        <button className="h-7 w-7 flex items-center justify-center bg-white rounded-md rounded-tl-none absolute top-0 right-0">
                            <Sparkles size={15} className="text-blue-300 " />
                        </button>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-2 mt-2">
                        <div className="flex items-center gap-1">
                            <button className="h-7 w-7 flex items-center justify-center bg-gray-100 hover:bg-gray-300 duration-300 rounded-md ">
                                <Sparkles size={15} className="text-gray-500" />
                            </button>
                            <button className="h-7 w-fit px-2 text-gray-700 text-xs flex items-center justify-center bg-gray-100 hover:bg-gray-300 duration-300 rounded-md ">
                                D3655 Sales
                            </button>
                            <button className="h-7 w-7 text-xs text-gray-700  flex items-center justify-center bg-gray-100 hover:bg-gray-300 duration-300 rounded-md ">
                                +2
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="h-7 w-fit px-2 text-gray-700 text-xs flex items-center justify-center bg-gray-100 hover:bg-gray-300 duration-300 rounded-md ">
                                AI generated content may be incorrect
                            </button>
                            <button className="h-7 w-7 text-xs text-gray-700  flex items-center justify-center hover:bg-gray-300 duration-300 rounded-md ">
                                <ThumbsUp size={13} />
                            </button>
                            <button className="h-7 w-7 text-xs text-gray-700  flex items-center justify-center hover:bg-gray-300 duration-300 rounded-md ">
                                <ThumbsDown size={13} />
                            </button>
                        </div>

                    </div>
                    <div className="border rounded-md mt-3 relative p-2 w-full">
                        <h2 className="text-xs font-bold text-black/80 py-2">About Jane</h2>
                        <div className="w-full flex flex-col gap overflow-hidden transition-all duration-300" style={{ height: openCard ? cardRef.current?.offsetHeight || 0 : 0 }}>
                            <div ref={cardRef} className="w-full">
                                <p className="text-xs text-gray-600">Jane may be interested in upgrading expresso machine for her instore coffee shops, Jane may be interested in upgrading expresso machine for her instore coffee shops, Jane may be interested in upgrading expresso machine for her instore coffee shops</p>
                            </div>
                        </div>
                        <button onClick={() => setOpenCard((prevState) => !prevState)} className={`h-7 w-7 flex items-center justify-center bg-white hover:bg-gray-100 rounded-md rounded-tl-none absolute top-0 right-0 duration-300 ${openCard ? "rotate-180 " : ""}`}>
                            <ChevronDown size={15} className="text-gray-500 " />
                        </button>
                    </div>
                </div>}
                {activeTab === "Research" && <div className="flex flex-col gap-3 h-dvh lg:h-full">
                    <p className="text-gray-600">Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.</p>
                    <div className="flex items-center gap-1">
                        <button className="h-7 w-fit px-2 text-gray-700 text-xs flex items-center justify-center bg-gray-100 hover:bg-gray-300 duration-300 rounded-md ">
                            AI generated content may be incorrect
                        </button>
                        <button className="h-7 w-7 text-xs text-gray-700  flex items-center justify-center hover:bg-gray-300 duration-300 rounded-md ">
                            <ThumbsUp size={13} />
                        </button>
                        <button className="h-7 w-7 text-xs text-gray-700  flex items-center justify-center hover:bg-gray-300 duration-300 rounded-md ">
                            <ThumbsDown size={13} />
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Tabs;
