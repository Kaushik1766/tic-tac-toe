import React from 'react'
import Board from './Board'
import background from './cartoonish sky background with cartoonish banana leaves giving beach vibes.png'
import Navbar from './Navbar'

function MainPage() {
    return (
        <>
            <nav className='fixed top-0 w-full'>
                <Navbar />
            </nav>
            <div style={{
                backgroundColor: ' #4158D0',
                backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
            }} className=' h-auto max-w-full ' >
                <Board />
            </div>
        </>
    )
}

export default MainPage
