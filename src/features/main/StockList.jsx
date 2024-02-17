import { useState } from 'react';
import { GiPriceTag } from 'react-icons/gi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineSsidChart } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi2';
import { FaMoneyBills } from 'react-icons/fa6';

function StockList({ stock, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <li
        onClick={toggleCollapse}
        className={`mx-2 mb-0  mt-4 flex h-12 w-[100%] justify-between rounded-md bg-lgray  bg-opacity-80 p-2 font-normal text-white ${isCollapsed ? '!bg-[#53ACFF] font-semibold' : ''}`}
      >
        <div className="flex w-[25%] justify-center">
          <GiPriceTag className="mx-5 my-auto h-7 w-7 text-white" />
          <span className="my-auto w-[50%] text-xs">{stock.name}</span>
        </div>
        <div className="flex w-[25%] justify-center  border-l-2 border-sborder">
          <HiDocumentText className="mx-5 my-auto h-7 w-7 text-white " />
          <span className="my-auto w-[40%] text-xs">{stock.price}</span>
        </div>
        <div className="flex w-[25%] justify-center border-x-2 border-sborder">
          <MdOutlineSsidChart className="mx-5 my-auto h-7 w-7 text-white " />
          <span
            className={` my-auto w-[40%] text-xs ${stock.color === 'red' ? 'text-orange-700' : 'text-green-700'}`}
          >
            -0.25 %
          </span>
        </div>
        <div className="flex w-[25%] justify-center ">
          {stock.risk === 'Low' ? (
            <FaMoneyBillAlt className="mx-5 my-auto h-7 w-7 text-white" />
          ) : (
            <FaMoneyBills className="mx-5 my-auto h-7 w-7 text-white" />
          )}
          <span className="my-auto w-[40%]  text-xs">{stock.risk} Risk</span>
        </div>
      </li>
      {isCollapsed && <div className="block w-full ">{children}</div>}
    </>
  );
}

export default StockList;
