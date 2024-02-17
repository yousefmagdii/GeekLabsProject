import { HiMiniBellAlert } from 'react-icons/hi2';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoSettings } from 'react-icons/io5';
import { FaRegFolderOpen } from 'react-icons/fa6';
import { AiOutlineStock } from 'react-icons/ai';
import { useState } from 'react';

function MenuList({ ishover }) {
  return (
    <>
      <ul
        className={`mx-auto font-semibold duration-700 ${!ishover && 'w-44 transition-all duration-700'}`}
      >
        <div className=" mx-auto transition-all">
          <li className=" mx-2 flex pt-5">
            <HiMiniBellAlert
              className={`my-auto ${!ishover ? 'h-4 w-4' : 'h-5 w-5'} text-white`}
            />
            <p className=" pl-3 text-lg text-white"> {!ishover && 'Alerts'}</p>
          </li>{' '}
          <li className="mx-2 flex pt-5">
            <FaGraduationCap
              className={`my-auto ${!ishover ? 'h-4 w-4' : 'h-5 w-5'} text-white`}
            />
            <p className="pl-3 text-lg text-white">{!ishover && 'Training'} </p>
          </li>
          <li className=" mx-2 flex pt-5">
            <IoSettings
              className={`my-auto ${!ishover ? 'h-4 w-4' : 'h-5 w-5'} text-gray-500`}
            />
            <p className="pl-3 text-lg text-gray-500">
              {!ishover && 'Automation'}
            </p>
          </li>{' '}
          <li className="mx-2 flex pt-5">
            <FaRegFolderOpen
              className={`my-auto ${!ishover ? 'h-4 w-4' : 'h-5 w-5'} text-gray-500`}
            />
            <p className="pl-3 text-lg text-gray-500">
              {!ishover && 'Portfolio'}
            </p>
          </li>
          <li className="mx-2 flex pt-5">
            <AiOutlineStock
              className={`my-auto ${!ishover ? 'h-4 w-4' : 'h-5 w-5'} text-gray-500`}
            />
            <p className="pl-3 text-lg text-gray-500">
              {!ishover && 'Trading'}{' '}
            </p>
          </li>
          <div className=" flex flex-col ">
            <img
              src="public/man.png"
              alt="User"
              className="absolute bottom-4  left-3  mx-auto h-10 w-10 content-end justify-end"
            />
          </div>
        </div>
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
