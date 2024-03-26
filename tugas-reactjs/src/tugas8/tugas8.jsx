import React from "react";
import { useState } from "react";

const Tugas8 = () => {

    let [count, setCount] = useState(1);

    const handleCount = () => {
        setCount(++count);
    }

    return (
        <div className="mt-20 flex justify-center">
            <div className='w-11/12 shadow-md  border px-5 py-2.5 flex items-center justify-center flex-col gap-5 rounded-lg'>
                <span className="count">{ count }</span>
                <button onClick={ handleCount } className="border border-slate-700 py-3 w-full rounded-md">Tambah</button>
                <div className="alert">
                    { count > 10 ? <span>State count sudah lebih dari 10 !!</span> : null}
                </div>
            </div>
        </div>
    );
}

export default Tugas8;