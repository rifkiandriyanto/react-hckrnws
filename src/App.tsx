import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { fetchSlice } from "./action/service";
import Home from "./home";

const App = () => {
  return (
    <ApiProvider api={fetchSlice}>
      <Home />
    </ApiProvider>
  );
};

export default App;
