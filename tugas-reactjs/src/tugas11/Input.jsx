import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const Input = ({setFetchStatus, Toast}) => {
    const [input, setInput] = useState({
        name: "",
        course: "",
        score: 0,
    })

    

    const handlerInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name == "name") {
            setInput( {...input, name: value} )
        }
        if (name == "course") {
            setInput( {...input, course: value} )
        }
        if (name == "score") {
            setInput( {...input, score: value} )
        }
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        let {name, course, score} = input

        axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
        .then((res) => {
            Toast.fire({
                icon: "success",
                title: "Berhasil menambah data"
              });
            setFetchStatus(true)
        })
        .catch((err) => {})

        setInput({
            name: "",
            course: "",
            score: 0,
        })
    }

    return(
        <div className="my-10 flex justify-center">
            <div className="w-4/5 rounded-lg shadow-xl border border-slate-100 p-5">
                <form onSubmit={handlerSubmit}>
                    <div className="w-full">
                        <div className="mb-4">
                            <label className="block text-sm mb-2 font-medium text-gray-900 dark:text-white">Nama</label>
                            <input onChange={handlerInput} name="name" value={input.name} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-2 font-medium text-gray-900 dark:text-white">Mata Kuliah</label>
                            <input onChange={handlerInput} name="course" value={input.course} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-2 font-medium text-gray-900 dark:text-white">Nilai</label>
                            <input onChange={handlerInput} name="score" value={input.score} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "/>
                        </div>
                    </div>
                    <button type='submit' className='rounded-lg text-white bg-blue-500 px-4 py-2'>Simpan</button>
                </form>
            </div>
        </div>
    )

}

export default Input