import { useEffect, useState } from "react";
import DashboardLayout from "../../component/Layouts/DashboardLayout";
import { GlobalProvider } from "./../../context/GlobalContext";
import axios from "axios";

const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then(res => setData(res.data.data))
    }, [])

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="w-72 h-40 rounded-xl bg-rose-500 mt-24 px-4 flex flex-col justify-center gap-3 ">
                <h1 className="text-3xl font-bold text-white">Job Vacancy</h1>
                <p className="text-lg text-white">{data.length} Data Lowongan Pekerjaan</p>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
