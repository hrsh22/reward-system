/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-slate-600">
                Voucherify - A loyalty points system for increasing customer retention and engagement.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                Voucherify creates a points-based customer loyalty programs with various earning rules. Build customer loyalty, by rewarding customers for their purchases, behavior, or specific interactions.It engages shoppers year-around, increase customer lifetime value and turn visitors into raving fans with our enterprise ready loyalty points platform.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                {/* <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Github Star
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-slate-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {/* <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-slate-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div> */}

            <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-thumbs-up"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Easy integration
                      </h6>
                      <p className="mb-4 text-slate-500">
                      with any platform - on-premise or in the cloud
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-sharp fa-solid fa-brain-circuit"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Next-gen loyalty logic
                      </h6>
                      <p className="mb-4 text-slate-500">
                      with multi gamified touch points

                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-sharp fa-solid fa-brain-circuite"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Redemption marketplace
                      </h6>
                      <p className="mb-4 text-slate-500">
                      covering 20+ categories and 5000+ brands
                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-tower-control"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Total control over loyalty logic                             
                      </h6>
                      <p className="mb-4 text-slate-500">
                      While you focus on your business rules, we will apply your logic and automate your loyalty rewards.
                      </p>
                    </div>
                  </div>


                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-regular fa-rabbit-running"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Speed at your service</h6>
                      <p className="mb-4 text-slate-500">
                      Get started with our dashboard and integrate our Loyalty API in less than one day
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-sharp fa-solid fa-handshake"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Enterprise ready from day one
                      </h6>
                      <p className="mb-4 text-slate-500">
                      Trusted by over 1,000 global brands, processing millions of points & rewards daily with 99% uptime.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa-solid fa-headset"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Support for any front-end applications
                      </h6>
                      <p className="mb-4 text-slate-500">
                        Build tailor-made loyalty mechaics with personalized user experiences at any touchpoint
                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-slate-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus NextJS.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="uppercase text-xl tracking-widest text-[#da3737]">
              <p className='uppercase text-xl tracking-widest text-[#da3737]'>
                     POINTS ACCURAL
                </p>
              </div>
              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Earn & Burn
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Encourage repeat purchase and improve customer loyalty by introducing points-based loyalty program that rewards customers for specific behaviors.
              </p>
              
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46]">
                Rewards points based on custom triggers:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Give out points based on any custom event, behaviours, transaction or time. From referring a new customer, subscribing to content, making repeat purchase the possibilities are endless.
              </p>
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46">
              Diverse reward redemption capabilities:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Delight your members by allowing them to redeem their points in many ways - from your own ecosystem (accrued points as money), on a rewards catalog buy digital vouchers of brands, pay with points
              </p>
            
              <div className="block pb-6">
               <div className=" font-medium">Best fit for:
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Service
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Hospitality
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Electronics
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Retail
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Beauty
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Fashion & Lifestyle
                </span>
                </div>
              </div>
              
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://assets-global.website-files.com/607c2dcc5c2f05804b369abb/63357d001f08ef26093ede43_ezgif-3-45137881d4-p-800.webp"
              />
                
                
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">

          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://assets-global.website-files.com/607c2dcc5c2f05804b369abb/629a19007b79402bff3a39ed_Tiered%20Loyalty-p-800.webp"
              />
                
                
              </div>
            </div>
            

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="">
              <p className='uppercase text-xl tracking-widest text-[#da3737]'>
                     TIERS AND LEVELS
                </p>
              </div>
              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Tiered Loyalty
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Encourage customers to spend more by enticing them with incremental benefits as they move up the tier.
              </p>
              
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46]">
                Out-of-the-box loyalty campaigns:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Offer unique experience and flexible reward options based on tiers and keep your customers engaged over a long period of time. Higher customer retention = Improved CLV
              </p>
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46">
              Integrated experience:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Stay competitive without feeding into the discount culture that devaluates your products. Give your affluent buyers an exclusive experience and VIP treatment.
              </p>
              <div className="block pb-6">
              <div className=" font-medium">Best fit for:
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  LMS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Gaming Apps
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Retail
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                 Fashion & Lifestyle
                </span>
                </div>
              </div>
              
            </div>
          </div>





          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="uppercase text-xl tracking-widest text-[#da3737]">
              <p className='uppercase text-xl tracking-widest text-[#da3737]'>
                    JOIN, PLAY & UNLOCK
                </p>
              </div>
              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Gamified Loyalty
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Encourage customers to interact with your brand regularly by keeping them hooked with challenges and increase customer retention.
              </p>
              
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46]">
                Take your branding to new level with badges:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Encourage recurring behaviour by associating challenges with benefit. Keep it interesting with rule-based rewards that delights.
              </p>
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46">
              Set up event-based challenges to prompt actions:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Go beyond transactions. Incentive customers to engage on social media, create content, answer polls, daily streaks, and signup anniversary.
              </p>
            
              <div className="block pb-6">
               <div className=" font-medium">Best fit for:
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Luxury brands
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Services
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Wellness
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Home Decor
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Fashion & Lifestyle
                </span>
                </div>
              </div>
              
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://assets-global.website-files.com/607c2dcc5c2f05804b369abb/629eea1297a044778d2e07d5_Play%20%26%20Win.png"
              />
                
                
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">

          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://assets-global.website-files.com/607c2dcc5c2f05804b369abb/63357d4c418e44607675d695_ezgif-3-9f50ed30f3-p-800.webp"
              />
                
                
              </div>
            </div>
            

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="">
              <p className='uppercase text-xl tracking-widest text-[#da3737]'>
                     DEALS & OFFERS
                </p>
              </div>
              <h3 className="text-5xl mb-2 font-semibold leading-normal">
                Benefit Loyalty
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Generate an emotional attachment and a sense of belongingness  to the brand with exclusive benefits which leads to recurring purchase.
              </p>
              
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46]">
               Support brand building:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Pre-negotiated deals and offer allow you to give your loyalty members a series of benefits on a regular basis. Which in turn makes the shopping experience great for its members and drives customer acquisition
              </p>
              <h3 className="text-xl mb-2 font-semibold leading-normal text-[#f74c46">
               High value for actual cost:
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              Pre negotiated deals such as exclusive services and transaction-related privileges gives your brand a higher perceived value, though they come at a relatively lower cost for companies.
              </p>
              <div className="block pb-6">
              <div className=" font-medium">Best fit for:
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Fast fashion
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Beauty
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Luxury brands
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                 Service
                </span>
                </div>
              </div>
              
            </div>
          </div>






        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/documentation.png"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-500">
              Notus NextJS is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-slate-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link legacyBehavior href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link legacyBehavior href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/profile.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link legacyBehavior href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-slate-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-slate-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-slate-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this Starter Kit?
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
