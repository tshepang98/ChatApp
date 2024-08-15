import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// Cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex flex-col w-full md:w-[450px] bg-gray-800 rounded-lg h-[90vh]'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2 rounded-t-lg'>
						<span className='label-text text-gray-300 text-sm md:text-base'>To:</span>{" "}
						<span className='text-gray-900 font-bold text-sm md:text-base'>{selectedConversation.fullName}</span>
					</div>
					{/* Messages Section */}
					<div className='flex-1 overflow-auto p-4'>
						<Messages />
					</div>
					{/* Input Section */}
					<div className='bg-gray-700 p-4'>
						<MessageInput />
					</div>
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full p-4'>
			<div className='text-center text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p className='text-sm md:text-lg'>Welcome {authUser.fullName}</p>
				<TiMessages className='text-4xl md:text-6xl' />
			</div>
		</div>
	);
};
