import Section from "./Section"
import { FaBuilding, FaHouse, FaChromecast  } from "react-icons/fa6";


const JobType = () => {
    return (
        <Section
            title="job type"
            heading="Tipe Pekerjaan Untukmu"
            description="Pilih tipe pekerjaan sesuai dengan minat dan bakat Anda. Temukan pekerjaan yang benar-benar memenuhi ekspektasi dan potensi Anda di sini">
                <div className="flex flex-col justify-around items-center gap-10 md:gap-20 md:flex-row">
                    <div className="group bg-slate-800 w-96 md:w-40 h-24 rounded-xl text-primary px-5 py-3 flex flex-col justify-center items-center gap-2 border border-primary hover:shadow-md hover:shadow-primary duration-300">
                        <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-primary group-hover:text-white duration-300">
                            <FaBuilding />
                        </div>
                        <p className="text-md font-normal tracking-wider">
                            On Site
                        </p>
                    </div>
                    <div className="group bg-slate-800 w-96 md:w-40 rounded-xl text-primary px-5 py-3 flex flex-col justify-center items-center gap-2 border border-primary hover:shadow-md hover:shadow-primary duration-300">
                        <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-primary group-hover:text-white duration-300">
                            <FaHouse />
                        </div>
                        <p className="text-md font-normal tracking-wider">
                            WFH
                        </p>
                    </div>
                    <div className="group bg-slate-800 w-96 md:w-40 rounded-xl text-primary px-5 py-3 flex flex-col justify-center items-center gap-2 border border-primary hover:shadow-md hover:shadow-primary duration-300">
                        <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-primary group-hover:text-white duration-300">
                            <FaChromecast  />
                        </div>
                        <p className="text-md font-normal tracking-wider">
                            Hybrid
                        </p>
                    </div>
                </div>
        </Section>
    )
}

export default JobType