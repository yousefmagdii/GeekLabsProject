import Search from '../../ui/Search';
import { HiMiniBellAlert } from 'react-icons/hi2';
import Side from '../sideMenu/Side';

function Header() {
  return (
    <>
      <div
        className=" sticky top-0 z-50
     mt-7  flex 
       border-none
      bg-bg px-4 py-3   font-bold text-white sm:p-3"
      >
        <span className=" border border-b-0 border-l-[5px] border-r-0 border-t-0 border-l-lblue pl-4  text-5xl font-bold ">
          ALERTS
        </span>
        <Search />
        <HiMiniBellAlert className="my-auto ml-1 h-8 w-8  text-lblue " />
        <span className="absolute right-2 top-3 h-4 w-4 rounded-full bg-green-700 p-1 text-xs">
          <span className="absolute right-1 top-0">6</span>
        </span>
      </div>
    </>
  );
}

export default Header;
