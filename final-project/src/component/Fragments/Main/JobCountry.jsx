import Button from "../../Elements/Button";
import Section from "./Section"

const JobCountryList = ({kota, lowongan}) => {
    return (
            <div className="min-w-40 min-h-16 bg-slate-700 flex flex-col px-5 py-3 ">
                <h1 className="text-2xl font-semibold font-default">{kota}</h1>
                <p className="text-xs text-slate-300">{lowongan} Lowongan Pekerjaan</p>
        </div>
    )
}
const JobCountry = () => {

    const list = [
        {
            kota: 'Jakarta',
            lowongan: 4
        },
        {
            kota: 'Surabaya',
            lowongan: 3
        },
        {
            kota: 'Depok',
            lowongan: 2
        },
        {
            kota: 'Tangerang',
            lowongan: 1
        },
        {
            kota: 'Malang',
            lowongan: 4
        },
        {
            kota: 'Bogor',
            lowongan: 3
        },
        {
            kota: 'Kalimantan',
            lowongan: 2
        },
        {
            kota: 'Aceh',
            lowongan: 1
        },
    ]

    return (
        <Section
            classname="bg-slate-800 rounded-lg"
            classnameTitle="bg-slate-900"
            title="Job Country"
            heading="Temukan Pekerjaan Di Kotamu"
            description="Seluruh pekerjaan tersebar di berbagai kota di Indonesia">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {
                    list.map((item, index) => (
                        <JobCountryList key={index} kota={item.kota} lowongan={item.lowongan}/>
                    ))
                }
            </div>
        </Section>
    )
}

export default JobCountry