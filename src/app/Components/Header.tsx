"use client"; 
import Link from "next/link";
import { useSearch } from "../Context/SearchContext";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const { search, setSearch } = useSearch();

  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto p-4">
      <Link href='/'>
        <img className="w-32" src="images/logo.png" alt="Logo" />
      </Link>

      <div className="relative flex items-center">
        <input 
          type="text" 
          value={search} 
          onChange={(ev) => setSearch(ev.target.value)} 
          placeholder="Buscar produto"
          className="pl-10 pr-4 py-1 border border-gray-300 rounded-xl w-full focus:outline-none focus:border-slate-600"
        />
        <FaSearch className="absolute left-3 text-orange" />
      </div>
    </header>
  );
}
