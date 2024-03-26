import { useEffect, useState } from "react";
import DashboardLayout from "../../component/Layouts/DashboardLayout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Input from "./../../component/Elements/authorization/Input";
import Cookies from "js-cookie";


const Profil = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState({
        current_password: '',
        new_password: '',
        new_confirm_password: ''
    })

    function handleCreate(e) {
        e.preventDefault()

        let current_password = e.target.current_password.value
        let new_password = e.target.new_password.value
        let new_confirm_password = e.target.new_confirm_password.value

        axios.post('https://dev-example.sanbercloud.com/api/change-password', {
            current_password,
            new_password,
            new_confirm_password
        }, {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then(res => {
            navigate('/dashboard')
        })

    }

    return (
        <DashboardLayout>
                <h1 className="text-3xl mb-5 font-bold">Ganti Password</h1>

                <div className="w-3/4  p-4 bg-white border border-gray-200 rounded-lg">
                    <form onSubmit={handleCreate}>
                        <Input>
                            <Input.TextValue value={input.current_password} onChange={ (e) => setInput({ ...input, current_password: e.target.value })} name="current_password"/>
                        </Input>
                        <Input>
                            <Input.TextValue value={input.new_password} onChange={ (e) => setInput({ ...input, new_password: e.target.value })} name="new_password"/>
                        </Input>
                        <Input>
                            <Input.TextValue value={input.new_confirm_password} onChange={ (e) => setInput({ ...input, new_confirm_password: e.target.value })} name="new_confirm_password"/>
                        </Input>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form>
                </div>
            </DashboardLayout>
    );
};

export default Profil;
