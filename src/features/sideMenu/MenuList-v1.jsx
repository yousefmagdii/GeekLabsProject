import { HiMiniBellAlert } from 'react-icons/hi2';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoSettings } from 'react-icons/io5';
import { FaRegFolderOpen } from 'react-icons/fa6';
import { AiOutlineStock } from 'react-icons/ai';

function MenuList({ ishover }) {
  return (
    <>
      <ul className="mx-auto font-semibold duration-700">
        {!ishover ? (
          <>
            <li className="pt-3 ">
              <HiMiniBellAlert className="h-5 w-5  text-white" />
            </li>
            <li className="pt-5">
              <FaGraduationCap className="h-5 w-5  text-white" />
            </li>
            <li className="pt-5">
              <IoSettings className="h-5 w-5  text-gray-500" />
            </li>
            <li className="pt-5">
              {' '}
              <FaRegFolderOpen className="h-5 w-5  text-gray-500" />
            </li>
            <li className="pt-5">
              <AiOutlineStock className="h-5 w-5  text-gray-500" />
            </li>
            <li className="pt-5"></li>

            <div className=" flex flex-col ">
              <img
                src="man.png"
                alt="User"
                className="absolute bottom-4  left-3  mx-auto h-10 w-10 content-end justify-end"
              />
            </div>
          </>
        ) : (
          <div className="    transition-transform duration-700">
            <li className=" group mx-2 flex cursor-pointer pt-5">
              <HiMiniBellAlert className="my-auto h-4 w-4 text-white group-hover:text-lblue" />
              <p className=" pl-3 text-lg text-white group-hover:text-lblue">
                {' '}
                Alerts
              </p>
            </li>{' '}
            <li className="group mx-2 flex cursor-pointer pt-5">
              <FaGraduationCap className=" my-auto h-4 w-4 text-white duration-700 group-hover:text-lblue" />
              <p className="pl-3 text-lg text-white duration-500 group-hover:text-lblue">
                {' '}
                Training
              </p>
            </li>
            <li className=" group mx-2 flex cursor-pointer pt-5">
              <IoSettings className="my-auto h-4 w-4 text-gray-500 " />
              <p className="pl-3 text-lg text-gray-500">Automation</p>
            </li>{' '}
            <li className="mx-2 flex cursor-pointer pt-5">
              <FaRegFolderOpen className="my-auto h-4 w-4 text-gray-500" />
              <p className="pl-3 text-lg text-gray-500">Portfolio</p>
            </li>
            <li className="mx-2 flex cursor-pointer pt-5">
              <AiOutlineStock className="my-auto h-4 w-4 text-gray-500" />
              <p className="pl-3 text-lg text-gray-500"> Trading</p>
            </li>
            <div className=" flex  ">
              <img
                src="man.png"
                alt="User"
                className="absolute bottom-4  left-3  mx-auto h-10 w-10 content-end justify-end"
              />{' '}
              <span className="w-30 absolute bottom-1  left-16   h-10 content-end justify-end text-white">
                Youssef
              </span>
            </div>
          </div>
        )}
      </ul>
      {/* <ul className="mx-auto ">
        <li className=" mx-2 flex pt-5">
          <HiMiniBellAlert className="my-auto h-3 w-3 text-white" />
          <p className=" pl-3 text-xs text-white"> Alerts</p>
        </li>{' '}
        <li className="mx-2 flex pt-5">
          <FaGraduationCap className=" my-auto h-3 w-3 text-white" />
          <p className="pl-3 text-xs text-white"> Training</p>
        </li>
        <li className=" mx-2 flex pt-5">
          <IoSettings className="my-auto h-3 w-3 text-gray-500" />
          <p className="pl-3 text-xs text-gray-500">Automation</p>
        </li>{' '}
        <li className="mx-2 flex pt-5">
          <FaRegFolderOpen className="my-auto h-3 w-3 text-gray-500" />
          <p className="pl-3 text-xs text-gray-500">Portfolio</p>
        </li>
        <li className="mx-2 flex pt-5">
          <AiOutlineStock className="my-auto h-3 w-3 text-gray-500" />
          <p className="pl-3 text-xs text-gray-500"> Trading</p>
        </li>
      </ul> */}
    </>
  );
}

export default MenuList;
