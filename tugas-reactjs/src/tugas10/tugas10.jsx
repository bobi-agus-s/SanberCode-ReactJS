import {React, useState, useEffect} from "react";
import axios from "axios";

const Tugas10 = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('https://backendexample.sanbercloud.com/api/student-scores')
            .then((res) => {
                setData( [...res.data] )
            })
            .catch((error) => {

            })
    }, [])

    const handleIndexScore = (nilai) => {
        if (nilai >= 80) {
            return "A";
        } else if (nilai >= 70 && nilai < 80) {
            return "B";
        } else if (nilai >= 60 && nilai < 70) {
            return "C";
        } else if (nilai >= 50 && nilai < 60) {
            return "D";
        } else {
            return "E";
        }
    }

    return (
        <>
            <div className="my-10 flex justify-center">
                <div className="w-4/5 relative overflow-x-auto rounded-lg drop-shadow-md">
                    <table className="text-sm text-left rtl:text-right text-gray-500 w-full">
                        <thead className="text-xs uppercase bg-purple-500 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            No
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Mata Kuliah
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Nilai
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Index Nilai
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                            { data != null && data.map((res, index) => {
                                return (
                                    <>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            { ++index }
                                        </th>
                                        <td className="px-6 py-4">
                                            { res.name }
                                        </td>
                                        <td className="px-6 py-4">
                                            { res.course }
                                        </td>
                                        <td className="px-6 py-4">
                                            { res.score }
                                        </td>
                                        <td className="px-6 py-4">
                                            { handleIndexScore(res.score) }
                                        </td>
                                    </tr>
                                    </>
                                )
                            }) }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default Tugas10;
