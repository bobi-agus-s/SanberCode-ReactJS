import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
        .then((res) => {
            setData([...res.data])
        })
        .catch((err) => {})
    })

    function mb_to_gb(megabytes) {
        return Number(megabytes / 1024).toFixed(2) + " GB";
    }

    function singkatKalimat(kalimat, panjangMaksimal) {
        if (kalimat.length > panjangMaksimal) {
          return kalimat.substring(0, panjangMaksimal) + "...";
        } else {
          return kalimat;
        }
    }

    function cekPlatform(is_android_app, is_ios_app) {
        if (is_ios_app == 1 && is_android_app == 1) {
            return (<span className="ml-2">Android & iOS</span>)
        } else if (is_android_app == 1) {
            return (<span className="ml-2">Android</span>)
        } else if (is_ios_app == 1) {
            return (<span className="ml-2">iOS</span>)
        } else {
            return ('')
        }
    }


    return (
        <section className="bg-gray-200 p-5">

        <div className="container mx-auto mt-10">
            <h1 className="text-xl font-bold ">Find your data that you need!</h1>
        </div>

        <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">

            {data.map((item) => (

            <div key={item.id} className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={item.image_url}
                    className="w-1/3 bg-cover bg-center bg-landscape" />
                <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-bold text-2xl">
                        {item.name}
                    </h1>
                    <small>{item.release_year}</small>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                        {singkatKalimat(item.description, 50)}
                    </p>
                    <div className=" item-center mt-2 text-gray-500">
                        <span className="mr-2">{item.category}</span>
                        <span>{mb_to_gb(item.size)}</span>
                        {cekPlatform(item.is_android_app, item.is_ios_app)}
                    </div>
                    <div className="flex item-center justify-between mt-3">
                        <h1 className="text-gray-700 font-bold text-xl">
                            { item.price.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            }) }
                        </h1>
                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                            {item.rating} Ratings
                        </button>
                    </div>
                </div>
            </div>

            ))}


        </div>

    </section>
    )
}

export default Home