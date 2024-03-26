import { FaMagnifyingGlass } from "react-icons/fa6";
import JobList from "./../List/JobList";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./../../../context/GlobalContext";
import Button from "../../Elements/Button";
import axios from "axios";

const JobVacancyMain = () => {
    
    const {jobList, setJobList} = useContext(GlobalContext)
    const [record, setRecord] = useState([])

    useEffect(() => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((res) => {
            setRecord(res.data.data)
        })
    }, [])

    function search(e) {
        setRecord(jobList.filter(f => f.title.toLowerCase().includes(e.target.value)))
    }
    
    return (
        <div className="text-white max-w-screen-xl mx-auto pt-32 pb-10 px-5">
            <div className="mb-24">
                <h1 className="text-4xl font-bold font-header">Find your <span className="text-primary">dream </span> <span className="text-secondary">job</span> here</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-start">
                <div className="md:min-w-96 min-w-full pt-3">
                    <h1 className="text-2xl font-semibold font-header mb-3">Filter</h1>
                    <div className="bg-slate-800 rounded-md px-5 py-5 w-3/4 min-h-52 flex flex-col gap-3 mx-auto md:mx-0">
                        
                        <label htmlFor="" className="text-sm">Company Name</label>
                        <input type="text" className="bg-transparent rounded-xl text-sm border border-blue-900  px-3 focus:ring-0 w-full" placeholder="Company Name"/>
                        <label htmlFor="" className="text-sm">Company City</label>
                        <input type="text" className="bg-transparent rounded-xl text-sm border border-blue-900  px-3 focus:ring-0 w-full" placeholder="Company City"/>
                        <label htmlFor="" className="text-sm">Title</label>
                        <input type="text" className="bg-transparent rounded-xl text-sm border border-blue-900  px-3 focus:ring-0 w-full" placeholder="Title"/>
                        
                        <Button classname=" text-sm h-8 flex text-default justify-center items-center rounded-xl bg-secondary">filter</Button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5  ">
                    <div className="flex gap-5 mx-auto w-full md:px-0 px-10" >
                        <div className="flex items-center bg-slate-800 rounded-xl px-5 p-2 md:w-3/4 w-full" >
                            <FaMagnifyingGlass />
                            <input  type="text" onChange={search} name="search" className="bg-transparent  border-none px-3 focus:ring-0 w-full" placeholder="Search title here..."/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-0">
                        { record !== null &&
                            record.map(item => {
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
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobVacancyMain


