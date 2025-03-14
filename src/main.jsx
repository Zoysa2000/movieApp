
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from "./Index.jsx";
import {Provider} from "react-redux";
import {persistor} from "./store.jsx";
import { PersistGate} from 'redux-persist/integration/react'
import {store} from "./store.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Index/>
            </PersistGate>
        </Provider>,
    </StrictMode>,
)
