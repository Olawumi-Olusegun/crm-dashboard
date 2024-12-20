"use client";
import { ChevronDown, ChevronLeft, ChevronRight, MailPlus, Pencil, SendHorizontal, Sparkles, ThumbsDown, ThumbsUp, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchAndFilterTable from "./SearchAndFilterTable";
import Modal from "./Modal";
import Tabs from "./Tabs";
import { useModal } from "./context/ModalContext";

const items = [
    {
        id: 1,
        name: "Jane Reyes",
        role: "COO . Northwind Traders",
        description:
            "Jane may be interested in upgrading expresso machine for her instore coffee shops",
    },
    {
        id: 2,
        name: "John Smith",
        role: "CTO . Tech Solutions",
        description:
            "John is exploring AI-driven solutions to optimize warehouse management",
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "CEO . Green Market",
        description: "Sarah is looking for eco-friendly packaging for her products",
    },
    {
        id: 4,
        name: "Mike Lee",
        role: "Manager . Blue Corp",
        description: "Mike wants to expand their fleet of electric vehicles",
    },
];

const GoalsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    const [openCard, setOpenCard] = useState(false);

    const cardRef = useRef<HTMLDivElement | null>(null)


    const { toggleModal, showModal } = useModal();

    const totalPages = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
        };
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage < items.length ? prevIndex + itemsPerPage : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsPerPage >= 0
                ? prevIndex - itemsPerPage
                : items.length - itemsPerPage
        );
    };

    return (
        <>
            <div className="relative p-2 flex flex-col gap-y-3 border rounded-md shadow-xl">
                <div className="w-full">
                    <div className="flex items-center gap-1 flex-wrap py-3">
                        <h2 className="text-sm font-bold text-black/80 mr-5">
                            Hi Mona, <span className="text-indigo-400">68%</span> of goal
                            achieved and rest can be achieved by focusing on 20 top leads
                        </h2>
                    </div>
                    <div className="w-full transition-all duration-300 overflow-hidden" style={{ height: openCard ? cardRef.current?.offsetHeight || 0 : 0 }}>
                        <div ref={cardRef} className="grid grid-cols-12 gap-1">
                            <div className="col-span-12 lg:col-span-8 p-4">
                                <p className="text-sm text-gray-500 my-2">
                                    Copilot has pinpointed 20 key leads that show strong purchase
                                    intent and are actively engaging. These leads need your focus.
                                </p>
                                <div className="relative group w-full">

                                    <div className="relative overflow-hidden group">
                                        <div
                                            className="grid gap-2 transition-transform duration-500 "
                                            style={{
                                                gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
                                                transform: `translateX(-${(currentIndex / items.length) * 100
                                                    }%)`,
                                                width: `${(100 / itemsPerPage) * items.length}%`,
                                            }}
                                        >
                                            {items.map((item) => (
                                                <div
                                                    onClick={() => toggleModal("Goal")}
                                                    key={item.id}
                                                    className="flex flex-col gap-2 cursor-pointer border rounded-md p-2 bg-white"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-8 w-8 rounded-full shrink-0 bg-gray-300 flex items-center justify-center overflow-hidden">
                                                            <img src="https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg" alt="user-profile" className="h-full w-full object-cover object-center " />
                                                        </div>
                                                        <div className="flex flex-col w-full">
                                                            <h2 className="text-sm text-black/80 font-semibold">
                                                                {item.name}
                                                            </h2>
                                                            <span className="text-xs text-gray-400">
                                                                {item.role}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="bg-blue-50/50 w-full rounded-md p-2 relative overflow-hidden">
                                                        <div className="flex flex-col gap-2">
                                                            <div className="flex items-center gap-2 w-[90%]">
                                                                <MailPlus size={18} className="self-start text-gray-700" />
                                                                <h2 className="text-xs font-bold text-black/90">
                                                                    Engage with {item.name}
                                                                </h2>
                                                            </div>
                                                            <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                                                        </div>
                                                        <button className="h-7 w-7 flex items-center justify-center bg-white rounded-md rounded-tl-none absolute top-0 right-0">
                                                            <Sparkles size={15} className="text-blue-300 " />
                                                        </button>
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-auto">
                                                        Expending business - High buying intents
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={prevSlide}
                                        className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 border rounded-full h-8 w-8 flex items-center justify-center shrink-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ChevronLeft />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 border rounded-full h-8 w-8 flex items-center justify-center shrink-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ChevronRight />
                                    </button>

                                    <div className="flex justify-center mt-4">
                                        {Array.from({ length: totalPages }).map((_, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setCurrentIndex(index * itemsPerPage)}
                                                className={`h-[2px] w-5 rounded-full mx-1 cursor-pointer ${Math.floor(currentIndex / itemsPerPage) === index
                                                    ? "bg-indigo-500"
                                                    : "bg-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                </div>

                            </div>
                            <div className="col-span-12 lg:col-span-4 p-4 relative">
                                <p className="text-sm text-gray-500 my-2">
                                    Other key activities
                                </p>
                                <div className="absolute h-[85%] top-1/2 -translate-y-1/2 w-px bg-gray-200 left-0 hidden lg:block"></div>
                                <div className="flex flex-col gap-2 w-full ">
                                    <div className="flex flex-col gap-2 w-full rounded-md shadow-sm border-b p-2">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full self-start shrink-0 bg-gray-300 flex items-center justify-center overflow-hidden">
                                                <img src="https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h2 className="text-xs font-bold text-black/90">Cafe A100 woodand bank</h2>
                                                <p className="text-gray-500 text-xs">Woodand . bank $280,000 . 8 days to close</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-px">
                                            <div className="flex-1 flex items-center gap-1 p-1.5 rounded-md bg-gray-100">
                                                <MailPlus size={14} className="self-start text-gray-700" />
                                                <span className="text-xs text-gray-500">Review draft and repliesto Chris Naido</span>
                                            </div>
                                            <button className="h-7 w-7 shrink-0 flex items-center justify-center bg-white rounded-md rounded-tl-none ml-auto -mr-1.5">
                                                <Sparkles size={15} className="text-blue-300 " />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 w-full rounded-md shadow-sm border-b p-2">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full self-start shrink-0 bg-gray-300 flex items-center justify-center overflow-hidden">
                                                <img src="https://images.pexels.com/photos/269126/pexels-photo-269126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile" className="h-full w-full object-cover object-center " />
                                            </div>
                                            <div className="flex flex-col">
                                                <h2 className="text-xs font-bold text-black/90">Partnership opportunities for Fabrican </h2>
                                                <p className="text-gray-500 text-xs">Fabrican . bank $500,000 . 12 days to close</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-px">
                                            <div className="flex-1 flex items-center gap-1 p-1.5 rounded-md bg-gray-100">
                                                <MailPlus size={14} className="self-start text-gray-700" />
                                                <span className="text-xs text-gray-500 line-clamp-1">Prepare me for {"Fabrican's"} key stakeholders meeting</span>
                                            </div>
                                            <button className="h-7 w-7 shrink-0 flex items-center justify-center bg-white rounded-md rounded-tl-none ml-auto -mr-1.5">
                                                <Sparkles size={15} className="text-blue-300 " />
                                            </button>
                                        </div>
                                    </div>
                                    <Link href={"#"} className="text-blue-800 text-xs underline font-medium">Show all key activities</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => setOpenCard((prevState) => !prevState)} className={`h-7 w-7 flex items-center justify-center bg-white hover:bg-gray-100 rounded-md rounded-tl-none absolute top-0 right-0 duration-300 ${openCard ? "rotate-180 " : ""}`}>
                    <ChevronDown size={15} className="text-gray-500 " />
                </button>
            </div>
            {
                showModal === "Goal" && (
                    <Modal>
                        <div className="w-full h-dvh lg:max-h-[80%] border-2 shadow-2xl rounded-md bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 p-[2px] overflow-auto lg:overflow-hidden ">
                            <div className="p-3 bg-white flex flex-col gap-2 rounded-md  lg:h-full flex-1">
                                <div className="flex items-center gap-1">
                                    <h1 className="text-black/80 font-bold">Engage with Jane Reyes</h1>
                                    <button onClick={() => toggleModal("Goal")} className="ml-auto shrink-0 flex items-center justify-center h-7 w-7 text-gray-600 rounded-md hover:bg-gray-100 duration-300">
                                        <X size={18} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 w-full shadow-lg p-2 rounded-md">
                                    <div className="h-9 w-9 rounded-full shrink-0 border shadow-sm bg-gray-300 flex items-center justify-center overflow-hidden">
                                        <img src="https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg" alt="user-profile" className="h-full w-full object-contain " />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="font-medium">Jane Reyes</h2>
                                        <span className="text-xs text-gray-500">COO, NorthwindTrade</span>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center gap-2 w-full bg-blue-50/70 border rounded-md p-3">
                                    <div className="flex items-center gap-2">
                                        <Sparkles size={16} className="text-blue-500" />
                                        <p className="text-xs text-gray-700">Jane may be interested in upgrading expresso machine for her instore coffe shop</p>
                                    </div>
                                    <div className="ml-auto flex items-center justify-center gap-1">
                                        <button className="ml-auto shrink-0 flex items-center justify-center gap-1 text-gray-600 rounded-md bg-white border hover:bg-white/50 p-1 px-2 text-xs hover:text-blue-500 duration-300">
                                            <Pencil size={12} />
                                            Edit
                                        </button>
                                        <button className="ml-auto shrink-0 flex items-center justify-center gap-1 rounded-md hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 bg-gradient-to-r from-blue-500 to-purple-500 border text-white p-1 px-2 text-xs transition-all duration-300">
                                            <SendHorizontal size={12} />
                                            Approve and send
                                        </button>
                                    </div>
                                </div>
                                <div className="">
                                    <Tabs />
                                </div>
                                <div className="flex items-center justify-between flex-wrap mt-auto">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs text-gray-600">Showing 1/10</span>
                                        <div className="w-px h-4 bg-gray-200" />
                                        <Link href={"#"} className="underline text-xs text-blue-600">Show all</Link>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button className="h-7 w-7 text-xs text-gray-700  flex items-center justify-center hover:bg-gray-300 duration-300 rounded-md ">
                                            <ThumbsUp size={13} />
                                        </button>
                                        <button className="h-7 w-7 text-xs text-gray-700  flex items-center justify-center hover:bg-gray-300 duration-300 rounded-md ">
                                            <ThumbsDown size={13} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            }
            <SearchAndFilterTable />
        </>
    );
};

export default GoalsCard;
