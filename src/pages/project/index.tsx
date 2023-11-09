import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import LoveTravel from "../../images/projects/love-travel.png"
import LoveTravelSearch1 from "../../images/projects/love-travel-search1.png"
import LoveTravelSearch2 from "../../images/projects/love-travel-search2.png"
import LoveTravelSport from "../../images/projects/love-travel-sport.png"
import AirBnb from "../../images/projects/airbnb.png"
import NextJSTravel from "../../images/projects/travel-nextjs.png"

const projects = [
    {
        group: "HTML/CSS",
        projects: [
            {
                name: "Love Travel",
                image: LoveTravel,
                href: "https://dathymax.github.io/Love%20Travel/index.html"
            },
            {
                name: "Love Travel Search 1",
                image: LoveTravelSearch1,
                href: "https://dathymax.github.io/Love%20Travel/child-web/search-1/index.html"
            },
            {
                name: "Love Travel Search 1",
                image: LoveTravelSearch2,
                href: "https://dathymax.github.io/Love%20Travel/child-web/search-2/index.html"
            },
            {
                name: "Love Travel Sport",
                image: LoveTravelSport,
                href: "https://dathymax.github.io/Love%20Travel/child-web/sport/index.html#"
            },
            {
                name: "AirBnb",
                image: AirBnb,
                href: "https://dathymax.github.io/Resort/index.html"
            },
        ]
    },
    {
        group: "ReactJS",
        projects: [
            {
                name: "Travel",
                image: LoveTravel,
                href: "https://dathymax.github.io/Love%20Travel/index.html"
            },
            {
                name: "Love Travel Search 1",
                image: LoveTravelSearch1,
                href: "https://dathymax.github.io/mycv-app/"
            },
            {
                name: "Love Travel Search 1",
                image: LoveTravelSearch2,
                href: "https://dathymax.github.io/theband-app/"
            },
            {
                name: "Love Travel Sport",
                image: LoveTravelSport,
                href: "https://dathymax.github.io/Love%20Travel/child-web/sport/index.html#"
            },
            {
                name: "AirBnb",
                image: AirBnb,
                href: "https://dathymax.github.io/Resort/index.html"
            },
        ]
    },
    {
        group: "NodeJS",
        projects: [
            {
                name: "Love Travel",
                image: LoveTravel,
                href: "https://dathymax.github.io/Love%20Travel/index.html"
            },
        ]
    },
    {
        group: "NextJS",
        projects: [
            {
                name: "NextJS Travel",
                image: NextJSTravel,
                href: "https://dathymax.github.io/Love%20Travel/index.html"
            },
        ]
    }
]

const ProjectPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const group = searchParams.get("group") || "all";

    useEffect(() => {
        navigate(`/project?group=all`);
    }, [])

    const handleSetParams = (group: string) => {
        searchParams.set("group", group);

        navigate(`?${searchParams.toString()}`);
    }

    return (
        <div>
            <h1 className='text-4xl text-center py-10 text-primary'>My projects</h1>

            <ul className='text-center'>
                <li
                    onClick={() => handleSetParams("all")}
                    className={`${group === "all" ? "text-primary" : "text-white"} mx-5 text-lg cursor-pointer`}
                >
                    All
                </li>
                {projects.map(project => (
                    <li
                        onClick={() => handleSetParams(project.group.toLowerCase())}
                        className={`${group === project.group.toLowerCase() ? "text-primary" : "text-white"} mx-5 text-lg cursor-pointer`}>
                        {project.group}
                    </li>
                ))}

                <div className='h-[50px]'></div>

                {group === "all"
                    ? <div className='grid grid-cols-4 gap-10'>
                        {projects
                            .map(project => (
                                project.projects.map(item => (
                                    <div className='col-span-1 project-item cursor-pointer'>
                                        <Link to={item.href} target='_blank' className='block'>
                                            <div className='overflow-hidden relative rounded-xl'>
                                                <img src={item.image} alt="Image" className='project-item__image' />

                                                <div className="project-item__overlay"></div>

                                                <button className='project-item__button bg-gray-300 rounded-full px-4 py-2 text-gray-600 font-medium text-[13px]'>View my website</button>
                                            </div>

                                            <p className='text-primary text-[14px] mt-2 font-medium'>{project.group}</p>
                                            <p>{item.name}</p>
                                        </Link>
                                    </div>
                                ))
                            ))}
                    </div>
                    : <div className='grid grid-cols-4 gap-10'>
                        {projects
                            .filter(item => item.group.toLowerCase() === group)
                            .map(project => (
                                project.projects.map(item => (
                                    <div className='col-span-1 project-item cursor-pointer'>
                                        <Link to={item.href} target='_blank' className='block'>
                                            <div className='overflow-hidden relative rounded-xl'>
                                                <img src={item.image} alt="Image" className='project-item__image' />

                                                <div className="project-item__overlay"></div>

                                                <button className='project-item__button bg-gray-300 rounded-full px-4 py-2 text-gray-600 font-medium text-[13px]'>View my website</button>
                                            </div>

                                            <p className='text-primary text-[14px] mt-2 font-medium'>{project.group}</p>
                                            <p>{item.name}</p>
                                        </Link>
                                    </div>
                                ))
                            ))}
                    </div>
                }
            </ul>
        </div>
    )
}

export default ProjectPage