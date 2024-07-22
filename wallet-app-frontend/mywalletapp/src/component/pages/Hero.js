import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
          {/* <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-screen flex items-center justify-center">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                {/* <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" alt="Hero" className="w-full h-48 object-cover mb-4 rounded-lg" /> 
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to WalletApp</h1>
                <p className="text-gray-700 mb-6">
                    Manage your funds easily and securely. Add funds, transfer money, and keep track of your balance, all in one place.
                    </p>
                <div className="flex justify-center space-x-4">
                     <Link to="/auth/login" className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center">
                     <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                        Login
                   </Link>
                    <Link to="/auth/register" className="bg-gray-200 text-gray-900 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 flex items-center">
                       <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                        Sign Up
                    </Link>
                </div>
           </div>
         </div>
  */}

        <div className="relative isolate overflow-hidden bg-gray-900">
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true">
    <defs>
      <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="100%" y="-1"
        patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none"></path>
      </pattern>
    </defs>
    <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
      <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        stroke-width="0"></path>
    </svg>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
  </svg>
  <div
    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
    aria-hidden="true">
    <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20">
    </div>
  </div>
  <div className="mt-[-50px] flex h-[90vh] items-center justify-center">
    <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
        Revolutionize&nbsp;
        <span className="text-sky-500">your&nbsp;payments</span>&nbsp;
        with&nbsp;
       <span className="text-sky-500">SimplePay!</span>
        </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">Elevate Your Productivity With SimplePay, Your Personalized Wallet
        App!</p>
      <div className="mt-5 flex items-center justify-center gap-x-6">
        <a href="/auth/register"
          className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          rel="noreferrer">Try Now →</a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more
                    <span>&nbsp;→</span>
                </a>
      </div>
    </div>
  </div>
</div>

{/*About us area */}
    <section className="  pt-52 pb-28 max-sm:pt-14 ">
      <div className="max-container 2xl:px-24">
        <div className="w-full flex items-center justify-between gap-10">
          <div
            id="left"
            className=" flex flex-col max-w-96 w-full my-auto text-xl font-medium leading-6 text-zinc-900 text-opacity-80 max-md:mt-10"
          >
            <div className="text-sm text-blue-700 uppercase tracking-[5px] max-sm:whitespace-nowrap max-sm:text-xs">
              FINANCIAL EXCELLENCE
            </div>
            <h1 className="mt-8 text-5xl font-bold tracking-tighter leading-[56px] text-neutral-800 max-md:text-4xl max-md:leading-10">
              Best gateway to <br /> our clients.
            </h1>
            <p className="mt-11 leading-7 max-md:mt-10 max-sm:mt-5 max-sm:text-lg">
              Our services and features set a market standard for our competition while giving ease of access to our customers.
            </p>
            <div className="flex gap-5 justify-between mt-16 max-md:mt-10 max-sm:text-base">
              <div className="self-start w-5 h-5 bg-blue-800 rounded-xl" />
              <div className="flex-auto">24/7 Full Service Support</div>
            </div>
            <div className="flex gap-5 justify-between mt-8 max-sm:text-base">
              <div className="self-start w-5 h-5 bg-blue-800 rounded-xl  " />
              <div className="flex-auto">Immediate Response</div>
            </div>
            <div className="flex gap-5 justify-between mt-8 max-sm:text-base">
              <div className="self-start w-5 h-5 bg-blue-800 rounded-xl" />
              <div className="flex-auto">Easy to Approach us</div>
            </div>
          </div>
          <div className="grow relative  z-10 max-md:mt-10 max-md:max-w-full max-sm:hidden">
            <div className="mx-20 mt-14 absolute -z-10 ">

              {/*Stylus for cards */}
              <motion.svg width="657" height="683">
              <defs>
                <linearGradient
                        id="customGradient"
                        x1="400"
                        y1="50"
                        x2="657"
                        y2="50"
                >
                  <stop offset="0%" stopColor="" />
                  <stop offset="100%" stopColor="#0096FF" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0, pathSpacing: 0.4 }}
                whileInView={{ pathLength: 1, pathSpacing: 0.4 }}
                transition={{
                  pathLength: {
                    delay: 0.4,
                    type: "tween",
                    duration: 10,
                    ease: "linear",
                    // repeat: Infinity,
                    bounce: 0,
                  },
                }}
                className=""
                strokeDasharray="3.846, 2.282"
                strokeDashoffset="0"
                strokeWidth="3.641"
                id="svgPath"
                stroke="url(#customGradient)"
                fill="none"
                d="M 440 50 Q 240 190 420 300 Q 650 400 450 600"
                transform=" "
              >
                
              </motion.path>
              <path
                id=""
                stroke="#0047AB"
                strokeDasharray="3.846, 2.282"
                strokeDashoffset="0"
                strokeWidth="1.641"
                fill="none"
                d="M 440 50 Q 240 190 420 300 Q 650 400 450 600"
                transform=""
              ></path>
            </motion.svg>

              {/* Arrow Animation 2

                        <motion.div
                initial={{ y: -50 }}
                animate={{ y: 50 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                ⬇️
              </motion.div> */}

            </div>

            <div className="gap-5 max-md:gap-0 abs z-10  ">
              <div className="flex justify-end w-full">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full mr-12">
                  <div className="flex flex-col  grow max-md:max-w-full">
                    <div className="py-12 pr-5  rounded-xl max-md:pr-5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="w-[14%] max-md:ml-0 max-md:w-full">
                          <div className="justify-center items-center px-4 mt-5 h-[53px] w-[53px] text-2xl font-bold tracking-tight text-center text-blue-700 whitespace-nowrap bg-violet-50 rounded-3xl aspect-square  leading-[53.02px] max-md:mt-10">
                            01
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full bg-violet-50 py-10 pl-4 pr-5">
                          <div className="flex flex-col max-md:mt-10">
                            <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                              Discovery and Analysis
                            </h2>
                            <div className="mt-5 text-lg leading-7 text-zinc-900 text-opacity-70">
                              Perform a analysis of the client's <br /> existing
                              financial habits.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex  w-6/12 max-md:ml-0 max-md:w-full ml-12 ">
                  <div className="flex flex-col grow max-md:max-w-full">
                    <div className="py-12 pr-5  rounded-xl max-md:pr-5 max-md:max-w-full">
                      <div className="flex gap-10 flex-row-reverse max-md:flex-col max-md:gap-0 max-md:">
                        <div className="w-[14%] max-md:ml-0 max-md:w-full">
                          <div className="justify-center items-center px-4 mt-5 w-[53px] text-2xl font-bold tracking-tight text-center text-blue-700  whitespace-nowrap bg-violet-50 rounded-3xl aspect-square h-[53px] leading-[53.02px] max-md:mt-10">
                            02
                          </div>
                        </div>
                        <div className="flex flex-col  ml-5 w-[72%] max-md:ml-0 max-md:w-full bg-violet-50 py-10 pl-4 pr-5">
                          <div className="flex flex-col max-md:mt-10">
                            <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                              Wallet management and financial suggestions
                            </h2>
                            <div className="mt-5 text-lg leading-7 text-zinc-900 text-opacity-70">
                              Get personalised suggestions for your <br /> existing
                              financial turnarounds.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end w-full">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full mr-10">
                  <div className="flex flex-col  grow max-md:max-w-full">
                    <div className="py-12 pr-5  rounded-xl max-md:pr-5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="w-[14%] max-md:ml-0 max-md:w-full">
                          <div className="justify-center items-center px-4 mt-5 text-2xl font-bold tracking-tight text-center text-blue-700 whitespace-nowrap bg-violet-50 rounded-3xl aspect-square h-[53px] w-[53px] leading-[53.02px] max-md:mt-10">
                            03
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full bg-violet-50 py-10 pl-4 pr-5">
                          <div className="flex flex-col max-md:mt-10">
                            <h2 className="text-2xl font-medium tracking-tight leading-6 text-neutral-800">
                              Deployment and Support
                            </h2>
                            <div className="mt-5 text-lg leading-7 text-zinc-900 text-opacity-70">
                              Regularly communicate with our <br /> client to
                              any concern.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/*Content section below banner */}
<div className="bg-gradient-to-b from-blue-50 to-indigo-50">
    <div className="mx-auto max-w-5xl px-6 py-10 text-center md:px-12 md:py-18">
    <h1 className="text-3xl leading-[52px] font-semibold md:text-4xl lg:text-5xl pb-1">
  Discover the power of&nbsp;
  <span className='mb-10'><span className="">lightning fast</span></span> online transactions<br/>
  <span className="block sm:mt-2 mb-4">
    <span className="underline decoration-blue-600 underline-offset-4">
      Explore a world of financial possibilities
    </span>
  </span>
</h1>
        <p className="mt-4 text-lg font-medium leading-2 text-gray-600 md:text-xl">Unleash your efficiency with access
            to a
            vast collection of revolutionary features.</p>
        <div className="mt-8 flex justify-center gap-2">
            <a href="/pages">
                <button
                    className="text-md rounded-lg bg-gradient-to-br from-blue-500 to-indigo-700 px-4 py-[10px] font-semibold text-white transform transition-transform duration-300 hover:bg-gradient-to-tl hover:from-blue-500 hover:to-purple-700 hover:scale-110 ">
                    <div className="flex items-center justify-center">
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z">
                                </path>
                            </svg>
                        </div>Explore 1000+ partners
                    </div>
                </button>
            </a>
        </div>
    </div>
</div>
</>
    );
};

export default Hero;
