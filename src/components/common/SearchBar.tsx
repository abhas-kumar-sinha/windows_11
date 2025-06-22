import { SearchGlass } from "../../lib/IconLibrary";

const SearchBar = () => {
    return (
        <div className="searchBar">
            <SearchGlass />
            <input
                type="text"
                placeholder="Search"
                className="focus:outline-none text-sm mb-0.5"
            />
        </div>
    );
};

export default SearchBar;
