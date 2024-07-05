import { createContext, useContext, useState, ReactNode } from 'react';

interface Endpoint {
    name: string;
    path: string;
}

interface EndpointsContextType {
    endpoints: Endpoint[];
    registerEndpoint: (endpoint: Endpoint) => void;
}

const EndpointsContext = createContext<EndpointsContextType | undefined>(undefined);

export const useEndpoints = (): EndpointsContextType => {
    const context = useContext(EndpointsContext);
    if (!context) {
        throw new Error('useEndpoints deve ser usado dentro de um EndpointsProvider');
    }
    return context;
};

interface EndpointsProviderProps {
    children: ReactNode;
}

export const EndpointsProvider = ({ children }: EndpointsProviderProps) => {
    const [endpoints, setEndpoints] = useState<Endpoint[]>([]);

    const registerEndpoint = (endpoint: Endpoint) => {
        setEndpoints((prevEndpoints) => [...prevEndpoints, endpoint]);
    };

    return (
        <EndpointsContext.Provider value={{ endpoints, registerEndpoint }}>
            {children}
        </EndpointsContext.Provider>
    );
};

