import Input from "./elements/Input"
import Button from "./elements/Button"
import { useEffect, useState } from "react"
import axios from 'axios'

const CreateForm = (props) => {

    let { setFetchStatus } = props

    const [input, setInput] = useState({
        image_url: "",
        name: "",
        category: "",
        description: "",
        price: 0,
        rating: 0,
        release_year: 2009,
        size: 0,
        is_android_app: 0,
        is_ios_app: 0,
    })

    const handlerSubmit = (e) => {
        e.preventDefault()
        let dataInput = {
            image_url: e.target.image_url.value,
            name: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            price: e.target.price.value,
            rating: e.target.rating.value,
            release_year: e.target.release_year.value,
            size: e.target.size.value,
            is_android_app: e.target.is_android_app.value,
            is_ios_app: e.target.is_ios_app.value,
        }

        axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', dataInput)
        .then((res) => {
            setFetchStatus(true)
        })
        .catch((err) => {})

        setInput({
            image_url: "",
        name: "",
        category: "",
        description: "",
        price: '',
        rating: '',
        release_year: '',
        size: '',
        is_android_app: '',
        is_ios_app: '',
        })
        
    }

    return (
        <section className="p-5 w-[95%] mx-auto">
            <div className="container mx-auto mt-5">
                <h1 className="text-xl font-bold">Create Data</h1>
                <form className="mt-5" onSubmit={handlerSubmit}>
                    <div className="border-b mb-4">
                        Gambar Data Game
                    </div>
                    <Input label="Image URL" name="image_url" type="text" />

                    <div className="border-b my-5">
                        Data Game
                    </div>
                    <Input label="Name" name="name" type="text" />
                    <Input label="Category" name="category" type="text" />
                    
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
                    <textarea name="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

                    <Input label="price" name="price" type="number" />
                    <div className="mb-3">
                        <label className="text-md " htmlFor='rating'>Rating</label>
                        <span className="text-sm text-red-400 "> * Min Rate 0 dan Max 5</span>
                        <input placeholder="0" className="bg-slate-100 focus:bg-slate-50 mt-3 w-full px-3 py-2 block border border-slate-300 focus:border-slate-600 focus:outline-none rounded-lg" type='number' name='rating' min="0" max="5" />
                    </div>
                    <div className="mb-3">
                        <label className="text-md " htmlFor='release_year'>Release Year</label>
                        <span className="text-sm text-red-400 "> * Min Year 2009 dan Max 2023</span>
                        <input placeholder="2009" className="bg-slate-100 focus:bg-slate-50 mt-3 w-full px-3 py-2 block border border-slate-300 focus:border-slate-600 focus:outline-none rounded-lg" type='number' name='release_year' min="2009" max="2023" />
                    </div>
                    <Input label="size" name="size" type="number">
                        <span className="text-sm text-red-400">* Satuan MB</span>
                    </Input>
                    
                    <div className="border-b my-5">
                        Jenis Perangkat
                    </div>
                    
                    <div className="flex flex-col gap-2 my-3">
                        <p className="text-lg ">Android ?</p>
                        <div class="flex flex-wrap">
                            <div class="flex items-center me-4">
                                <input id="is_android_app_yes" type="radio" value="1" name="is_android_app" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300"/>
                                <label htmlFor="is_android_app_yes" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Yes</label>
                            </div>
                            <div class="flex items-center me-4">
                                <input id="is_android_app" type="radio" value="0" name="is_android_app" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300"/>
                                <label htmlFor="is_android_app" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 my-3">
                        <p className="text-lg ">iOS ?</p>
                        <div class="flex flex-wrap">
                            <div class="flex items-center me-4">
                                <input id="is_ios_app_yes" type="radio" value="1" name="is_ios_app" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300"/>
                                <label htmlFor="is_ios_app_yes" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Yes</label>
                            </div>
                            <div class="flex items-center me-4">
                                <input id="is_ios_app" type="radio" value="0" name="is_ios_app" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300"/>
                                <label htmlFor="is_ios_app" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">No</label>
                            </div>
                        </div>
                    </div>
                    
                    <Button type="submit" variant="bg-blue-500 mt-2">Submit</Button>
                </form>
            </div>
        </section>
    )
}

export default CreateForm