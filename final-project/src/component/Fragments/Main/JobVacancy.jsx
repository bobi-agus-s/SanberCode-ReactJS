import { useContext } from "react"
import JobList from "./../List/JobList"
import Section from "./Section"
import { GlobalContext } from "./../../../context/GlobalContext";
import Button from "./../../Elements/Button";
import { Link, useNavigate } from "react-router-dom";

const JobVacancy = () => {

    const {jobList, setJobList} = useContext(GlobalContext)

    let newJobList = null
    if (jobList !== null) {
        newJobList = jobList.slice(0, 6)
    }

    const navigate = useNavigate()
    function gotoJobVacancy() {
        navigate('/job-vacancy')
    }

    return (
        <Section
            classname="bg-slate-800 rounded-lg"
            classnameTitle="bg-slate-900"
            title="Job Recommended"
            heading="Rekomendasi Lowongan Pekerjaan"
            description="Temukan lowongan pekerjaan sesuai dengan minat dan keterampilan anda yang tersebar di Indonesia">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    newJobList !== null && 
                    newJobList.map(item => {
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
            <div className="mt-10 w-full flex justify-end">
                <Button onClick={gotoJobVacancy} classname="bg-transparent border border-secondary hover:bg-secondary">See More</Button>
            </div>
        </Section>
    )
}

export default JobVacancy