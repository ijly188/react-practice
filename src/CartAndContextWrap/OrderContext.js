import { createContext } from 'react';

const context = createContext({
    orders: [],
    addOrder: () => {},
});

export default context;