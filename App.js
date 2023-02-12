import Main from "./components/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
