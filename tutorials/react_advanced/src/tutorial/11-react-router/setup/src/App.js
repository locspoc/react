import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
	const [user, setUser] = useState(null);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="products" element={<Products />} />
					<Route
						path="products/:productId"
						element={<SingleProduct />}
					/>
					<Route
						path="login"
						element={<Login setUser={setUser}></Login>}
					/>
					<Route
						path="dashboard"
						element={<Dashboard user={user} />}
					/>
					<Route path="*" element={<Error />} />
				</Route>
				<Route path="dashboard" element={<div>dashboard</div>}>
					<Route path="stats" element={<div>stats</div>} />
				</Route>
			</Routes>
			<footer>our footer</footer>
		</BrowserRouter>
	);
}

export default App;