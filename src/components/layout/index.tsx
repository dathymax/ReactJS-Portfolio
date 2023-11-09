import React from 'react'
import Header from './header/Header'
import Content from './content/Content'

const Layout = () => {
    return (
        <main className='h-screen min-h-screen w-screen max-w-screen overflow-x-hidden'>
            <Header />
            <Content />
        </main>
    )
}

export default Layout