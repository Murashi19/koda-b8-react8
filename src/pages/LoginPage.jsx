import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const users = [
	{
		name: "zidan",
		email: "zidan@mail.com",
		password: "zidan",
	},
	{
		name: "ahmad",
		email: "ahmad@mail.com",
		password: "ahmad",
	},
];

function LoginPage() {
	const navigate = useNavigate();
	const { setAuth } = React.useContext(AuthContext);
	function loginProcess(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		const email = data.get("email");
		const password = data.get("password");
		const user = users.find((user) => user.email === email && user.password === password);
		if (user) {
			setAuth(user);
			navigate("/");
		} else {
			alert("Email atau Password Salah");
		}
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
