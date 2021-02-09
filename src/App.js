import "./App.css";
import Reviews from "./Reviews/Reviews";
import "bootstrap/dist/css/bootstrap.css";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import toolkitSliceList from "./Reviews/toolkitRedux/toolkitSlice";
function App() {
  const rootReducer = combineReducers({
    state: toolkitSliceList,
  });

  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    <div className="App">
      <Provider store={store}>
        <Reviews />
      </Provider>
    </div>
  );
}

export default App;
