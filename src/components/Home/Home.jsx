import React from 'react';
import logo from '../../Images/logo.svg';
import status from '../../Images/status.svg';
import messageSent from '../../Images/messageSent.svg';
import messageReceived from '../../Images/messageReceived.svg';
import tags from '../../Images/tags.svg';
import filters from '../../Images/filters.svg';
import input from '../../Images/input.svg';

function Home() {
    return (
        <div className='homeContainer bg-blue-100 w-full flex items-center justify-center' style={{ minHeight: "100vh" }}>
            <div className='rounded-3xl bg-white m-6 h-full p-4 space-y-6'>
                <div className="name bg-sky-100 p-3 rounded-3xl">
                    <div className='flex justify-between'>
                        <img src={logo} alt="" className='w-50' />
                        <img src={status} alt="" className='w-50' />
                    </div>
                </div>

                <div className="messages my-6 space-y-4">
                    <img src={messageSent} alt="" className='w-50' />
                    <img src={messageReceived} alt="" className='w-50 float-end' />
                </div>

                <div className="tags">
                    <img src={tags} alt="" className='w-50' />
                </div>

                <div className="filters my-4">
                    <img src={filters} alt="" className='w-50' />
                </div>

                <div className="input my-4">
                    <img src={input} alt="" className='w-50' />
                </div>
            </div>
        </div>
    )
}

export default Home