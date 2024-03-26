import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext()
export const GlobalProvider = (props) => {
    const [jobList, setJobList] = useState(null)

    useEffect(() => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then(res => {
            setJobList(res.data.data)
        })
    }, [])
    
    return (
        <GlobalContext.Provider value={
            {
                jobList, setJobList
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}