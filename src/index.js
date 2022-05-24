import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store"
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();
const persister = persistStore(store);

root.render(
    <Provider store={store}>
        <PersistGate
            loading={<div>Loading...</div>}
            persistor={persister}>
            <App />
        </PersistGate>
    </Provider>
);