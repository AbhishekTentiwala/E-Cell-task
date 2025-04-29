'use client'
import Image from 'next/image'
import pg from "../../public/OIP.jpeg"
import bg from "../../public/bg.png"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react';

const targetDate = new Date("May 30 2025 17:00:00").getTime();
let l = new Date().getTime()


function Hero() {
    const count = useRef(0)
    const distance = useRef(targetDate - l);
    const days = useRef(Math.floor(distance.current / 1000 / 60 / 60 / 24));
    const hours = useRef(Math.floor(distance.current / 1000 / 60 / 60) % 24);
    const minutes = useRef(Math.floor(distance.current / 1000 / 60) % 60);
    const [seconds, setseconds] = useState(Math.floor(distance.current / 1000) % 60);
    const updated = () => {
        (distance.current <= 0) ? distance.current = 0 : distance.current = (distance.current - 1000)
    }
    count.current = (count.current + 1)
    useEffect(() => {
        const timer = () => {
            updated()
            days.current = (Math.floor(distance.current / 1000 / 60 / 60 / 24));
            hours.current = (Math.floor(distance.current / 1000 / 60 / 60) % 24);
            minutes.current = Math.floor(distance.current / 1000 / 60) % 60;
            setseconds(Math.floor(distance.current / 1000) % 60);
            count.current = (count.current + 1)
        };
        setTimeout(() => {
            timer()
        }, 1450);
    });

    return (
        <>
            <div className="h-min-screen w-min-screen relative flex p-10 flex-col items-center justify-center">
                <Image alt='bg' fill objectFit='cover' src={bg} className='absolute  z-1' />
                <div className='bg-gray-800 opacity-60 h-full w-full absolute  z-6'></div>
                <div className='text-gray-400 z-9 text-5xl flex my-10 items-center justify-center text-center'>
                    Solar Blitz 2.0
                </div>
                <div className='bg-gray-100 z-6 w-min-40 p-4 w-[80vw] text-blue-950'>
                    <div className='rounded-xl px-3 text-white bg-gray-700 z-5'>About Event</div>
                    The Business Club of NIT Agartala is all set to host an exciting business event that promises to be an enriching experience for aspiring entrepreneurs and professionals alike. This event aims to bring together students, industry experts, and thought leaders for a day filled with insightful discussions, workshops, and networking opportunities. Attendees will have the chance to engage in panel discussions on trending business topics, participate in hands-on activities to hone their entrepreneurial skills, and gain valuable perspectives from seasoned mentors. With a focus on fostering innovation and collaboration, this event seeks to empower participants to turn their business ideas into reality and make a meaningful impact in the corporate world. Stay tuned for more details, as the Business Club of NIT Agartala gears up to make this event a grand success!
                </div>
                <div className='w-min-40 w-[80vw] z-10 flex bg-blue-300 text-xl text-green-950 flex-wrap'>
                    Date-  30th may 2025.
                    Vanue- NIT Agartala.
                    Time-  5:00 P.M.

                </div>
                <div className='flex flex-wrap w-min-40  bg-cyan-800 z-10 w-[80vw]'>
                    <div className=' w-2/5 w-min-40 flex text-white items-center justify-center text-5xl'>Event Starts In..</div>
                    <div className=' w-3/5 w-min-40 z-10 flex flex-col'>
                        <div className='text-4xl text-white'>{days.current} Days</div>
                        <div className='text-3xl text-white'>{hours.current} Hours</div>
                        <div className='text-2xl text-white'>{minutes.current} Minutes</div>
                        <div className='text-xl text-white'>{seconds} Seconds</div>
                    </div>
                    <div className=' flex w-full items-center justify-center '>
                        <Link className='text-xl text-white flex m-10 py-1 px-5 rounded-full bg-red-700 hover:bg-red-800' href={'/register'}>
                        REGISTER</Link>
                    </div>

                </div>





            </div>

        </>
    );
}

export default Hero;