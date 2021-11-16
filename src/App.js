import "./App.css";

import { Provider } from "react-redux";
import { store } from "./app/store";

import Home from "./components/Home";

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<Home />
			</div>
		</Provider>
	);
};

export default App;
