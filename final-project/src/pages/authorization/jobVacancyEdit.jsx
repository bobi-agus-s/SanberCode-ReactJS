import DashboardLayout from "../../component/Layouts/DashboardLayout";
import { GlobalProvider } from "../../context/GlobalContext";
import { Link, useNavigate, useParams } from "react-router-dom";

import Input from "../../component/Elements/authorization/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"

const JobVacancyEdit = () => {
    const navigate = useNavigate()
    let { id } = useParams()

    const [data, setData] = useState({
        title: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: "",
        salary_max: "",
        job_description: "",
        job_qualification: "",
        job_tenure: "",
        job_type: "",
        job_status: "",
    })

    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
        .then((res) => {
            setData({
                title: res.data.title,
                company_name: res.data.company_name,
                company_image_url: res.data.company_image_url,
                company_city: res.data.company_city,
                salary_min: res.data.salary_min,
                salary_max: res.data.salary_max,
                job_description: res.data.job_description,
                job_qualification: res.data.job_qualification,
                job_tenure: res.data.job_tenure,
                job_type: res.data.job_type,
                job_status: res.data.job_status,
            })
        })
    }, [])

    function handleUpdate(e) {
        e.preventDefault()

        let title = e.target.title.value
        let company_name = e.target.company_name.value
        let company_image_url = e.target.company_image_url.value
        let company_city = e.target.company_city.value
        let salary_min = e.target.salary_min.value
        let salary_max = e.target.salary_max.value
        let job_description = e.target.job_description.value
        let job_qualification = e.target.job_qualification.value
        let job_tenure = e.target.job_tenure.value
        let job_type = e.target.job_type.value
        let job_status = e.target.job_status.value

        // https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png

        axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
            title,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
            job_description,
            job_qualification,
            job_tenure,
            job_type,
            job_status,
        },
        {
            headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
        }).then(res => {
            navigate('/dashboard/list-job-vacancy')
        })

    }

    return (
        <GlobalProvider>
            <DashboardLayout>
                <div className="mb-5 flex gap-5 items-center">
                    <Link to="/dashboard/list-job-vacancy" className="bg-red-500 text-white  py-2 px-4 rounded">Kembali</Link>
                    <h1 className="text-3xl font-bold">Edit Job Vacancy</h1>
                </div>
                <div className="w-3/4  p-4 bg-white border border-gray-200 rounded-lg">
                    <form onSubmit={handleUpdate}>
                        <Input>
                            <Input.TextValue value={data.title} onChange={e => setData({...data, title: e.target.value})} name="title"/>
                        </Input>
                        <Input>
                            <Input.TextValue value={data.company_name} onChange={e => setData({...data, company_name: e.target.value})} name="company_name"/>
                        </Input>
                        <Input>
                            <Input.TextValue value={data.company_image_url} onChange={e => setData({...data, company_image_url: e.target.value})} name="company_image_url"/>
                        </Input>
                        <Input>
                            <Input.TextValue value={data.company_city} onChange={e => setData({...data, company_city: e.target.value})} name="company_city"/>
                        </Input>
                        <Input>
                            <Input.TextValue value={data.salary_min} onChange={e => setData({...data, salary_min: e.target.value})} name="salary_min" type="number"/>
                        </Input>
                        <Input>
                            <Input.TextValue value={data.salary_max} onChange={e => setData({...data, salary_max: e.target.value})} name="salary_max" type="number"/>
                        </Input>
                        <Input>
                            <Input.TextAreaValue value={data.job_description} onChange={e => setData({...data, job_description: e.target.value})}  name="job_description"/>
                        </Input>
                        <Input>
                            <Input.TextAreaValue value={data.job_qualification} onChange={e => setData({...data, job_qualification: e.target.value})}  name="job_qualification"/>
                        </Input>
                        <Input >
                            <Input.TextValue value={data.job_type} onChange={e => setData({...data, job_type: e.target.value})} name="job_type"/>
                        </Input>
                        <Input >
                            <Input.TextValue value={data.job_tenure} onChange={e => setData({...data, job_tenure: e.target.value})} name="job_tenure"/>
                        </Input>
                        <Input >
                            <Input.Select name="job_status">
                                <option selected={data.job_status == 1} value="1">Dibuka</option>
                                <option selected={data.job_status == 0} value="0">Ditutup</option>
                            </Input.Select>
                        </Input>
                        
                        
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form>
                </div>
            </DashboardLayout>
        </GlobalProvider>
    );
};

export default JobVacancyEdit;
