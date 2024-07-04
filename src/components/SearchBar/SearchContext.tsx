import React, { createContext, useContext, useState, useEffect } from 'react';

interface SearchContextProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    globalItems: string[];
    setGlobalItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [search, setSearch] = useState('');
    const [globalItems, setGlobalItems] = useState<string[]>([]);

    return (
        <SearchContext.Provider value={{ search, setSearch, globalItems, setGlobalItems }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
