import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return; // Prevent sending empty messages
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center p-4 bg-gray-100 border-t border-gray-300">
			<input
				type="text"
				placeholder="Send a message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<button
				type="submit"
				disabled={loading}
				className={`ml-2 p-2 rounded-r-md ${
					loading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
				} text-white`}
			>
				{loading ? <div>Loading...</div> : <BsSend />}
			</button>
		</form>
	);
};

export default MessageInput;
