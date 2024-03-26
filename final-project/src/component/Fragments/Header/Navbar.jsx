import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        // <nav className="fixed top-0 left-0 right-0 bg-transparent text-white  ">
        <nav className="fixed max-w-screen mx-auto top-0 left-0 right-0 bg-slate-900 text-white py-5 px-24 z-50">
            <div className="flex flex-wrap items-center justify-between">
                <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-3xl font-header font-extrabold whitespace-nowrap  ">Dream <span className="text-primary">Job</span></span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <div className="font-medium font-default flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
                        <Link to="/" className="text-lg py-2 px-3 text-white bg-secondary rounded md:bg-transparent md:text-white md:p-0 hover:text-secondary duration-300 " aria-current="page">Home</Link>
                        <Link to="/job-vacancy" className="text-lg py-2 px-3 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-secondary duration-300 md:p-0 ">Job Vacancy</Link>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
