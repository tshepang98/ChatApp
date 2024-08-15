import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-y-auto h-full'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading && (
				<div className='flex justify-center items-center py-2'>
					<span className='loading loading-spinner'></span>
				</div>
			)}
		</div>
	);
};

export default Conversations;
