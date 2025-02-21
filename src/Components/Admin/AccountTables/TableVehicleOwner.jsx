import React, { lazy } from "react";
const Paginations = lazy(() => import("../Paginations"));

const TableVehicleOwner = () => {
  return (
    <React.Fragment>
      <h1 className="w-full py-4 text-center font-Poppins text-xl font-medium md:text-2xl">
        Vehicle Owner Accounts
      </h1>
      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">First Name</span>
        </div>
        <div className="w-full text-center">
          <span className="">Address</span>
        </div>
        <div className="w-full text-center">
          <span className="">Income(Rs.)</span>
        </div>
        <div className="w-full text-center">
          <span className="">Email</span>
        </div>
        <div className="w-full text-center">
          <span className="">Option</span>
        </div>
      </div>
      {Array.from(Array(10).keys()).map((i) => {
        return (
          <div
            key={i}
            className="text-md group flex flex-col justify-center space-y-2 rounded-sm bg-white ring-[0.5px] ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:flex-row md:items-center md:justify-between md:space-y-0"
          >
            <p className="flex w-full truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
              <span className="block md:hidden">First Name :&ensp;</span>
              Kavindu
            </p>
            <p className="flex w-full truncate px-4 py-2">
              <span className="block md:hidden">Address :&ensp;</span>
              526/A/1/1,Kiribathgoda
            </p>
            <p className="flex w-full truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
              <span className="block md:hidden">Income : Rs.&ensp;</span>
              153,700.00
            </p>
            <p className="flex w-full truncate px-4 py-2">
              <span className="block md:hidden">Email :&ensp;</span>
              kavindulakshan2980@gmail.com
            </p>
            <div className="flex w-full justify-end truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
              <button className=" px-8 font-medium text-sky-500 duration-300 ease-in hover:text-sky-700">
                View
              </button>
            </div>
          </div>
        );
      })}
      <Paginations />

      <div className="relative flex justify-center py-6">
        <button className="w-fit rounded-md bg-sky-600 px-8 py-1 font-medium text-white duration-300 ease-in hover:bg-sky-700 dark:bg-cyan-600 dark:hover:bg-cyan-800">
          View Deactivated Vehicle Owner Accounts
        </button>
      </div>
    </React.Fragment>
  );
};
export default TableVehicleOwner;
