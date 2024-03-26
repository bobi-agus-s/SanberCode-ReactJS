import React from "react";

const Tugas7 = (props) => {

    let {name, email, batch} = props

    return (
        <div className="mt-20 flex justify-center">
            <div className='w-11/12 shadow-md  border px-5 py-2.5 rounded-lg'>
                <div className="card-title">
                <h1>Data diri peserta kelas Reactjs</h1>
                </div>
                <div className="card-body">
                    <ul>
                        <li><b>Nama Lengkap : </b><span>{name}</span></li>
                        <li><b>Email : </b><span>{email}</span></li>
                        <li><b>Batch Pelatihan : </b>{batch}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tugas7;