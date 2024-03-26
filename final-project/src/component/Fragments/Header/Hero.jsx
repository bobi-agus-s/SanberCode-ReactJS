import Button from "../../Elements/Button"

const Hero = () => {
    return (
        <section className="text-white max-w-screen-xl mx-auto min-h-screen bg-slate-900 grid grid-rows-2 md:grid-rows-none md:grid md:grid-cols-2">
        {/* <section className="text-white min-h-screen bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/Hero/conference.jpg')] bg-gray-950 bg-blend-multiply grid grid-rows-2 md:grid-rows-none md:grid md:grid-cols-2"> */}
            <div className="md:pl-10 text-center md:text-start flex flex-col justify-center pt-56 md:pt-0">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-header font-extrabold tracking-tight leading-none text-white ">Help You to Find Your <span className="text-primary mt-3 block">Dream  Job</span></h1>
                <p className="my-8 text-md font-normal font-default text-gray-300 lg:text-xl px-10 md:px-0  tracking-wider">Tersedia berbagai kesempatan karier yang cocok untuk Anda, dari lowongan pekerjaan hingga proyek menarik yang sesuai dengan profesimu</p>
                <div className="flex md:justify-start justify-center items-center gap-5 font-default">
                    <Button>More</Button> 
                    <Button classname="bg-transparent border border-secondary hover:bg-secondary">Job Vacancy</Button>
                </div>
            </div>
            <div className=" flex justify-center items-center">
                <svg className="opacity-20 w-11/12" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0579f5" d="M22.7,-38.7C31.6,-34.2,42.6,-32.6,52.3,-26.6C62,-20.6,70.4,-10.3,73.9,2C77.4,14.3,75.8,28.6,66.8,35.7C57.8,42.9,41.3,42.8,28.9,48.1C16.5,53.4,8.2,63.9,-2.3,67.9C-12.9,72,-25.8,69.4,-38.8,64.5C-51.8,59.6,-65,52.4,-67.4,41.2C-69.8,30.1,-61.5,15,-57.7,2.2C-53.9,-10.7,-54.6,-21.3,-51,-30.4C-47.4,-39.5,-39.4,-47,-30.2,-51.3C-21,-55.7,-10.5,-56.8,-1.8,-53.7C6.9,-50.6,13.8,-43.2,22.7,-38.7Z" transform="translate(150 100)" />
                </svg>
                <img src="https://i.imgur.com/YsGKd98.png" className="absolute animate-bounce w-72 h-72 md:w-[30rem] md:h-[30rem]" />
            </div>
        </section>

    )
}

export default Hero