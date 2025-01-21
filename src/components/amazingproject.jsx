import React from 'react'
import HireMeButton from './hireme'

export default function AmazingProject() {
    return (
        <div className='w-full h-screen bg-white flex flex-col gap-y-10 pt-28 items-center xl:text-9xl lg:text-7xl md:text-5xl text-3xl tracking-widest'>
            <div className='whitespace-nowrap'>
                Lets Create an
            </div>
            <div className='text-purple-800'>Amazing Project</div>
            <div>Together!</div>

            <div className='xl:pt-20 lg:pt-16 md:pt-14 pt-12'>
                <HireMeButton />
            </div>
        </div>
    )
}
