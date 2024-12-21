"use client"
import { Activity, BellPlus, Book, ChartCandlestick, Clock5, CreditCard, Headset, House, LayoutDashboard, Menu, Notebook, PackageSearch, ParkingMeter, Receipt, ShoppingBag, UserRound, UsersRound, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useModal } from "./context/ModalContext";
import Modal from "./Modal";
import { useSidebar } from "./context/SidebarContext";

type DropdownMenu = "Recents" | "Pinned" | undefined;

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState<DropdownMenu>(undefined)
    const { showSidebar } = useSidebar();

    const { toggleModal, showModal } = useModal();


    return (
        <>
            <aside className={`-translate-x-full fixed w-52 h-[calc(100%-48px)] mt-12 top-0 left-0 pt-2 bg-[#efefef] border-r border-r-gray-200 text-gray-700  transform transition-transform duration-300 ease-in-out lg:flex flex-col gap-2 z-50 lg:translate-x-0 overflow-y-scroll scrollbar-scroll ${showSidebar ? "translate-x-0 block" : "-translate-x-full "} `}>
                <button className="ml-3 hover:bg-gray-200 rounded-sm duration-300 h-7 w-7 shrink-0 flex items-center justify-center">
                    <Menu size={18} className="text-gray-500" />
                </button>
                <ul className="flex-1 flex flex-col gap-1">
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:bg-gray-200">
                            <House size={16} />
                            Home
                        </Link>
                    </li>

                    <li className="relative">
                        <button className="flex items-center justify-between w-full px-4 py-1 hover:bg-gray-200"
                            aria-expanded={openDropdown === "Recents"}
                            onClick={() => setOpenDropdown((prevState) => prevState === "Recents" ? undefined : "Recents")}
                        >
                            <div className="flex items-center gap-2 text-gray-700 text-sm">
                                <Clock5 size={16} />
                                Recents
                            </div>
                            <svg className={`w-4 h-4 transform transition-transform duration-300 ${openDropdown === "Recents" ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        <ul className={`grid duration-300 ${openDropdown === "Recents" ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="w-full duration-300 overflow-hidden">
                                <li>
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700/80 hover:bg-gray-200">Lists</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700/80 hover:bg-gray-200">Personas</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700/80 hover:bg-gray-200">Agents</Link>
                                </li>
                            </div>
                        </ul>
                    </li>

                    <li className="relative">
                        <button className="flex items-center justify-between w-full px-4 py-1 hover:bg-gray-200"
                            aria-expanded={openDropdown === "Pinned"}
                            onClick={() => setOpenDropdown((prevState) => prevState === "Pinned" ? undefined : "Pinned")}
                        >
                            <div className="flex items-center gap-2 text-gray-700 text-sm">
                                <ParkingMeter size={16} />
                                Pinned
                            </div>
                            <svg className={`w-4 h-4 transform transition-transform duration-300 ${openDropdown === "Pinned" ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        <ul className={`grid duration-300 ${openDropdown === "Pinned" ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="w-full duration-300 overflow-hidden">
                                <li>
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700/80 hover:bg-gray-200">Lists</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700/80 hover:bg-gray-200">Personas</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-1 text-sm text-gray-700/80 hover:bg-gray-200">Agents</Link>
                                </li>

                            </div>
                        </ul>
                    </li>

                    <li>
                        <h4 className="px-4 text-sm text-black/70 font-semibold my-2">My Work</h4>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <ChartCandlestick size={16} />
                            Sales Accelerator
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <LayoutDashboard size={16} />
                            Dashboards
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => toggleModal("Agent")} href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <Activity size={16} />
                            Agent Skills
                        </Link>
                    </li>

                    <li>
                        <h4 className="px-4 text-sm text-black/70 font-semibold my-2">Customers</h4>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <CreditCard size={16} />
                            Accounts
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <UserRound size={16} />
                            Contacts
                        </Link>
                    </li>

                    <li>
                        <h4 className="px-4 text-sm text-black/70 font-semibold my-2">Sales</h4>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <Headset size={16} />
                            Leads
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <Book size={16} />
                            Opportunities
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <UsersRound size={16} />
                            Competitors
                        </Link>
                    </li>

                    <li>
                        <h4 className="px-4 text-sm text-black/70 font-semibold my-2">Collaterals</h4>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <Headset size={16} />
                            Quotes
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <ShoppingBag size={16} />
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <Notebook size={16} />
                            Invoice
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <PackageSearch size={16} />
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <Receipt size={16} />
                            Sales Literature
                        </Link>
                    </li>

                    <li>
                        <h4 className="px-4 text-sm text-black/70 font-semibold my-2">Marketing</h4>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <CreditCard size={16} />
                            Marketing List
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:hover:bg-gray-200">
                            <BellPlus size={16} />
                            Quick Campaigns
                        </Link>
                    </li>

                </ul>
            </aside>

            {
                showModal === "Agent" && (
                    <Modal className="bg-white bg-opacity-5 backdrop-blur-md">
                        <div className="w-full h-dvh lg:h-auto border-2 rounded-md bg-white p-[2px] overflow-auto lg:overflow-hidden ">
                            <div className="p-3 bg-white flex flex-col gap-5 rounded-md  lg:h-full flex-1">
                                <div className="flex flex-wrap items-center gap-1">
                                    <button onClick={() => toggleModal(undefined)} className="ml-auto shrink-0 flex items-center justify-center h-7 w-7 text-gray-600 rounded-md hover:bg-gray-100 duration-300">
                                        <X size={18} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 w-full  p-2 rounded-md">
                                    <div className="h-7 w-7 overflow-hidden">
                                        <img src="https://www.vebo.pl/images/items/4202/copilot_top.webp" alt="copilot-logo" className="h-full w-full object-contain object-center" />
                                    </div>
                                    <h2 className="font-medium">Agent Skills</h2>
                                </div>

                                <div className="w-full border shadow-md rounded-md p-4 flex flex-col gap-3">
                                    <h2 className="text-sm lg:text-base text-gray-700 font-semibold">Check if on-hand inventory will allow all sales orders to ship without delay</h2>

                                    <div className="flex items-center flex-wrap gap-2 text-sm">
                                        <div className="flex flex-wrap items-center gap-1">
                                            when <span className="bg-blue-100 text-blue-600 p-1 px-3 text-sm rounded-full ">any vendor</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-1">
                                            send an email with changes to <span className="bg-blue-100 text-blue-600 p-1 px-3 text-sm rounded-full ">confirm purchase order</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-1">
                                            check if resulting <span className="bg-blue-100 text-blue-600 p-1 px-3 text-sm rounded-full ">on-hand inventory</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-1">
                                            will allow <span className="bg-blue-100 text-blue-600 p-1 px-3 text-sm rounded-full ">all sales orders</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-1">
                                            to <span className="bg-blue-100 text-blue-600 p-1 px-3 text-sm rounded-full ">ship without delay</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-1">
                                            if so <span className="bg-blue-100 text-blue-600 p-1 px-3 text-sm rounded-full ">update the purchase order</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-1">
                                            to reflect th change
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 w-full">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8 overflow-hidden">
                                            <img src="https://static.cdnlogo.com/logos/m/25/microsoft-outlook.svg" alt="microsoft-outlook-logo" className="h-full w-full object-cover object-center" />
                                        </div>
                                        <h2 className="font-semibold text-gray-700">Enable email access</h2>
                                    </div>
                                    <p className="text-gray-700">Allow the agent to access email inboxes to read mail from mail from known vendors</p>

                                    <div className="flex flex-col lg:flex-row items-center gap-2 w-full py-2">
                                        <input type="text" name="" id="" className="flex-1 w-full p-2 py-1 text-gray-600 rounded-md border outline-1 outline-blue-700" />
                                        <button className="px-3 text-white bg-blue-700 hover:bg-blue-700/80 duration-300 rounded-md py-1 w-full lg:w-fit">Allow Access</button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-4 w-full ml-auto">
                                    <button className="px-3 outline outline-1 outline-transparent bg-gray-200 text-gray-400 duration-300 rounded-md py-1 w-full lg:w-fit">Activate</button>
                                    <button onClick={() => toggleModal(undefined)} className="px-3 outline outline-1 outline-gray-700 hover:bg-gray-100 text-gray-700 duration-300 rounded-md py-1 lg:w-fit">Close</button>
                                </div>

                            </div>
                        </div>
                    </Modal>

                )
            }

        </>
    )
}

export default Sidebar