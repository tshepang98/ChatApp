import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 py-2 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message, idx) => (
					<div key={message._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
						<Message message={message} />
					</div>
				))}

			{loading && (
				<div className='flex flex-col items-center py-4'>
					{[...Array(3)].map((_, idx) => (
						<MessageSkeleton key={idx} className='mb-2' />
					))}
				</div>
			)}

			{!loading && messages.length === 0 && (
				<p className='text-center text-gray-400 py-4'>
					Send a message to start the conversation
				</p>
			)}
		</div>
	);
};

export default Messages;
