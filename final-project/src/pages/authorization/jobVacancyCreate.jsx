import DashboardLayout from "../../component/Layouts/DashboardLayout";
import { GlobalProvider } from "../../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";

import Input from "./../../component/Elements/authorization/Input";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"

const JobVacancyCreate = () => {

    const navigate = useNavigate()

    function handleCreate(e) {
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

        axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', {
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
                    <h1 className="text-3xl font-bold">Create Job Vacancy</h1>
                </div>
                <div className="w-3/4  p-4 bg-white border border-gray-200 rounded-lg">
                    <form onSubmit={handleCreate}>
                        <Input>
                            <Input.Text name="title"/>
                        </Input>
                        <Input>
                            <Input.Text name="company_name"/>
                        </Input>
                        <Input>
                            <Input.Text name="company_image_url"/>
                        </Input>
                        <Input>
                            <Input.Text name="company_city"/>
                        </Input>
                        <Input>
                            <Input.Text name="salary_min" type="number"/>
                        </Input>
                        <Input>
                            <Input.Text name="salary_max" type="number"/>
                        </Input>
                        <Input>
                            <Input.TextArea name="job_description"/>
                        </Input>
                        <Input>
                            <Input.TextArea name="job_qualification"/>
                        </Input>
                        <Input >
                            <Input.Select name="job_type">
                                <option value="OnSite">On Site</option>
                                <option value="WFH">Work From Home</option>
                                <option value="Hybrid">Hybrid</option>
                            </Input.Select>
                        </Input>
                        <Input >
                            <Input.Select name="job_tenure">
                                <option value="kontrak">Kontrak</option>
                                <option value="internship">Internship</option>
                            </Input.Select>
                        </Input>
                        <Input >
                            <Input.Select name="job_status">
                                <option value="1">Dibuka</option>
                                <option value="0">Ditutup</option>
                            </Input.Select>
                        </Input>
                        
                        
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form>
                </div>
            </DashboardLayout>
        </GlobalProvider>
    );
};

export default JobVacancyCreate;
