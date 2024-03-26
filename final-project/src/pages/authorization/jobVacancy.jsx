import { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../component/Layouts/DashboardLayout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { FaMagnifyingGlass, FaPenToSquare, FaTrash  } from "react-icons/fa6";
import Cookies from "js-cookie";
const JobVacancy = () => {
    const [listJob, setListJob] = useState([])
    const [record, setRecord] = useState([])
    const [fetch, setFetch] = useState(true)

    useEffect(() => {
        if (fetch === true) {
            
            axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            .then((res) => {
                setListJob(res.data.data)
                setRecord(res.data.data)
            })
            setFetch(false)
        }
    }, [fetch, setFetch])

    function handleDelete(e) {
        let id = e.target.value
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}} )
        .then((res) => {
            setFetch(true)
        })
    }

    function search(e) {
        setRecord(listJob.filter(f => f.title.toLowerCase().includes(e.target.value)))
    }

    return (
        <DashboardLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl font-bold">List Job Vacancy</h1>
                <Link to="/dashboard/list-job-vacancy/create" className="bg-primary  text-white  py-2 px-4 rounded">Add Data</Link>
            </div>
            <div className="flex gap-5 justify-end mb-3" >
                <div className="flex items-center bg-white border border-slate-400 rounded-xl px-5 py-1 w-1/2" >
                    <FaMagnifyingGlass className="text-blue-400"/>
                    <input onChange={search} type="text" className="bg-transparent text-sm border-none px-3 focus:ring-0 w-full" placeholder="Search title here..."/>
                </div>
            </div>
            <div>
                <div className="relative overflow-x-auto rounded-xl">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs  uppercase bg-purple-500  text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    no
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    company_name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    company_city
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    salary_min
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    salary_max
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    job_type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    job_tenure
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    job_tenure
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                record.map((item, index) => {
                                    return (
                                        <tr key={item.id} className="bg-white border-b">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {index+1}
                                            </th>
                                            <td className="px-6 py-4">{item.title}</td>
                                            <td className="px-6 py-4">{item.company_name}</td>
                                            <td className="px-6 py-4">{item.company_city}</td>
                                            <td className="px-6 py-4">{item.salary_min.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                                            <td className="px-6 py-4">{item.salary_max.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                                            <td className="px-6 py-4">{item.job_type}</td>
                                            <td className="px-6 py-4">{item.job_tenure}</td>
                                            <td className="px-6 py-4">
                                                {
                                                    item.job_status === 1 ? (
                                                        <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm flex justify-center items-center w-fit">open</span>
                                                    ) : (
                                                        <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm flex justify-center items-center w-fit">close</span>
                                                    )
                                                }
                                            </td>
                                            <td className="px-6 py-4 flex gap-3">
                                                <Link to={`/dashboard/list-job-vacancy/edit/${item.id}`} className="border border-yellow-300 hover:bg-yellow-300 hover:text-white text-yellow-300 px-4 py-2 rounded-lg flex justify-center items-center duration-300">edit</Link>
                                                <button onClick={handleDelete} type="button" value={item.id} className="border border-red-500 hover:bg-red-500 hover:text-white text-red-500 px-4 py-2 rounded-lg flex justify-center duration-300 items-center">delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default JobVacancy;
