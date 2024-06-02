import React from 'react'
import sidebarImg from '../Images/sidebar img.png'

import dashborad from '../Images/Layout-4-blocks.png'
import calulator from '../Images/Calculator.png'
import wallet from '../Images/Wallet.png'
import savings from '../Images/Swiss-knife.svg'
import currency from '../Images/Money.svg'
import expenses from '../Images/expenses.png'
import upcoming from '../Images/Fire.svg'
import food from '../Images/food.svg'
import user from '../Images/User.svg'
import health from '../Images/Watch.svg'

const Sidebar = () => {

    const sidebarItem = [
        {
            name: 'Dashboard',
            svg: dashborad,
        },
        {
            name: 'Calculator',
            svg: calulator

        },
        {
            name: 'Wallets',
            svg: wallet
        },
        {
            name: 'Savings',
            svg: savings
        },
        {
            name: 'Currencies',
            svg: currency
        },
        {
            name: 'Expenses',
            svg: expenses
        },
        {
            name: 'Upcoming',
            svg: upcoming
        },
        {
            name: 'Food',
            svg: food
        },
        {
            name: 'Health',
            svg: health
        },
        {
            name: 'Account',
            svg: user
        },
    ]
    return (
        <aside className='flex flex-col items-center gap-4 h-auto py-2 px-2 bg-[#F9FAFF]'>
            <h2 className='text-3xl text-center font-bold font-sans lg:tracking-normal xl:tracking-normal '>NAPSES</h2>
            <div className='flex flex-wrap justify-center'>

                {sidebarItem.map((data, index) => {
                    return (
                        <>
                            <div className='flex flex-col p-1 justify-center items-center lg:w-[5rem] xl:w-[5rem]'>
                                <button className='flex justify-center items-center p-2 w-11 h-11 bg-[#e4e6e9] rounded-md hover:bg-[#CFC8FF] active:bg-[#51459E] active:shadow-md active:shadow-[#51459E] '>
                                    <img className='w-6 h-6' src={data.svg} alt="" />
                                </button>
                                <span className='font-sans font-light text-xs leading-4 pt-2'>{data.name}</span>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className=' flex flex-col items-center justify-center w-44 h-60 bg-[#CFC8FF] rounded-xl'>
                <img className='w-40' src={sidebarImg} alt="" />

                <button className='bg-[#FFFFFF] hover:bg-[#e4e6e9] w-36 h-10 p-[12px, 20px, 12px, 20px] 
                gap-2 font-sans font-light text-sm text-[#5F75EE] rounded-2xl'>Get Pro Now</button>
            </div>
        </aside>
    )
}

export default Sidebar
