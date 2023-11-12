"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }
    const handleSearch = (e) => {
        setSearch(e.target.value);
        // handleSubmit(e); // For hotSearch Functionality
    }

    return (
        <form className="flex max-w-6xl mx-auto justify-between items-center px-5"
            onSubmit={handleSubmit}
        ><input className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
            value={search}
            onChange={handleSearch}
            type="text" placeholder="Search keywords..." />
            <button className="text-amber-600 disabled:text-gray-400"
                disabled={!search} type="submit">Search</button>
        </form>
    )
}
