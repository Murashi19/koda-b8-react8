import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function HomePage() {
	const { auth, setAuth } = React.useContext(AuthContext);
	const navigate = useNavigate();

	function handleLogout() {
		setAuth(null);
		navigate("/auth/login");
	}

	return (
		<div className='w-full max-w-md mx-auto h-screen flex flex-col justify-center items-center'>
			{auth ? (
				<>
					<p>Selamat Datang! {auth.name}</p>

					<button
						onClick={handleLogout}
						className='w-full bg-black text-white rounded-md p-2'>
						Logout
					</button>
				</>
			) : (
				<>
					<p>Anda belum login</p>

					<button
						onClick={() => navigate("/auth/login")}
						className='w-full bg-black text-white rounded-md p-2'>
						Login
					</button>
				</>
			)}
		</div>
	);
}

export default HomePage;
