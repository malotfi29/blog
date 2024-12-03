import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";



function Search({query,setQuery}) {
  return (
    <form className="relative">
      <input
      value={query}
        type="text"
        name="search"
        placeholder="جستجو"
        autoComplete="off"
        className="textField__input py-3 text-xs bg-secondary-0"
        onChange={e=>setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute left-0 top-0 h-full flex items-center ml-3"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}

export default Search;
