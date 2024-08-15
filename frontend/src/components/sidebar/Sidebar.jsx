import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col min-w-[200px] md:min-w-[250px] lg:min-w-[300px] bg-gray-900'>
            <SearchInput />
            <div className='divider my-3 border-slate-600'></div>
            <div className='flex-1 overflow-auto'>
                <Conversations />
            </div>
            <LogoutButton className='mt-3' />
        </div>
    );
};

export default Sidebar;
