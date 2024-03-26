import { useEffect, useState } from "react"
import axios from 'axios'
import CreateForm from "./../component/CreateForm"
import EditForm from "../component/EditForm"

const ManageData = () => {
    const [data, setData] = useState([])
    const [fetchStatus, setFetchStatus] = useState(true)

    const [formEdit, setFormEdit] = useState([false, 0])
    

    function handlerFormEdit(e) {
        let id = e.target.value
        setFormEdit([true, id])
    }

    // fetch data
    useEffect(() => {
        if (fetchStatus === true) {
            
            axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
            .then((res) => {
                setData([...res.data])
            })
            .catch(() => {})
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    function singkatKalimat(kalimat, panjangMaksimal) {
        if (kalimat.length > panjangMaksimal) {
          return kalimat.substring(0, panjangMaksimal) + "...";
        } else {
          return kalimat;
        }
    }

    function handlerDelete(e) {
        let dataID = e.target.value
        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${dataID}`)
        .then((res) => {
            setFetchStatus(true)
        })
        .catch((err) => {})
    }

    return (
        <>

        {formEdit[0] && (<EditForm setFormEdit={setFormEdit} data={formEdit[1]} />)}        
        
        <section className="p-5 w-[95%] mx-auto">
            <div className="container mx-auto mt-5">
                <h1 className="text-xl font-bold">Manage Data</h1>
                <div className="mt-5">
                    <div className="flex justify-center">
                        <div className="w-full relative overflow-x-auto rounded-lg drop-shadow-md">
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
                                    Kategori
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Rating
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Release Year
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Size
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    IS_ANDROID_APP
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    IS_IOS_APP
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (

                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {++index}
                                        </th>
                                        <td className="px-6 py-4">
                                            { item.name }
                                        </td>
                                        <td className="px-6 py-4">
                                            { item.category }
                                        </td>
                                        <td className="px-6 py-4 ">
                                            { singkatKalimat(item.description, 20) }
                                        </td>
                                        
                                        <td className="px-6 py-4">
                                            { item.price.toLocaleString("id-ID", {
                                                style:"currency",
                                                currency:"IDR"
                                                })
                                            }
                                        </td>
                                        <td className="px-6 py-4">
                                            { item.rating }
                                        </td>
                                        <td className="px-6 py-4">
                                            { item.release_year }
                                        </td>
                                        <td className="px-6 py-4">
                                            { item.size }
                                        </td>
                                        <td className="px-6 py-4">
                                            { item.is_android_app }
                                        </td>
                                        <td className="px-6 py-4">
                                            { item.is_ios_app }
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={handlerFormEdit} value={item.id} className="rounded-lg w-16 bg-yellow-500 mr-3 px-3 py-2 text-white font-thin hover:bg-yellow-600">edit</button>
                                            <button onClick={handlerDelete} value={item.id}  className="rounded-lg w-16 bg-red-500 px-3 py-2 text-white font-thin hover:bg-red-600">delete</button>
                                        </td>
                                    </tr>

                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <CreateForm setFetchStatus={ setFetchStatus }/>
        </>
    )
}

export default ManageData