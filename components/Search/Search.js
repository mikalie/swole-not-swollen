import react from "react";
import { StyledSearchSpan } from "./Search.styled";

const SearchBar = () => {
    return (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <StyledSearchSpan className="visually-hidden">Search the list</StyledSearchSpan>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search the list"
            name="s"
        />
        <button type="submit">Search</button>
    </form>

    )
}

export default SearchBar;