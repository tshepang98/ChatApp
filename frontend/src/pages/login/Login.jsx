import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex items-center justify-center max-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8">
				<h1 className="text-3xl font-bold text-center mb-6">
					Login
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-semibold mb-2">
							Username
						</label>
						<input
							type="text"
							placeholder="Enter username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-semibold mb-2">
							Password
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<Link to="/signup" className="text-blue-500 hover:underline">
							{"Don't"} have an account?
						</Link>
					</div>

					<div>
						<button
							type="submit"
							disabled={loading}
							className={`w-full py-2 px-4 rounded-md ${
								loading
									? "bg-gray-400 cursor-not-allowed"
									: "bg-blue-500 hover:bg-blue-600"
							} text-white font-semibold`}
						>
							{loading ? <span>Loading...</span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
