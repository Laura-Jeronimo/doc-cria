import React, { useEffect } from 'react';
import { useSearch } from 'components/SearchBar/SearchContext';

const SomeComponent = () => {
    const { setGlobalItems } = useSearch();

    const componentItems = ["Item1", "Item2", "Item3"];

    useEffect(() => {
        setGlobalItems(prevItems => [...prevItems, ...componentItems]);
    }, [setGlobalItems]);

    return (
        <div>
            {componentItems.map(item => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
};

export default SomeComponent;
