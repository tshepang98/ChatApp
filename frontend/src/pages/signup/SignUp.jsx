import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex items-center justify-center max-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8">
				<h1 className="text-3xl font-bold text-center mb-6">
					Sign Up
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-semibold mb-2">
							Full Name
						</label>
						<input
							type="text"
							placeholder="John Doe"
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-semibold mb-2">
							Username
						</label>
						<input
							type="text"
							placeholder="johndoe"
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-semibold mb-2">
							Confirm Password
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-6">
						<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
					</div>

					<div className="mb-4">
						<Link to="/login" className="text-blue-500 hover:underline">
							Already have an account?
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
							{loading ? <span>Loading...</span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
