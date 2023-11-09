import React from 'react'
import { Outlet } from "react-router-dom"

const Content = () => {
    return (
        <section className='bg-black h-full pb-10'>
            <div className='container m-auto text-white'>
                <Outlet />
            </div>
        </section>
    )
}

export default Content