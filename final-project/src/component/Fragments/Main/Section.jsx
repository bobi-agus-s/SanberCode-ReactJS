const Section = (props) => {
    const {
        classname="",
        classnameTitle="",
        title, 
        heading, 
        description, 
        children
    } = props

    return (
        <section className={`JobType font-default flex flex-col justify-center items-center py-10 min-h-[70vh] ${classname}`}>
            <div className="section-header flex flex-col gap-5 justify-center items-center text-center mb-10">
                <div className={`${classnameTitle} text-base font-header tracking-tight leading-none text-primary bg-slate-800 px-7 py-3 rounded-full capitalize `}>{title}</div>
                <h1 className="text-4xl font-bold tracking-wider">{heading}</h1>
                <p className="text-medium w-3/4">{description}</p>
            </div>
            <div className="section-body py-10">
                {children}
            </div>
        </section>
    )
}

export default Section