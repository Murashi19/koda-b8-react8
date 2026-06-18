import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import useLocalStorage from "../hooks/useLocalStorage";

function LoginPage() {
	const navigate = useNavigate();
	const [users] = useLocalStorage();
	const { setAuth } = React.useContext(AuthContext);
	function loginProcess(e) {
		e.preventDefault();

		const formData = new FormData(e.target);

		const { email, password } = Object.fromEntries(formData.entries());

		if (!email || !password) {
			alert("Email dan Password wajib diisi");
			return;
		}

		const user = users.find((user) => user.email === email && user.password === password);

		if (!user) {
			alert("Email atau Password salah");
			return;
		}

		setAuth(user);

		alert("Login berhasil");

		navigate("/");
	}
	return (
		<>
			<div className='w-full h-screen flex justify-center items-center'>
				<form
					onSubmit={loginProcess}
					className='max-w-md w-full flex flex-col gap-4'
					action=''>
					<div className='flex flex-col gap-2 justify-center'>
						<label htmlFor=''>Email</label>
						<input
							className='border border-gray-300 rounded-md p-2'
							type='email'
							name='email'
							placeholder='Email'
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<label htmlFor=''>Password</label>
						<input
							className='border border-gray-300 rounded-md p-2'
							type='password'
							name='password'
							placeholder='Password'
						/>
					</div>
					<button className='bg-black text-white rounded-md p-2'>Login</button>
				</form>
			</div>
		</>
	);
}

export default LoginPage;
