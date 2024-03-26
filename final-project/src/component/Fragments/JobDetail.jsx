import JobList from "./List/JobList";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./../../context/GlobalContext";
import { FaBuilding, FaLocationDot, FaArrowUpRightDots  } from "react-icons/fa6";
import Button from "./../Elements/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobDetail = () => {
    let { id } = useParams()
    const { jobList, setJobList } = useContext(GlobalContext)
    const [job, setJob] = useState({})

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
        .then((res) => {
            setJob(res.data)
        })
    }, [])

    return (
        <div className="text-white max-w-screen-xl mx-auto pt-32 pb-10 px-5">
            <div className="mb-24">
                <h1 className="text-4xl font-bold font-header">Detail Pekerjaan</h1>
            </div>
            <div className="flex flex-col-reverse  md:flex-row md:gap-5 gap-10 items-start">
                <div className="min-w-96 flex flex-col gap-3">
                        { jobList !== null &&
                            jobList.map((item, index) => {
                                if (index < 3) {
                                    return (
                                        <JobList key={item.id} 
                                            id={item.id}
                                            title={item.title} 
                                            job_type={item.job_type}
                                            job_tenure={item.job_tenure}
                                            job_status={item.job_status}
                                            company_name={item.company_name}
                                            company_image_url={item.company_image_url}
                                            company_city={item.company_city}
                                            salary_min={item.salary_min}
                                            salary_max={item.salary_max}
                                            refresh={true}
                                        />
                                    )
                                }
                            })
                        }
                </div>
                <div className="w-full flex flex-col gap-5 ">
                    <div className="min-w-full">
                        
                    <div className="md:px-10 px-0">
                        <div className="min-w-[100%] group bg-slate-800  rounded-xl md:p-10 py-3 px-2 flex flex-col justify-center items-center gap-5 border border-primary hover:shadow-md hover:shadow-primary duration-300">
                            <div className="flex justify-start items-center gap-5  min-w-full">
                                <div className="p-0.5 w-28 h-28 text-4xl bg-slate-900 rounded-lg group-hover:bg-primary group-hover:text-white duration-300 flex justify-center items-center">
                                    {/* <FaBuilding /> */}
                                    <img src={job.company_image_url} className="max-w-full rounded-lg" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-4xl font-semibold">{job.title}</h1>
                                    <p className="font-light">{job.company_name}</p>
                                    <div className="flex gap-3 items-center w-full text-white">
                                        <div className="text-primary">
                                            <FaLocationDot />
                                        </div>
                                        <div>
                                            <p className="font-light text-xs">{job.company_city}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-start gap-5 w-full text-white">
                                <span className="bg-green-500 md:text-lg text-xs font-medium  md:px-10 md:py-4 px-4 py-1.5 rounded-xl">{job.job_type}</span>
                                <span className="bg-green-500 md:text-lg text-xs font-medium  md:px-10 md:py-4 px-4 py-1.5 rounded-xl">{job.job_tenure}</span>
                                <span className={`${job.job_status === 1 ? 'bg-green-500' : 'bg-secondary'} md:text-lg text-xs font-medium  md:px-10 md:py-4 px-4 py-1.5 rounded-xl`}>
                                    {job.job_status === 1 ? 'Dibuka' : 'Ditutup'}
                                </span>
                            </div>

                            <div className="w-full flex flex-col gap-3">
                                <div className=" text-white border-y border-slate-500 py-5 flex gap-5 items-center">
                                    <h1 className="text-xl font-bold">Sallary : </h1>
                                    {/* <p className="text-lg  font-semibold">{job.salary_min.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})} - {job.salary_max.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</p> */}
                                    <p className="text-lg  font-semibold">{job.salary_min} - {job.salary_max}</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-3">
                                <div className=" text-white border-b border-slate-500 py-5 ">
                                    <h1 className="text-3xl font-bold">Job Description</h1>
                                </div>
                                <div className="w-full">
                                    <p>
                                        {job.job_description}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-3">
                                <div className=" text-white border-b border-slate-500 py-5 ">
                                    <h1 className="text-3xl font-bold">Job Qualification </h1>
                                </div>
                                <div className="w-full">
                                    <p>
                                        {job.job_qualification }
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex justify-end">
                                <Button classname="bg-transparent border border-green-400 hover:bg-green-400 rounded-xl">Apply Now</Button>
                            </div>
                            
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail


