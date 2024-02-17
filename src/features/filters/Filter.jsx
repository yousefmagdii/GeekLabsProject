import { CiSearch } from 'react-icons/ci';
import { PiHeartbeat } from 'react-icons/pi';
import { FaRecycle } from 'react-icons/fa6';
import { SlEnergy } from 'react-icons/sl';
import { CiCreditCard1 } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { BsHouse } from 'react-icons/bs';
import { GiFlexibleLamp } from 'react-icons/gi';
import { PiWechatLogoBold } from 'react-icons/pi';
import { GrVmMaintenance } from 'react-icons/gr';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import DropdownButton from './DropdownButton';

import { useState } from 'react';
import MenuUp from './MenuUp';
import FilteredValues from './FilteredValues';

function Filter() {
  const [showMenuIndustry, setShowMenuIndustry] = useState('true');
  const [showMenuMarketCap, setShowMenuMarketCap] = useState('true');
  const [showMenuRisk, setShowMenuRisk] = useState('true');

  const [appliedFilters, setAppliedFilters] = useState([]);

  const [activeButton, setActiveButton] = useState('Mid');
  const [activeButtonStrategy, setActiveButtonStrategy] = useState('Merger');

  const handleButtonClickRisk = (risk) => {
    setActiveButton(risk);
  };
  const handleButtonClickStrategy = (strategy) => {
    setActiveButtonStrategy(strategy);
  };
  const handleFilter = (e) => {
    if (typeof e.target.value === 'string') {
      setAppliedFilters([...appliedFilters, e.target.value]);
    }
  };
  const handleRemove = (filterToRemove) => {
    setAppliedFilters(
      appliedFilters.filter((filter) => filter !== filterToRemove),
    );
  };
  const handleClearAll = () => {
    setAppliedFilters([]);
  };

  console.log([...new Set(appliedFilters)]);

  const filteredValue = [...new Set(appliedFilters)];
  return (
    <>
      <div className="hide-filter absolute right-0 mt-7 h-auto w-96  flex-col rounded-md bg-sidebg p-3 max-md:hidden">
        <div className="flex">
          <h2 className="m-auto  block text-[24px] text-white">Filters</h2>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-grayfont text-sm">Filters Applied</p>
          </div>
          <div>
            <button onClick={handleClearAll} className="text-sm text-white">
              Clear All
            </button>
          </div>
        </div>
        <div className=" inline-block h-auto min-h-11 w-auto  min-w-full rounded-md bg-bg p-2">
          {filteredValue.map((filter) => (
            <FilteredValues
              key={filter}
              filter={filter}
              handleRemove={handleRemove}
            />
          ))}
        </div>
        <div className="mt-2 rounded-md bg-bg p-3">
          <h3 className="text-white ">Stock</h3>
          <span className="relative flex justify-between ">
            <input
              type="search"
              placeholder="$ Ticker"
              className="inline w-80 rounded-sm bg-lgray px-3 py-1 placeholder:text-sm placeholder:text-[#bababa]"
            />
            <span className="absolute right-8 top-2 text-[#bababa] ">
              <CiSearch />
            </span>
          </span>

          <span className=" flex flex-row ">
            {showMenuIndustry ? (
              <DropdownButton
                className="relative bottom-[-7px]"
                setShowMenuIndustry={setShowMenuIndustry}
                showMenuIndustry={showMenuIndustry}
                filterType={1}
              />
            ) : (
              <MenuUp
                setShowMenuIndustry={setShowMenuIndustry}
                showMenuIndustry={showMenuIndustry}
                filterType={1}
              />
            )}

            <h3 className="mt-3 pl-2 font-medium  text-slate-100">Industry</h3>
          </span>

          <div
            className={`  flex ${!showMenuIndustry ? 'hidden' : ''}`}
            onClick={handleFilter}
          >
            <div className="ml-2 mt-2 h-auto w-[0.1px] rounded-lg bg-slate-400"></div>
            <div className=" ml-2 mt-2 flex flex-row ">
              <div className=" flex  flex-col text-white ">
                <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold ">
                  <span className="my-auto">
                    <PiHeartbeat />
                  </span>
                  <button
                    className="my-1  ml-1 text-xs text-white"
                    value="Health care"
                  >
                    Health care
                  </button>
                </div>
                <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                  <span className="my-auto">
                    <FaRecycle />
                  </span>
                  <button
                    value="Materials"
                    className="my-1 ml-1 text-xs text-white"
                  >
                    Materials
                  </button>
                </div>
                <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                  <span className="my-auto">
                    <SlEnergy />
                  </span>
                  <button
                    value="Energy"
                    className="my-1 ml-1 text-xs text-white"
                  >
                    Energy
                  </button>
                </div>
                <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue">
                  <span className="my-auto">
                    <CiCreditCard1 />
                  </span>
                  <button
                    value="Consumer Discretionary"
                    className="my-1 ml-1  text-xs text-white"
                  >
                    Consumer Discretionary
                  </button>
                </div>
                <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                  <span className="my-auto">
                    <BsCart3 />
                  </span>
                  <button
                    value="Consumer Staples"
                    className="my-1 ml-1 text-xs text-white"
                  >
                    Consumer Staples
                  </button>
                </div>
                <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                  <span className="my-auto">
                    <BsHouse />
                  </span>
                  <button
                    value="Real Estate"
                    className="my-1 ml-1 text-xs text-white"
                  >
                    Real Estate
                  </button>
                </div>
              </div>
            </div>
            <div className="ml-2 mt-2 h-28 w-[0.1px] rounded-lg bg-slate-400"></div>

            <div className=" ml-3 mt-1 flex flex-col  text-white">
              <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                <span className="my-auto">
                  <GiFlexibleLamp />
                </span>
                <button value="IT" className="my-1 ml-1 text-xs text-white">
                  IT
                </button>
              </div>
              <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                <span className="my-auto">
                  <PiWechatLogoBold />
                </span>
                <button
                  value="Communication"
                  className="my-1 ml-1 text-xs text-white"
                >
                  Communication
                </button>
              </div>
              <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                <span className="my-auto">
                  <PiHeartbeat />
                </span>
                <button
                  value="Industrials"
                  className="my-1 ml-1 text-xs text-white"
                >
                  Industrials
                </button>
              </div>
              <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                <span className="my-auto">
                  <GrVmMaintenance />
                </span>
                <button
                  value="Utitilities"
                  className="my-1 ml-1 text-xs text-white"
                >
                  Utitilities
                </button>
              </div>
              <div className="flex cursor-pointer rounded-sm pl-1 hover:bg-lblue hover:font-semibold">
                <span className="my-auto">
                  <RiMoneyDollarCircleFill />
                </span>
                <button
                  value="Financials"
                  className="my-1 ml-1 text-xs text-white"
                >
                  Financials
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className=" mt-3 flex-col pl-2  ">
              <span className="flex flex-row">
                {showMenuMarketCap ? (
                  <DropdownButton
                    setShowMenuMarketCap={setShowMenuMarketCap}
                    showMenuMarketCap={showMenuMarketCap}
                    filterType={2}
                  />
                ) : (
                  <MenuUp
                    setShowMenuMarketCap={setShowMenuMarketCap}
                    showMenuMarketCap={showMenuMarketCap}
                    filterType={2}
                  />
                )}
                <p className="font-medium text-white">Market Cap</p>
              </span>

              <div className={`ml-4 ${!showMenuMarketCap ? 'hidden' : ''}`}>
                <div>
                  <input type="radio" value="micro" name="marketCap-checkbox" />
                  <label className="ml-1 font-extralight text-white">
                    Micro
                  </label>
                </div>
                <div>
                  <input type="radio" value="small" name="marketCap-checkbox" />
                  <label className="ml-1  font-extralight text-white">
                    Small
                  </label>
                </div>
                <span>
                  <input type="radio" value="large" name="marketCap-checkbox" />
                  <label className="ml-1  font-extralight text-white">
                    Large
                  </label>
                </span>
              </div>
            </div>
            <div className="mt-3 pl-2 ">
              <span className="flex flex-row">
                {showMenuRisk ? (
                  <DropdownButton
                    setShowMenuRisk={setShowMenuRisk}
                    showMenuRisk={showMenuRisk}
                    filterType={3}
                  />
                ) : (
                  <MenuUp
                    setShowMenuRisk={setShowMenuRisk}
                    showMenuRisk={showMenuRisk}
                    filterType={3}
                  />
                )}

                <p className="font-medium text-white">Risk Level</p>
              </span>
              <span className={` ${!showMenuRisk ? 'hidden' : ''}`}>
                <div>
                  <input
                    type="radio"
                    value="lowRisk"
                    name="marketCap-checkbox2"
                  />
                  <label className="ml-1 font-extralight text-white">
                    Low Risk
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    value="midRisk"
                    name="marketCap-checkbox2"
                  />
                  <label className="ml-1 font-extralight text-white">
                    Mid Risk
                  </label>
                </div>
                <span>
                  <input
                    type="radio"
                    value="highRisk"
                    name="marketCap-checkbox2"
                    className=""
                  />
                  <label className="ml-1  font-extralight text-white">
                    High Risk
                  </label>
                </span>
              </span>
            </div>
          </div>

          <div className="mt-3 flex justify-between">
            <div className="ml-3 ">
              <p className="relative text-center font-medium text-white">
                Strategy
              </p>
              {/* <span className=" flex flex-col  font-light  text-white">
                <button className="text-xs">Big Option Buys</button>
                <button className="rounded-sm bg-lblue p-1 text-xs ">
                  Merger Arbitrage
                </button>
                <button className="text-xs">Short Reports</button>
              </span> */}
              <span className="flex flex-col font-light text-white">
                <button
                  className={`p-1 text-xs ${activeButtonStrategy === 'Big' ? 'rounded-sm bg-lblue  opacity-100' : 'opacity-40'}`}
                  onClick={() => handleButtonClickStrategy('Big')}
                >
                  Big Option Buys
                </button>
                <button
                  className={` p-1 text-xs ${activeButtonStrategy === 'Merger' ? 'rounded-sm bg-lblue opacity-100' : 'opacity-40'}`}
                  onClick={() => handleButtonClickStrategy('Merger')}
                >
                  Merger Arbitrage
                </button>
                <button
                  className={`p-1 text-xs ${activeButtonStrategy === 'Short' ? 'rounded-sm bg-lblue  opacity-100' : 'opacity-40'}`}
                  onClick={() => handleButtonClickStrategy('Short')}
                >
                  Short Reports
                </button>
              </span>
            </div>

            <div className="mr-9">
              <p className="text-center font-medium text-white">Asset</p>
              <span className="flex flex-col font-light text-white">
                <button
                  className={`p-1 text-xs ${activeButton === 'Low' ? 'rounded-sm bg-lblue  opacity-100' : 'opacity-40'}`}
                  onClick={() => handleButtonClickRisk('Low')}
                >
                  Low Risk
                </button>
                <button
                  className={` p-1 text-xs ${activeButton === 'Mid' ? 'rounded-sm bg-lblue opacity-100' : 'opacity-40'}`}
                  onClick={() => handleButtonClickRisk('Mid')}
                >
                  Mid Risk
                </button>
                <button
                  className={`p-1 text-xs ${activeButton === 'High' ? 'rounded-sm bg-lblue  opacity-100' : 'opacity-40'}`}
                  onClick={() => handleButtonClickRisk('High')}
                >
                  High Risk
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-1 mt-4 flex justify-center">
          <button className="  rounded-md bg-lblue px-10 py-2 text-white  ">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
