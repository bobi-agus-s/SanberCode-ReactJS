import { useEffect, useState } from "react";
import DashboardLayout from "../../component/Layouts/DashboardLayout";
import { GlobalProvider } from "../../context/GlobalContext";
import axios from "axios";

const Profil = () => {

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold">Profil</h1>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <div className="flex justify-end px-4 pt-4">
                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                        <ul className="py-2" aria-labelledby="dropdownButton">
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Edit</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Export Data</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 ">Delete</a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                        <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Message</a>
                    </div>
                </div>
            </div>

        </DashboardLayout>
    );
};

export default Profil;
