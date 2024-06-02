import React from 'react'
import image from '../Images/sidebar img.png'
import pen from '../Images/edit icon.svg'

import recievetl from '../Images/Icon.svg'
import recievelink from '../Images/link chainlink.svg'

import bte from '../Images/icons (3).svg'
import dai from '../Images/icons (4).svg'
import xrp from '../Images/icons (5).svg'
import usdt from '../Images/icons (6).svg'

import profile from '../Images/Ellipse 13.png'
import profile1 from '../Images/Ellipse 13 (1).png'
import profile2 from '../Images/Ellipse 13 (2).png'
import profile3 from '../Images/Ellipse 13 (3).png'


const Leftsidebar = () => {

    const cardData = [
        {
            name: 'Received LTC',
            svg: recievetl,
            price: '+ 15.08 USD',
            date: '09/28/2020',
            time: '19:22',
            profile1: profile,
            profile2: profile1
        },
        {
            name: 'Received LINK',
            svg: recievelink,
            price: '+ 957.96 USD',
            date: '09/28/2020',
            time: '19:22',
            profile1: profile2,
            profile2: profile3
        }
    ]

    const WalletsData = [
        {
            svg: bte,
            name: 'bte',
            percentage: '37%',
            subname: 'bitcoin',
            subpercentage: '-2.5%',
        },
        {
            svg: dai,
            name: 'DAI',
            percentage: '23%',
            subname: 'Dai',
            subpercentage: '+7.2%',
        },
        {
            svg: xrp,
            name: 'xrp',
            percentage: '20%',
            subname: 'Ripple',
            subpercentage: '-3.1%',
        },
        {
            svg: usdt,
            name: 'USDT',
            percentage: '17%',
            subname: 'Teather',
            subpercentage: '+1.8%',
        },
    ]
    return (
        <aside className='h-auto py-2 px-10 bg-[#F9FAFF]'>
            <div className='flex justify-between'>
                <h2 className='text-3xl font-bold font-sans pb-3'>Payments</h2>
                <button className='bg-[#FFFFFF] py-2 px-4 rounded-md'>Clear</button>
            </div>


            {cardData.map((data, index) => {
                return (
                    <>
                        <div className="card flex flex-col justify-between w-full h-28 p-4 mt-2 rounded-xl bg-[#FFFFFF] drop-shadow-md" key={index}>
                            <div className='flex justify-between items-center'>
                                <img className='w-9 h-9' src={data.svg} alt="" />
                                {/* <div className='flex justify-between px-3 items-start border border-red-900 w-full'> */}
                                <h3 className='text-sm text-[#0F1231] font-semibold'>{data.name}</h3>
                                <svg className='' width="13" height="12" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.13142 6.99021C5.91165 6.99021 5.6919 6.90629 5.52434 6.73881L0.251563 1.46598C-0.0838544 1.13056 -0.0838544 0.586743 0.251563 0.251461C0.586845 -0.0838204 1.13056 -0.0838204 1.466 0.251461L6.13142 4.91715L10.7969 0.251624C11.1323 -0.0836575 11.6759 -0.0836575 12.0112 0.251624C12.3468 0.586906 12.3468 1.13073 12.0112 1.46614L6.73851 6.73898C6.57087 6.90648 6.35112 6.99021 6.13142 6.99021Z" fill="#AFBCCD" />
                                </svg>
                                {/* </div> */}
                                <span className='bg-[#F9FAFF] text-sm font-sans font-normal drop-shadow-md rounded-md p-2'>{data.price}</span>
                            </div>

                            <div className='flex justify-between items-end'>
                                <span className='font-light text-xs'>{data.date} {data.time}</span>
                                <div className='flex justify-end items-end relative w-24 h-8'>
                                    <div className='w-8 h-8 flex justify-center items-center border-4 border-[#fff]  rounded-full absolute right-8   z-10'>
                                        <img className='w-full h-full object-cover' src={data.profile1} alt="" />
                                    </div>
                                    <div className='w-8 h-8 flex justify-center items-center border-4 border-[#fff]  rounded-full absolute right-4  z-20'>
                                        <img className='w-full h-full object-cover' src={data.profile2} alt="" />
                                    </div>
                                    <div className='w-8 h-8 text-xs flex justify-center items-center rounded-full absolute text-[#FE5D6C] bg-[#89D9AA] font-serif leading-4 font-semibold border-4 border-[#fff] opacity-[70%] z-30'>
                                        +6
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )
            })}


            {/* <div> */}

            {/* <div class="relative w-64 h-64 border border-gray-500">
                <div class="absolute top-4 left-4 w-32 h-32 bg-red-500 z-10">Div 1</div>
                <div class="absolute top-4 left-16 w-32 h-32 bg-blue-500 z-20">Div 2</div>
            </div> */}

            <div className='flex items-center gap-20 p-2 my-6 bg-[#D7D6EC] hover:bg-[#e4e6e9] w-full rounded-lg  hover:cursor-pointer'>
                <img className='p-2 bg-[#FFFFFF] w-7 h-7 rounded-lg' src={pen}></img>
                <p className='font-[Berlin Sans FB] flex gap-2  text-[#51459E] font-semibold text-xs leading-3'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 5.75H8.5C8.36194 5.75 8.25 5.63806 8.25 5.5V1.25C8.25 0.559692 7.69031 0 7 0C6.30969 0 5.75 0.559692 5.75 1.25V5.5C5.75 5.63806 5.63806 5.75 5.5 5.75H1.25C0.559692 5.75 0 6.30969 0 7C0 7.69031 0.559692 8.25 1.25 8.25H5.5C5.63806 8.25 5.75 8.36194 5.75 8.5V12.75C5.75 13.4403 6.30969 14 7 14C7.69031 14 8.25 13.4403 8.25 12.75V8.5C8.25 8.36194 8.36194 8.25 8.5 8.25H12.75C13.4403 8.25 14 7.69031 14 7C14 6.30969 13.4403 5.75 12.75 5.75Z" fill="#51459E" />
                    </svg>
                    New Transfer</p>
            </div>
            {/* </div> */}

            <div>
                <h2 className='font-sans text-2xl leading-10 font-bold my-3'>Wallets</h2>

                {WalletsData.map((wallets, index) => {
                    return (
                        <div className='flex my-2 gap-4'>
                            <img className='w-12 h-12' src={wallets.svg} alt=""></img>
                            <div className='w-full'>

                                <div className='flex justify-between'>
                                    <span className='text-lg font-[Berlin Sans FB] font-bold text-[#5D4E7B] uppercase font-[#5D4E7B]'>{wallets.name}</span>
                                    <span className='text-lg font-[Berlin Sans FB] font-bold text-[#5D4E7B] uppercase font-[#5D4E7B]'>{wallets.percentage}</span>
                                </div>
                                <ul className='flex justify-between '>
                                    <li className='text-xs capitalize font-sans font-light text-[#5D4E7B]'>{wallets.subname}</li>
                                    <li className='text-sm font-sans font-light text-[#5D4E7B] odd:text-[#50DFB2]'>{wallets.subpercentage}</li>
                                </ul>
                            </div>

                        </div>
                    )
                })}

            </div>
        </aside>
    )
}

export default Leftsidebar
