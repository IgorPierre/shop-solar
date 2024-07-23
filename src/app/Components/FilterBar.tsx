import { FaSearch } from "react-icons/fa";
import { useSearch } from "../Context/SearchContext";

export default function FilterBar(){
    const { search, setSearch, category, setCategory } = useSearch();

    return(
        <div className="flex flex-col items-start md:items-center md:flex-row gap-4 w-full mb-8">
            <div className="relative flex items-center">
                <FaSearch className="absolute left-3 text-orange" />
                <input 
                    type="text" 
                    value={search} 
                    onChange={(ev) => setSearch(ev.target.value)} 
                    placeholder="Buscar produto"
                    className="py-1 px-4 pl-10 border border-slate-300 rounded-xl focus:outline-none focus:border-dark-orange"
                />
            </div>
            <select
                value={category}
                onChange={(ev) => setCategory(ev.target.value)}
                className="ml-0 md:ml-4 p-2 py-1 border border-slate-300 rounded-xl focus:outline-none focus:border-dark-orange"
            >
                <option value="" disabled>Filtrar por categoria</option>
                <option value="">Todas</option>
                <option value="Inversores">Inversores</option>
                <option value="Módulos">Módulos</option>
                <option value="Estruturas">Estruturas</option>
                <option value="Elétricos">Elétricos</option>
            </select>
        </div>
    )
}