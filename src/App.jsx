import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import AuthContext from "./context/AuthContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/auth/login",
		element: <LoginPage />,
	},
]);

function App() {
	const [auth, setAuth] = React.useState();
	return (
		<>
			<AuthContext.Provider value={{ auth, setAuth }}>
				<RouterProvider router={router} />
			</AuthContext.Provider>
		</>
	);
}

export default App;
