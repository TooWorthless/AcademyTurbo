import React, { useState, useEffect, useCallback, useMemo } from "react";
import styles from './SearchList.module.css';

import { ISearchItem } from "./ISearchItem";


interface SearchListProps {
    items: ISearchItem[]
}


const SearchList: React.FC<SearchListProps> = ({ items }) => {
    const [search, setSearch] = useState<string>('');

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();

            setSearch(e.target.value);
        },
        []
    );

    const filterItems = useCallback(
        (item: ISearchItem) => {
            return item.title === search;
        },
        [search]
    );

    const filteredItems = useMemo(
        () => {
            return items.filter(filterItems);
        },
        [items, search]
    );


    return (
        <div className={styles.SearchList}>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search by title..."
                className={styles.SearchInput}
            /><br /><br />
            <h4>Found items</h4>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>ID: {item.id}; Description: {item.description}</li>
                ))}
            </ul>
        </div>

    );
}


export default SearchList;