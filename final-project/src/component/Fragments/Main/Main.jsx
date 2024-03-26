import JobCountry from "./JobCountry"
import JobType from "./JobType"
import JobVacancy from "./JobVacancy"

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-10 px-10 xl:px-0">
            {/*  Job Country */}
            <JobCountry />
            {/* end Job Country */}

            {/* Job Type */}
            <JobType />
            {/* end Job Type */}

            {/* Rekomended Job Vacancy */}
            <JobVacancy />
            {/* endRekomended Job Vacancy */}

        </div>
    )
}

export default Main