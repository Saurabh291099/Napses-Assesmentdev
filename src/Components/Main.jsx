import React, { act, useState, useEffect } from 'react'
import seachIcon from '../Images/search icon.svg'

import bitcoin from '../Images/Coin Icon.svg'
import bitcoin2 from '../Images/Coin Icon (1).svg'
import bitcoin3 from '../Images/Coin Icon (2).svg'
import insurance from '../Images/icons.svg'
import electricity from '../Images/electricity icon.svg'

const Main = () => {

  const midCardData = [
    {
      name: 'Bitcoin',
      svg: bitcoin,
      price: '11,032.24 USD',
      value: '0.2231345 BTC',
      color: '#FDEDD5'
    }, {
      name: 'Etherium',
      svg: bitcoin2,
      price: '1242.31 USD',
      value: '10.612356 ETH',
      color: '#FDE4F9'
    }, {
      name: 'Litecoin',
      svg: bitcoin3,
      price: '37,747.78 USD',
      value: '120.235 LTC',
      color: '#B5E0E9'
    },
  ]

  const activityData = [
    {
      svg: insurance,
      name: 'Insurance',
      subname: 'Property Coverage',
      wallet: 'LTC Wallet',
      date: '7 Jun, 21',
      balance: '-10.24 LTC'
    }, {
      svg: electricity,
      name: 'Electricity',
      subname: 'Utility payments',
      wallet: 'ETH Wallet',
      date: '9 Jun, 21',
      balance: '-3.543 ETH'
    }
  ]
  return (
    <main className='h-auto py-2 lg:px-8 xl:px-14'>

      {/* search bar  */}

      <div className='flex relative'>
        <img className='absolute top-4 left-3' src={seachIcon} alt="seach icon" />
        <input className='w-full h-12 py-2 px-10 font-sans leading-5 text-base text-[#7B7B7B] outline-0 bg-[#F7F8FA] rounded-xl' type="search" name="search" id="search" placeholder='Search...' />
      </div>



      {/* Mid card Start  */}

      <div className='py-5'>
        <h2 className='font-sans text-3xl leading-10 font-bold text-[#393939]'>Hi Daniel</h2>
        <div className='flex justify-between my-6'>

            {midCardData.map((cardData, index) => {
              return (
                <>
                  <div className='flex flex-col p-4 gap-4 lg:w-36 lg:h-56 xl:w-52 xl:h-72 rounded-xl' style={{ backgroundColor: cardData.color }}>
                    <div className='flex justify-between w-full'>
                      <h3 className='text-sm font-semibold font-[Berlin Sans FB] leading-5'>{cardData.name}</h3>
                      <svg width="5" height="18" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.2001 16.2C4.2001 15.2059 3.39421 14.4 2.4001 14.4C1.40598 14.4 0.600098 15.2059 0.600098 16.2C0.600098 17.1941 1.40599 18 2.4001 18C3.39421 18 4.2001 17.1941 4.2001 16.2Z" fill="#182B73" />
                        <path d="M4.2001 9.00005C4.2001 8.00594 3.39421 7.20005 2.4001 7.20005C1.40598 7.20005 0.600098 8.00594 0.600098 9.00005C0.600098 9.99416 1.40599 10.8 2.4001 10.8C3.39421 10.8 4.2001 9.99416 4.2001 9.00005Z" fill="#182B73" />
                        <path d="M4.2001 1.8001C4.2001 0.805985 3.39421 9.73911e-05 2.4001 9.74345e-05C1.40598 9.7478e-05 0.600098 0.805985 0.600098 1.8001C0.600098 2.79421 1.40599 3.6001 2.4001 3.6001C3.39421 3.6001 4.2001 2.79421 4.2001 1.8001Z" fill="#182B73" />
                      </svg>

                    </div>
                    <img className='lg:w-16 lg:h-16 xl:w-24 xl:h-24' src={cardData.svg} alt="" />

                    <p className='font-[Berlin Sans FB Demi] lg:text-sm xl:text-lg text-[#3E3C7B] font-bold'>{cardData.value}</p>
                    <p className='font-[Berlin Sans FB Demi] lg:text-[10px] xl:text-xs text-[#3E3C7B] font-bold'>{cardData.price}</p>
                  </div>
                </>
              )
            })}
        </div>

      </div>


      {/* Activities Start  */}

      <div className=''>
        <div className='flex w-full justify-between items-center'>
          <h2 className='font-sans text-2xl leading-10 font-bold text-[#000000]'>Latest Activity</h2>
          <div className='flex gap-4'>
            <button className='p-2 flex justify-center items-center bg-[#F7F7F9] hover:bg-[#CFC8FF] text-[#6F767E] font-semibold underline rounded-lg'>Edit</button>
            <button className='p-2 flex justify-center items-center bg-[#51459E] rounded-lg hover:bg-[#CFC8FF]'>
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4223 6.974C9.72817 6.974 9.0496 7.18883 8.47243 7.59132C7.89526 7.99381 7.44541 8.56589 7.17976 9.23521C6.91412 9.90453 6.84461 10.641 6.98004 11.3516C7.11546 12.0621 7.44973 12.7148 7.94058 13.2271C8.43142 13.7393 9.0568 14.0882 9.73762 14.2295C10.4184 14.3709 11.1241 14.2983 11.7655 14.0211C12.4068 13.7439 12.9549 13.2744 13.3406 12.672C13.7262 12.0696 13.9321 11.3614 13.9321 10.637C13.9321 9.66548 13.5623 8.73379 12.9041 8.04686C12.2459 7.35992 11.3532 6.974 10.4223 6.974ZM10.4223 12.7301C10.0257 12.7301 9.63792 12.6073 9.3081 12.3773C8.97829 12.1473 8.72123 11.8204 8.56944 11.438C8.41764 11.0555 8.37792 10.6346 8.45531 10.2286C8.53269 9.82259 8.7237 9.44963 9.00419 9.1569C9.28467 8.86417 9.64203 8.66482 10.0311 8.58406C10.4201 8.5033 10.8234 8.54475 11.1898 8.70317C11.5563 8.86159 11.8695 9.12987 12.0899 9.47409C12.3103 9.8183 12.4279 10.223 12.4279 10.637C12.4279 11.1921 12.2166 11.7245 11.8405 12.117C11.4644 12.5096 10.9542 12.7301 10.4223 12.7301Z" fill="#6F767E" />
                <path d="M20.4421 9.06715C19.9429 9.01601 19.4665 8.82434 19.0636 8.51261C18.6607 8.20088 18.3466 7.7808 18.1546 7.29723C17.9627 6.81365 17.9002 6.28475 17.9739 5.76701C18.0476 5.24927 18.2546 4.76214 18.5729 4.35763L18.5849 4.34193L17.5119 3.23781L16.449 2.12846H16.444C15.9554 2.55316 15.34 2.78638 14.7042 2.78779C14.0148 2.79071 13.3492 2.52513 12.8375 2.04299C12.3258 1.56085 12.0049 0.896826 11.9375 0.180806V0.171387H8.91814V0.179759C8.85117 0.896239 8.53026 1.5608 8.0183 2.04323C7.50635 2.52566 6.84023 2.79119 6.15047 2.78779C5.51316 2.7881 4.89586 2.55557 4.40564 2.13055L4.39561 2.11799L3.33267 3.23781L2.26972 4.34716L2.28076 4.35763C2.59906 4.76221 2.80608 5.24943 2.87969 5.76725C2.95331 6.28507 2.89075 6.81404 2.69871 7.29764C2.50667 7.78124 2.19236 8.20131 1.78935 8.51297C1.38634 8.82464 0.909782 9.01618 0.410576 9.06715H0.394531V12.2173H0.403556C0.900971 12.2695 1.37555 12.4613 1.77693 12.7724C2.17831 13.0834 2.49151 13.5021 2.68327 13.9839C2.87504 14.4658 2.93823 14.9928 2.86612 15.5091C2.79402 16.0254 2.58931 16.5117 2.27374 16.9164V16.9216L3.33668 18.0309L4.39962 19.1508L4.40564 19.1434C4.89582 18.7183 5.51315 18.4858 6.15047 18.4862C6.84023 18.4828 7.50635 18.7483 8.0183 19.2308C8.53026 19.7132 8.85117 20.3777 8.91814 21.0942V21.1026H11.9365V21.0932C12.0037 20.3769 12.3247 19.7126 12.8366 19.2304C13.3486 18.7482 14.0146 18.4828 14.7042 18.4862C15.3396 18.4868 15.9549 18.7189 16.444 19.1424H16.449L17.5119 18.033L18.5849 16.9237C18.2676 16.5194 18.0612 16.0329 17.9878 15.516C17.9144 14.999 17.9767 14.4709 18.1681 13.988C18.3595 13.5051 18.6728 13.0854 19.0746 12.7735C19.4765 12.4617 19.9518 12.2695 20.4501 12.2173V9.06715H20.4421ZM18.9459 11.0368C17.965 11.506 17.1903 12.3449 16.7772 13.3853C16.3642 14.4257 16.3433 15.5906 16.7187 16.6463L16.449 16.9258L16.1903 17.1958C15.7152 17.0096 15.2116 16.9149 14.7042 16.9164C13.8812 16.9133 13.0749 17.1587 12.3824 17.6229C11.69 18.0871 11.1409 18.7503 10.8014 19.5328H10.0543C9.71435 18.7504 9.16504 18.0873 8.47247 17.6231C7.77989 17.1589 6.97355 16.9135 6.15047 16.9164C5.64028 16.9153 5.13422 17.0118 4.65734 17.201L4.39561 16.9258L4.13288 16.6516C4.51042 15.594 4.48981 14.4264 4.07522 13.3841C3.66062 12.3418 2.88287 11.5023 1.8987 11.0347V10.254C2.88752 9.78718 3.66904 8.94512 4.08456 7.89878C4.50007 6.85244 4.51843 5.68027 4.13589 4.62032L4.40564 4.34298L4.66135 4.07296C5.13707 4.26133 5.64166 4.35779 6.15047 4.35763C6.97344 4.36055 7.77967 4.11514 8.47209 3.65095C9.16452 3.18675 9.71362 2.52356 10.0533 1.74123H10.8003C11.1402 2.52365 11.6895 3.18687 12.3821 3.65106C13.0747 4.11526 13.8811 4.36062 14.7042 4.35763C15.2114 4.35864 15.7146 4.26361 16.1893 4.07715L16.453 4.35763L16.7147 4.62869C16.3361 5.68639 16.3557 6.85459 16.7698 7.89774C17.1839 8.94089 17.9615 9.78139 18.9459 10.2498V11.0368Z" fill="#6F767E" />
              </svg>
            </button>
          </div>
        </div>

        <h3 className='text-[#6F767E] font-[Berlin Sans FB Demi] font-bold leading-4 text-sm'>Updated 12 minutes ago</h3>

        <div>
          {activityData.map((activity, index) => {
            return (
              <>
                <div className='flex w-full gap-4 my-8 items-center'>
                  <img className='w-12 h-12 p-3 flex justify-center items-center bg-[#F7F7F9] rounded-lg' src={activity.svg} alt="" />
                  <div className="grid grid-cols-4 grid-rows-1 w-full gap-4">

                    <div>
                      <h4 className='text-[#000] font-[Berlin Sans FB Demi] font-bold leading-5 text-base'>{activity.name}</h4>
                      <p className='text-[#6F767E] font-[Berlin Sans FB Demi] font-bold leading-5 lg:text-[10px] xl:text-sm'>{activity.subname}</p>
                    </div>
                    <div >
                      <h4 className='text-[#000] font-[Berlin Sans FB Demi] font-bold leading-5 text-base'>{activity.wallet}</h4>
                      <p className='text-[#6F767E] font-[Berlin Sans FB Demi] font-bold leading-5 lg:text-[10px] xl:text-sm'>Personal account</p>
                    </div>
                    <div >
                      <h4 className='text-[#000] font-[Berlin Sans FB Demi] font-bold leading-5 text-base'>{activity.date}</h4>
                      <p className='text-[#6F767E] font-[Berlin Sans FB Demi] font-bold leading-5 lg:text-[10px] xl:text-sm'>Last payment</p>
                    </div>
                    <div >
                      <h4 className='text-[#000] font-[Berlin Sans FB Demi] font-bold leading-5 text-base'>{activity.balance}</h4>
                      <p className='text-[#6F767E] font-[Berlin Sans FB Demi] font-bold leading-5 lg:text-[10px] xl:text-sm'>Balance</p>
                    </div>


                  </div>
                </div >
              </>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Main
