import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UserProvider} from './context-api/User';
import {ItemsProvider} from './context-api/Items';
import { CategoriesProvider } from './context-api/Categories';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
    <ItemsProvider>
    <CategoriesProvider>
        <App />
    </CategoriesProvider>
    </ItemsProvider>
    </UserProvider>
);
