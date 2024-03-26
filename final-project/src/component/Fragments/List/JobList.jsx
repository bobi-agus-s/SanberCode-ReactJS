import { Link } from "react-router-dom";
import Button from "./../../Elements/Button";
import { FaBuilding, FaLocationDot, FaArrowUpRightDots  } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const JobList = (props) => {
    const navigate = useNavigate();

    let {
        id="",
        title="",
        job_description="",
        job_qualification="",
        job_type="",
        job_tenure="",
        job_status="",
        company_name="",
        company_image_url="",
        company_city="",
        salary_min=0,
        salary_max=0,
        refresh=false
    } = props

    function handleDetail(e) {
        let id = parseInt(e.target.id)
        if (refresh) {
            window.location.href = `/job-vacancy/${id}`            
        } else {
            navigate(`/job-vacancy/${id}`);
        }
    }

    return (
        <div className="flex flex-col justify-around items-center gap-10 md:gap-20 md:flex-row ">
            <div className="min-w-[100%] group bg-slate-800  rounded-xl px-5 py-3 flex flex-col justify-center items-center gap-5 border border-primary hover:shadow-md hover:shadow-primary duration-300">
                <div className="flex justify-start items-center gap-5  min-w-full">
                    <div className="p-0.5 w-14 h-14 text-4xl bg-slate-900 rounded-lg group-hover:bg-primary group-hover:text-white duration-300 flex justify-center items-center">
                        {/* <FaBuilding /> */}
                        <img src={company_image_url} className="max-w-full rounded-lg" />
                    </div>
                    <div>
                        <h1 className="text-2xl ">{title}</h1>
                        <p className="font-extralight">{company_name}</p>
                    </div>
                </div>
                <div className="flex justify-between w-full text-white">
                    <span className="bg-green-500 text-xs font-medium  px-5 py-1.5 rounded-full">{job_type}</span>
                    <span className="bg-green-500 text-xs font-medium  px-5 py-1.5 rounded-full">{job_tenure}</span>
                    <span className={`${job_status === 1 ? 'bg-green-500' : 'bg-secondary'} text-xs font-medium  px-5 py-1.5 rounded-full`}>
                        {job_status === 1 ? 'Dibuka' : 'Ditutup'}
                    </span>
                </div>
                <div className="flex gap-3 items-center w-full text-white">
                    <div className="text-primary">
                        <FaLocationDot />
                    </div>
                    <div>
                        <p className="font-light text-xs">{company_city}</p>
                    </div>
                </div>
                <div className=" w-full text-white">
                    <p className="text-md font-semibold">{salary_min.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})} - {salary_max.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</p>
                </div>
                <div className="border-t border-slate-500 w-full text-white pt-5 pb-3 flex justify-end">
                    <Button onClick={handleDetail} id={id} classname="bg-transparent hover:bg-primary border border-primary text-xs rounded-lg px-4 py-2 flex justify-between items-center">Selengkapnya <span className="ml-3"><FaArrowUpRightDots/></span></Button>
                </div>
            </div>
        </div>
    )
}

export default JobList