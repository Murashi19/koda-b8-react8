/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function RegisterPage() {
	const navigate = useNavigate();
	const [users, setUsers] = useLocalStorage();

	function registerProcess(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		const { name, email, password, confirmPassword } = data;

		if (password !== confirmPassword) {
			alert("Password tidak sama");
			return;
		}
		const user = users.find((user) => user.email === email);
		if (user) {
			alert("Email sudah terdaftar");
			return;
		}
		const dataUser = {
			name,
			email,
			password,
		};

		setUsers(dataUser);
		alert("Registrasi Berhasil");
		navigate("/auth/login");

		e.target.reset();
	}
	return (
		<>
			<div className='w-full h-screen flex justify-center items-center'>
				<form
					onSubmit={registerProcess}
					className='max-w-md w-full flex flex-col gap-4'
					action=''>
					<div className='flex flex-col gap-2 justify-center'>
						<label htmlFor=''>Name</label>
						<input
							className='border border-gray-300 rounded-md p-2'
							type='name'
							name='name'
							placeholder='Nama'
						/>
					</div>

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
					<div className='flex flex-col gap-2'>
						<label htmlFor=''>Confirm Password</label>
						<input
							className='border border-gray-300 rounded-md p-2'
							type='password'
							name='confirmPassword'
							placeholder='confirmPassword'
						/>
					</div>
					<button className='bg-black text-white rounded-md p-2'>Register</button>
				</form>
			</div>
		</>
	);
}

export default RegisterPage;
