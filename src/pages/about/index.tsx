const abouts = [
    {
        group: "Education",
        informations: [
            {
                time: "08/2018 - 10/2022",
                workPlace: "Hanoi University of Mining and Geology",
                major: "Information system",
                work: ["Graduation: Good"],
            },
        ]
    },
    {
        group: "Work experience",
        informations: [
            {
                time: "10/2021 - 04/2022",
                workPlace: "Dogoo JSC",
                major: "Internship developer",
                work: ["Join in Dogoo Company's Intern training course"],
            },
            {
                time: "04/2022 - Present",
                workPlace: "Dogoo JSC",
                major: "Developer",
                work: [
                    "Participate in building the Dogoo Office system",
                    "Work with BA on module operations",
                    "Discuss with superiors about the technologies used for broadcasting project development",
                    "Participate in group activities to build projects"
                ]
            },
        ]
    },
]

const AboutPage = () => {

    const renderWork = (works: any[]) => {
        if (works.length === 1) {
            return <p className='italic'>{works[0]}</p>
        } else {
            return (
                <ul>
                    {
                        works.map(work => (
                            <li className='block'>
                                {work}
                            </li>
                        ))
                    }
                </ul>
            )
        }
    }

    return (
        <div className="px-5">
            <h1 className='text-4xl text-primary text-center py-10'>About me</h1>
            <div className='grid grid-cols-2 gap-5'>
                {abouts.map(about => (
                    <div className='col-span-2 md:col-span-1 md:last:text-right'>
                        <h2 className='text-3xl text-primary mb-5'>{about.group}</h2>

                        {about.informations.map(information => (
                            <div className='leading-[50px]'>
                                <p className='text-primary text-md italic font-medium'>{information.time}</p>
                                <p className='font-bold text-xl'>{information.workPlace}</p>
                                <p className='italic'>{information.major}</p>
                                {renderWork(information.work)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutPage