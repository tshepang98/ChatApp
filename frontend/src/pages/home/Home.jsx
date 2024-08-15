import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row h-screen md:h-[450px] lg:h-[550px] rounded-lg bg-gray-950'>
            <Sidebar className='md:w-1/4 lg:w-1/5' />
            <div className='flex-1 overflow-auto'>
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
