import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { createUser } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createUser(email, password);
			navigate("/account");
		} catch (error) {
			setError(error.message);
			console.log(error.message);
		}
	};

	return (
		<div className="max-w-[700px] mx-auto my-16 p-4">
			<div>
				<h1 className="text-2xl font-bold py-2">Sign up for a free account</h1>
				<p className="py-2">
					Already have an account yet?{" "}
					<Link to="/" className="underline">
						Sign in.
					</Link>
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Email Address</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						className="border p-3"
						type="email"
					/>
				</div>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Password</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						className="border p-3"
						type="password"
					/>
				</div>
				<button className="border border-purple-500 bg-purple-600 hover:bg-purple-500 w-full p-4 my-2 text-white">
					Sign Up
				</button>
				{error && (
					<div className="text-center bg-red-400 text-white p-4 border rounded-md ">
						***ERROR*** :: {error}
					</div>
				)}
			</form>
		</div>
	);
};

export default SignUp;
