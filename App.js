import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./src/config/ReduxStore";
import AppStack from "./src/navigation/appNavigation";
import { enableLatestRenderer } from "react-native-maps";

enableLatestRenderer();

const App = () => {
  return (
    <React.Fragment>
      <Provider store = {store} >
        <PersistGate loading = {null} persistor = {persistor}>
          <AppStack />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
};

export default App;