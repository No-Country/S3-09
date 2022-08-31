// Providers
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProviderRoutes from "./routes/routes";

const App = () => {
    return (
        <Provider store={store}>
            <ProviderRoutes />
        </Provider>
    );
};

export default App;
