'use client'
import Image from 'next/image'
import pg from "../../public/OIP.jpeg"
import bg from "../../public/bg.png"
import React, { useEffect,useRef, useState } from 'react';

const targetDate = new Date("May 30 2025 17:00:00").getTime();
let l = new Date().getTime()


function Sign() {
    
    return (
        <><div className="h-screen w-screen p-20 flex items-center justify-center">
            <div className='w-sm h-140  flex p-2 flex-col shadow-2xl border-1 rounded-xl z-10'>
                <div className='w-full h-30   flex p-1 rounded-t-xl flex-col gap-2 items-center justify-center bg-blue-900'>
                    <div className='text-xl text-white'><b>Register with</b></div>
                    <div className='grid w-full grid-cols-2 gap-2'>
                        <span className='flex items-center h-10 rounded-xl justify-center   bg-white'>Google</span>
                        <span className='flex items-center h-10 rounded-xl justify-center  bg-white'>Apple</span>
                    </div>

                </div>
                <div className='w-full h-30   flex flex-col gap-3 p-1 items-center justify-center '>
                    <div className='text-sm w-full'>Name:</div>
                    <input className='w-full bg-gray-200 h-12 rounded-md p-3' placeholder='XXX' required></input>
                </div>
                <div className='w-full h-30   flex flex-col gap-3 p-1 items-center justify-center '>
                    <div className='text-sm w-full'>Email:</div>
                    <input className='w-full bg-gray-200  h-12 rounded-md p-3' placeholder='abc@tmail.com' required></input>
                </div>
                <div className='w-full h-30   flex flex-col gap-3 p-1 items-center justify-center '>
                    <div className='text-sm w-full flex gap-44'>
                        <div className='text-sm'>Password:</div>
                        <div className='text-sm text-blue-700 '>Forgot Password ?</div>
                    </div>
                    <input className='w-full bg-gray-200 h-12 rounded-md p-3' type='password' required ></input>
                </div>
                <div className='flex items-center justify-center '>
                    <button className='flex items-center justify-center h-13 m-2  rounded-2xl bg-blue-900 px-15 p text-white hover:bg-blue-800 '>
                        S U B M I T
                    </button>
                </div>
                
                

            </div>

            
        </div>
            
        </>
    );
}

export default Sign;