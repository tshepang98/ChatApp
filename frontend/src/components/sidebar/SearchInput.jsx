import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm p-2 w-full max-w-md"
		>
			<input
				type='text'
				placeholder='Search…'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="flex-1 bg-transparent outline-none placeholder-gray-500 text-gray-700 px-4 py-2 rounded-lg"
			/>
			<button
				type='submit'
				className="ml-2 p-2 text-blue-500 hover:text-blue-700 focus:outline-none"
			>
				<IoSearchSharp className="text-xl" />
			</button>
		</form>
	);
};

export default SearchInput;
