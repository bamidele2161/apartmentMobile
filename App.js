import React from "react";
import { Provider } from "react-redux";
import MainStack from "./src/navigation/mainStack";
import { store } from "./src/store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </>
  );
}
