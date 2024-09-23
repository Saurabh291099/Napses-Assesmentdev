import { React, useState } from 'react'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/modules/pagination/pagination.min.css';


import mac1 from '../Images/mac1.png'
import mac2 from '../Images/mac2.png'
import mac3 from '../Images/mac3.png'
import mac4 from '../Images/mac4.png'
import mac5 from '../Images/mac5.png'
import mac6 from '../Images/mac6.png'


const Test = () => {

    const [isHovered, setIsHovered] = useState(false);


    const carouselImage = [
        { img: mac1 },
        { img: mac2 },
        { img: mac3 },
        { img: mac4 },
        { img: mac5 },
        { img: mac6 },
    ]

    return (
        <>

            <div className='w-[100%] h-auto flex flex-col justify-center items-center py-10 bg-[#000000d9]'>

                <div className='w-[980px] h-auto border border-red-700 bg-white rounded-3xl overflow-hidden'>

                    <div class="flex p-14">

                        <div className='w-[50%] px-5' >

                            <div className='flex justify-center gap-6'>
                                <button className='py-2 px-6 text-[14px] border rounded-3xl font-semibold bg-[#e8e8ed]'>13'' (M2)</button>
                                <button className='py-2 px-6 text-[14px] rounded-3xl'>13'' (M3)</button>
                                <button className='py-2 px-6 text-[14px]  rounded-3xl'>15'' (M3)</button>
                            </div>

                            <div className='py-4 h-auto'>

                                <div className="flex flex-col gap-3 relative px-5">
                                    <div className="relative" onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}>
                                        <Swiper className=''
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            pagination={{
                                                el: '.swiper-pagination',
                                                clickable: true,
                                                // dynamicBullets: true, // Add dynamic bullets
                                            }}
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                            }}
                                            modules={[Pagination, Navigation]}
                                        >
                                            {carouselImage.map((data, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        className='w-full h-full object-cover'
                                                        src={data.img}
                                                        alt={`carousel ${index + 1}`}
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        {/* <div className="swiper-button-next bg-black opacity-70"></div>
                                        <div className="swiper-button-prev bg-black opacity-70"></div> */}

                                        <div
                                            className={`swiper-button-next transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                                                }`}
                                        ></div>
                                        <div
                                            className={`swiper-button-prev transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                                                }`}
                                        ></div>

                                    </div>


                                    <div className="swiper-pagination z-30 pt-2 text-[#333333]"></div>

                                </div>




                                {/* <div class="swiper mySwiper">
                                    <div class="swiper-wrapper" modules={[Navigation]}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}>


                                        {carouselImage.map((data, index) => (

                                            <div class="swiper-slide" key={index}>
                                                <img className='w-full h-full object-cover' src={data.img} alt={`carousel ${index + 1}`} />

                                            </div>

                                        ))}
                                    </div>
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div> */}


                            </div>
                            <div className='my-10 py-4 flex items-center justify-center flex-col gap-3'>
                                <p className='text-sm text-[#6e6e73]'>Available in 4 colours</p>
                                <div className='flex gap-2'>
                                    <div className='w-3 h-3 rounded-full bg-[#7D7E80]'></div>
                                    <div className='w-3 h-3 rounded-full bg-[#333333]'></div>
                                    <div className='w-3 h-3 rounded-full bg-[#F0E4D3]'></div>
                                    <div className='w-3 h-3 rounded-full bg-[#E3E4E6]'></div>

                                </div>

                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <h1 className='font-semibold text-3xl'>MacBook Air <br />
                                13" with M2 chip</h1>

                            <div className='flex justify-between py-3'>
                                <p className='mr-24'>From ₹15317.00/mo. with instant cashback<sup>ss</sup> and No Cost EMI<sup>ss</sup>Footnote or ₹99900<sup>‡</sup></p>

                                <div>

                                    <button className='bg-[#0071e3] hover:bg-[#3900e3] text-white py-[8px] px-[15px] rounded-2xl text-sm'>Buy</button>

                                </div>
                            </div>

                            <div>

                                <div className="flex items-center gap-4 p-2">
                                    <span>
                                        <svg height="40" viewBox="0 0 35 35" width="40" class="as-svgicon" aria-hidden="true" role="img">
                                            <path d="m0 0h35v35h-35z" fill="none"></path><path d="m18 8.5v18a.5.5 0 0 1 -1 0v-18a.5.5 0 0 1 1 0zm13.5 8.5h-9.7969l4.0225-4.0215a.5.5 0 0 0 -.707-.707l-4.6993 4.6985a.7516.7516 0 0 0 0 1.0606l4.6993 4.6982a.5.5 0 0 0 .707-.707l-4.0225-4.0218h9.7969a.5.5 0 0 0 0-1zm-21.5215-4.7285a.5.5 0 0 0 -.707.707l4.0215 4.0215h-9.7969a.5.5 0 1 0 0 1h9.7969l-4.0215 4.0215a.5.5 0 1 0 .707.707l4.6983-4.6985a.7516.7516 0 0 0 0-1.0606z"></path>
                                        </svg>
                                    </span>
                                    <p className='font-normal text-[17px]'><span className='font-semibold'>Portable design —</span> Lightweight and less than two centimeters thin, so you can take MacBook Air anywhere you go.</p>
                                </div>
                                <hr />
                                <div className="flex items-center gap-4 p-2">
                                    <span>
                                        <svg height="40" viewBox="0 0 35 35" width="40" class="as-svgicon" role="img" aria-hidden="true">
                                            <path d="m0 0h35v35h-35z" fill="none"></path>
                                            <path d="m24.5 6h-14a4.505 4.505 0 0 0 -4.5 4.5v14a4.505 4.505 0 0 0 4.5 4.5h14a4.505 4.505 0 0 0 4.5-4.5v-14a4.505 4.505 0 0 0 -4.5-4.5zm-11.8984 8.1807a1.4755 1.4755 0 0 1 .9736-.5049.622.622 0 0 1 .0137.1328 1.499 1.499 0 0 1 -.3506.9277 1.301 1.301 0 0 1 -.8975.47.5255.5255 0 0 1 -.09-.0088.6223.6223 0 0 1 -.0127-.1192 1.4425 1.4425 0 0 1 .3635-.8976zm1.9013 5.2978c-.2822.4053-.581.8154-1.03.8154-.4522 0-.5674-.2646-1.085-.2646-.5078 0-.6875.2734-1.0977.2734-.415 0-.7011-.38-1.03-.8418a4.0625 4.0625 0 0 1 -.6914-2.1953 1.7721 1.7721 0 0 1 1.6611-1.97c.4365 0 .8.2861 1.0771.2861.2608 0 .667-.3037 1.1661-.3037a1.5559 1.5559 0 0 1 1.3115.6582 1.4978 1.4978 0 0 0 -.7129 1.2608 1.4625 1.4625 0 0 0 .8848 1.3408 3.55 3.55 0 0 1 -.4536.9407zm6.501.7774h-.9189v-3.3565h-.0684l-1.2656 3.3565h-.6455l-1.2647-3.3565h-.0683v3.3565h-.92v-4.9317h1.1836l1.3633 3.6094h.0615l1.36-3.6094h1.1826zm4.376 0h-3.5586v-.6934l1.59-1.5693c.6934-.6729.8809-.9229.8809-1.2686v-.01a.6929.6929 0 0 0 -.758-.7146.7649.7649 0 0 0 -.8145.79v.0166h-.9531l-.0039-.0136a1.6342 1.6342 0 0 1 1.8184-1.5957c1.0156 0 1.7265.581 1.7265 1.4316v.0111c0 .5606-.291 1.0254-1.1894 1.8565l-.9121.8506v.0791h2.1739z"></path>
                                        </svg>
                                    </span>
                                    <p className='font-normal text-[17px]'><span className='font-semibold'> Get more done faster — </span> The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly.</p>
                                </div>
                                <hr />

                                <div className="flex items-center gap-4 p-2">
                                    <span>
                                        <svg class="as-svgicon" height="40" width="40" aria-hidden="true" role="img" viewBox="0 0 35 35">
                                            <rect width="35" height="35" fill="none"></rect><path d="M27,14.5v6A2.5,2.5,0,0,1,24.5,23H7.5A2.5,2.5,0,0,1,5,20.5v-6A2.5,2.5,0,0,1,7.5,12h17A2.5,2.5,0,0,1,27,14.5Zm2,0v6A4.505,4.505,0,0,1,24.5,25H7.5A4.505,4.505,0,0,1,3,20.5v-6A4.505,4.505,0,0,1,7.5,10h17A4.505,4.505,0,0,1,29,14.5Zm-1,0A3.5,3.5,0,0,0,24.5,11H7.5A3.5,3.5,0,0,0,4,14.5v6A3.5,3.5,0,0,0,7.5,24h17A3.5,3.5,0,0,0,28,20.5ZM30,20a2.562,2.562,0,0,0,0-5Z"></path>
                                        </svg>
                                    </span>
                                    <p className='font-normal text-[17px]'><span className='font-semibold'>Up to 18 hours of battery life —</span> Amazing, all-day battery life so you can leave the power adapter at home.  footnote  ¹</p>
                                </div>
                                <hr />

                                <div className="flex items-center gap-4 p-2">
                                    <span>
                                        <svg height="35" viewBox="0 0 35 35" width="35" class="as-svgicon" aria-hidden="true" role="img">
                                            <path d="m0 0h35v35h-35z" fill="none"></path><path d="m29 7.5v7.5068a.5.5 0 0 1 -1 0v-7.3l-8.6445 8.6451a.5.5 0 0 1 -.7071-.7071l8.6441-8.6448h-7.2993a.5.5 0 0 1 0-1h7.5068a1.5017 1.5017 0 0 1 1.5 1.5zm-13.3555 11.1484-8.6445 8.6451v-7.3a.5.5 0 0 0 -1 0v7.5065a1.5017 1.5017 0 0 0 1.5 1.5h7.5068a.5.5 0 0 0 0-1h-7.2993l8.6441-8.6445a.5.5 0 0 0 -.7071-.7071z"></path>
                                        </svg>
                                    </span>
                                    <p className='font-normal text-[17px]'><span className='font-semibold'>A brilliant display —</span> The 13.6-inch Liquid Retina display supports 1 billion colours.  footnote  ²</p>
                                </div>
                                <hr />

                                <div className="flex items-center gap-4 p-2">
                                    <span>
                                        <svg height="35" viewBox="0 0 35 35" width="35" class="as-svgicon" aria-hidden="true" role="img">
                                            <path d="m0 0h35v35h-35z" fill="none"></path>
                                            <path d="m30.5233 10a2.2586 2.2586 0 0 0 -1.3614.5936l-4.6619 3.8214v-2.415a4 4 0 0 0 -4-4h-13.5a4 4 0 0 0 -4 4v11a4 4 0 0 0 4 4h13.5a4 4 0 0 0 4-4v-2.418l4.6619 3.8244a2.2586 2.2586 0 0 0 1.3614.5936 1.4581 1.4581 0 0 0 1.4767-1.61v-11.78a1.4581 1.4581 0 0 0 -1.4767-1.61zm-7.0233 13a3.0034 3.0034 0 0 1 -3 3h-13.5a3.0034 3.0034 0 0 1 -3-3v-11a3.0034 3.0034 0 0 1 3-3h13.5a3.0034 3.0034 0 0 1 3 3zm7.5.39c0 .61-.3463.61-.4767.61a1.29 1.29 0 0 1 -.7274-.3669l-5.2959-4.3574v-3.5777l5.29-4.3262a1.3022 1.3022 0 0 1 .7333-.3718c.13 0 .4767 0 .4767.61z"></path>
                                        </svg>
                                    </span>
                                    <p className='font-normal text-[17px]'><span className='font-semibold'>Look sharp, sound great —</span> Everything looks and sounds amazing with a 1080p FaceTime HD camera, three mics, and four speakers with Spatial Audio.
                                    </p>
                                </div>
                                <p className='my-3 text-sky-600 font-normal text-lg'>Explore MacBook Air furthe &gt;</p>
                            </div>

                        </div>


                    </div>



                    <div className='grid grid-cols-3 gap-4 py-2 px-14 bg-[#F5F5F7]'>
                        <div className="flex items-start gap-2 py-2">
                            <span>
                                <svg width="24" height="32" viewBox="0 0 42 56" xmlns="http://www.w3.org/2000/svg" class="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated" aria-hidden="true" role="img">
                                    <g>
                                        <rect width="36" height="45" fill="none"></rect>
                                        <path d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z" fill="#6cca4e"></path>
                                    </g>
                                </svg>
                            </span>
                            <div>
                                <h5 className='font-semibold text-[14px]'>Flexible ways to pay</h5>
                                <p className='text-sm'>No Cost EMI and EMI available.§</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 py-2">
                            <span>
                                <svg width="24" height="32" viewBox="0 0 43 56" xmlns="http://www.w3.org/2000/svg" class="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated" aria-hidden="true" role="img"><path d="m0 0h43v56h-43z" fill="none"></path><path d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z" fill="#ab45fb"></path><path d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z" fill="#ab45fb"></path><path d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z" fill="#ab45fb"></path><path d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z" fill="#ab45fb"></path></svg>
                            </span>
                            <div>
                                <h5 className='font-semibold text-[14px]'>Apple Trade In</h5>
                                <p className='text-sm'>Trade in your eligible device for credit towards your next purchase.**</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 py-2">

                            <span>
                                <svg height="32" viewBox="0 0 49 56" width="24" class="as-svgicon as-svgicon-boxtruck as-svgicon-elevated" aria-hidden="true" role="img">
                                    <path d="m0 0h49v56h-49z" fill="none"></path>
                                    <path d="m47.8447 27.501-6.6757-7.1289a4.37 4.37 0 0 0 -3.4854-1.3721h-4.6836v-4a5 5 0 0 0 -5-5h-23a5 5 0 0 0 -5 5v21a5 5 0 0 0 5 5h1.15a5.6216 5.6216 0 0 0 11.2 0h13.8a5.6216 5.6216 0 0 0 11.2 0h2.6436c2.5464 0 4.0064-1.4092 4.0064-3.8657v-6.7515a4.15 4.15 0 0 0 -1.1553-2.8818zm-32.5202 13.499a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2844-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.051.5zm15.6755-2h-13.8335a5.6187 5.6187 0 0 0 -10.833 0h-1.3335a3.0033 3.0033 0 0 1 -3-3v-21a3.0033 3.0033 0 0 1 3-3h23a3.0033 3.0033 0 0 1 3 3zm9.3245 2a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2839-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.0505.5zm6.6755-3.8657c0 1.3257-.581 1.8657-2.0068 1.8657h-2.8267a5.6127 5.6127 0 0 0 -9.1665-2.6843v-15.3157h4.6836a2.4292 2.4292 0 0 1 2.03.7437l6.6875 7.1411a2.18 2.18 0 0 1 .5989 1.498zm-3.3913-8.0216a1.2119 1.2119 0 0 1 .3913.8873h-7.7773a1.1432 1.1432 0 0 1 -1.2227-1.2324v-5.7676h2.4131a1.6822 1.6822 0 0 1 1.3364.6244z" fill="#6CCA4E"></path>
                                </svg>
                            </span>
                            <div>
                                <h5 className='font-semibold text-[14px]'>Free delivery and pickup.</h5>
                                <p className='text-sm'>Get free delivery or pick up at your Apple Store.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[980px] flex flex-col gap-2 py-6 text-[#fff] text-xs text-justify'>

                    <p>◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15.99% p.a. over a 6-month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions.</p>

                    <p>Representative example:
                        Based on purchase of ₹79900.00. Total amount payable ₹83667.00 paid over 6 months as 6 monthly payments of ₹13945.00 at an interest rate of 15.99% p.a. Total interest paid to bank: ₹3767.00.</p>

                    <p>§ No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer's terms and conditions. Minimum order spend applies as per your card issuer’s threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.</p>
                    <p>
                        Representative example:
                        Based on a 6 month tenure. ₹79900.00 total cost includes 15.99% pa and No Cost EMI savings of ₹3596.00, paid over 6 months as 6 monthly payments of ₹13317.00.</p>

                    <p>
                        §§ Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank, and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback. To receive this offer, purchase must be charged to a single eligible card.

                    </p>

                    <p>** Mac, iPad, and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad, and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</p>

                    <p>
                        1. Testing conducted by Apple in May 2022 using pre-production MacBook Air systems with Apple M2, 8-core CPU, 8-core GPU, 8GB of RAM and 256GB SSD. The wireless web test measures battery life by wirelessly browsing 25 popular websites with display brightness set to 8 clicks from bottom. The Apple TV app movie playback test measures battery life by playing back HD 1080p content with display brightness set to 8 clicks from bottom. Battery life varies by use and configuration. See apple.com/in/batteries(opens in new window) for more information.
                    </p>

                    <p>
                        2. Screen size is measured diagonally. The displays on the 13-inch and 15-inch MacBook Air have rounded corners at the top. When measured as a standard rectangular shape, the screens are 13.6 inches and 15.3 inches diagonally (actual viewable area is less).
                    </p>


                </div>
            </div>
        </>
    )
}

export default Test
