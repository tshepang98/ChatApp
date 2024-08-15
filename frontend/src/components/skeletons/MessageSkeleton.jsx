const MessageSkeleton = () => {
	return (
		<div className="flex items-start space-x-3 animate-pulse">
			<div className="w-10 h-10 bg-gray-300 rounded-full"></div>
			<div className="flex-1 space-y-2">
				<div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
				<div className="w-1/2 h-4 bg-gray-300 rounded-md"></div>
			</div>
		</div>
	);
};

export default MessageSkeleton;
