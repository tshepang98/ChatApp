import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex space-x-6 mb-6">
			<div className="flex items-center">
				<input
					type="checkbox"
					id="male"
					checked={selectedGender === "male"}
					onChange={() => onCheckboxChange("male")}
					className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
				/>
				<label htmlFor="male" className="ml-2 text-gray-700 text-sm font-semibold">
					Male
				</label>
			</div>

			<div className="flex items-center">
				<input
					type="checkbox"
					id="female"
					checked={selectedGender === "female"}
					onChange={() => onCheckboxChange("female")}
					className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
				/>
				<label htmlFor="female" className="ml-2 text-gray-700 text-sm font-semibold">
					Female
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
