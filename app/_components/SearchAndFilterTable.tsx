import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const initialData = [
    { id: 1, name: "Winford Asha", topic: "Cafe A100 for commercial use", status: "New", createdAt: "2023-12-01" },
    { id: 2, name: "Josia Love", topic: "Upgrading service plan", status: "New", createdAt: "2023-11-30" },
    { id: 3, name: "Harison Cuttise", topic: "New roaster in distribution facility", status: "New", createdAt: "2023-12-05" },
    { id: 4, name: "Jermaine Berret", topic: "Concern on current machines", status: "New", createdAt: "2023-12-03" },
    { id: 5, name: "Alex Baker", topic: "Expanding business", status: "New", createdAt: "2023-11-28" },
];

const SearchAndFilterTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
    const [filteredData, setFilteredData] = useState(initialData);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = initialData.filter((item) =>
            item.name.toLowerCase().includes(value) ||
            item.topic.toLowerCase().includes(value) ||
            item.status.toLowerCase().includes(value) ||
            item.createdAt.includes(value) ||
            item.id.toString().includes(value)
        );
        setFilteredData(filtered);
    };

    const handleSort = (key: keyof typeof initialData[0]) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        setSortConfig({ key, direction });

        const sortedData = [...filteredData].sort((a, b) => {
            const aValue = a[key];
            const bValue = b[key];

            if (aValue < bValue) return direction === "ascending" ? -1 : 1;
            if (aValue > bValue) return direction === "ascending" ? 1 : -1;
            return 0;
        });

        setFilteredData(sortedData);
    };


    return (
        <>

            <div className="flex flex-col gap-4 my-5">
                <input
                    value={searchTerm}
                    onChange={handleSearch}
                    type="text" name="" id="" placeholder="Sort filter and search with copilot" className="w-full lg:w-[40%] border p-1 rounded-md text-sm text-black/80 px-3 focus-visible:outline focus-visible:outline-blue-500 duration-300 " />
                <div className="overflow-x-auto mb-12">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr className="text-sm text-gray-500">
                                {["name", "topic", "status", "created on"].map((heading) => (
                                    <th key={heading}
                                        className="p-2 text-left cursor-pointer text-nowrap"
                                        // @ts-expect-error: remove strict type check
                                        onClick={() => handleSort(heading)}
                                    >
                                        <div className="flex items-center gap-1  text-nowrap">
                                            {heading.charAt(0).toUpperCase() + heading.slice(1)}
                                            {sortConfig.key === heading && (
                                                <span className="flex items-center gap-1">
                                                    {sortConfig.direction === "ascending" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                </span>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {filteredData.map((row) => (
                                <tr key={row.id} className="border-b">
                                    <td className="p-2 flex items-center gap-2 text-nowrap">
                                        <input type="checkbox" name="" id="" className="p-2" />
                                        <span className="text-blue-500 text-sm">{row.name}</span>
                                    </td>
                                    <td className="p-2 text-nowrap">{row.topic}</td>
                                    <td className="p-2 text-nowrap">{row.status}</td>
                                    <td className="p-2 text-nowrap">{row.createdAt}</td>
                                </tr>
                            ))}
                            {filteredData.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-4 text-center">
                                        No results found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SearchAndFilterTable