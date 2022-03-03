import { Provider } from "react-redux";
import Counter from "./components/Counter";
import ReduxTheory from "./containers/ReduxTheory";
import ShoppingCartPage from "./containers/ShoppingCartPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReduxTheory />
        <Counter />
        <ShoppingCartPage />
      </div>
    </Provider>
  );
}

export default App;
