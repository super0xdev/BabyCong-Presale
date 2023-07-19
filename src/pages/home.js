import { useState } from "react";
import "./index.css"
import { FaLinkedin } from "react-icons/fa";
import Accordion from "../components/Accordion";
import { faq } from "../global/constants";

const Home = () => {
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [buyCoin, setBuyCoin] = useState('ETH');

    return (
        <>
            <div className="w-full" style={{ background: '#eeeeee' }}>
                <div className="flex flex-col items-center w-full rounded-2xl lg:rounded-b-[200px] gap-3 pb-12" style={{ background: '#00ACFF' }}>
                    <div className="fredoka text-white pt-8 text-3xl font-bold">Presale Now Open</div>
                    <div className="roboto text-white text-md">Your Game, Your Rules, Your Odds.</div>
                    <div className="rounded-2xl text-white flex flex-col gap-2 px-8 pb-6 w-11/12 sm:w-[500px]" style={{ background: '#2F313E' }}>
                        <div className="pt-12 text-center text-2xl font-bold">STAGE 1 SELLING FAST</div>
                        <div className="text-white text-xl text-center">Raised:
                            <span className="font-bold" style={{ color: '#00ACFF' }}>$793,138.81</span>
                            of $1,000,000
                        </div>
                        <div className="mycontainer w-full">
                            <div className="progress progress-striped">
                                <div className="progress-bar" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className="text-md text-center">$BABYCONG SOLD: 2,281,539/12,673,734</div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 self-center w-full text-center">
                            <div onClick={() => setBuyCoin('ETH')} className={`cursor-pointer px-8 py-3 font-bold text-md rounded-xl ${buyCoin == 'ETH' ? 'bg-[#00ACFF]' : ''}  hover:bg-[#00ACFF]`} style={{ border: 'solid 1px #00ACFF' }}>ETH</div>
                            <div onClick={() => setBuyCoin('USDT')} className={`cursor-pointer px-8 py-3 font-bold text-md rounded-xl ${buyCoin == 'USDT' ? 'bg-[#00ACFF]' : ''} hover:bg-[#00ACFF]`} style={{ border: 'solid 1px #00ACFF' }}>USDT</div>
                            <div onClick={() => setBuyCoin('USDC')} className={`cursor-pointer px-8 py-3 font-bold text-md rounded-xl ${buyCoin == 'USDC' ? 'bg-[#00ACFF]' : ''} hover:bg-[#00ACFF]`} style={{ border: 'solid 1px #00ACFF' }}>USDC</div>
                            <div onClick={() => setBuyCoin('BNB')} className={`cursor-pointer px-8 py-3 font-bold text-md rounded-xl ${buyCoin == 'BNB' ? 'bg-[#00ACFF]' : ''} hover:bg-[#00ACFF]`} style={{ border: 'solid 1px #00ACFF' }}>BNB</div>
                        </div>
                        <div className="flex w-full justify-between py-4" style={{ borderBottom: 'solid 1px white' }}>
                            <div>Current Price: <span className="font-bold text-xl">$0.01</span></div>
                            <div>Next Price: <span className="font-bold text-xl text-[#00ACFF]">$0.011</span></div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="sm:w-1/2">
                                Amount in {buyCoin} you pay
                                <div className="relative">
                                    <input className="w-full px-4 py-2 rounded-md focus:outline-none text-black" placeholder="0" />
                                    <span className="absolute bg-white px-2 text-black" style={{ right: '10px', top: '8px' }}>{buyCoin}</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2">Amount you receive
                                <div className="relative">
                                    <input className="w-full px-4 py-2 rounded-md focus:outline-none text-black" placeholder="0" />
                                    <span className="absolute bg-white px-2 text-black" style={{ right: '10px', top: '8px' }}>$BABYCONG</span>
                                </div></div>
                        </div>
                        <div className="flex w-full rounded-md bg-[#03FFD7] text-black font-bold place-content-center py-2">BUY NOW</div>
                    </div>
                </div>

                <div className="flex flex-col container mx-auto h-full">
                    <span className="fredoka flex self-center text-[#00ACFF] text-6xl font-bold pt-16">Roadmap</span>
                    <span className="flex text-center text-black text-2xl font-bold px-12 py-8">We're extremely excited about the trajectory of BabyCong that we have mapped out in our project roadmap below.</span>
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="hidden lg:block border-2-2 absolute border-opacity-90 border-black h-full border" style={{ left: '50%' }}></div>
                        <div className="lg:hidden border-2-2 absolute border-opacity-90 border-black h-full border" style={{ left: '55px' }}></div>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="hidden lg:block order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-100 shadow-xl w-8 h-8 rounded-full" style={{ border: 'solid 1px black' }}>
                                <h1 className="mx-auto font-semibold text-lg text-black">1</h1>
                            </div>
                            <div className="order-1 bg-white rounded-lg shadow-xl w-11/12 lg:w-5/12 px-6 py-4">
                                <h3 className="font-bold text-[#00ACFF] text-2xl">Q2 2023</h3>
                                <div className="font-bold text-xl mb-3">PRE-SALE PHASE</div>
                                <div className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    <span>As our following grows and momentum builds, we shall enter our presale Phase, featuring key elements such as:</span>
                                    <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
                                        <li>Presale launch of $BABYCONG token & Node allocation</li>
                                        <li>CertiK Audit</li>
                                        <li>Announce Founding Team</li>
                                        <li>Release Website, Whitepaper & Tokenomics</li>
                                        <li>Decentralization Technical Roadmap</li>
                                        <li>Launch Share2Earn Competitions</li>
                                        <li>Start development of BETA Platform</li>
                                        <li>Minimum 2 x CEX Partnerships</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between lg:flex-row-reverse items-center w-full left-timeline">
                            <div className="hidden lg:block order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-100 shadow-xl w-8 h-8 rounded-full" style={{ border: 'solid 1px black' }}>
                                <h1 className="mx-auto font-semibold text-lg text-black">2</h1>
                            </div>
                            <div className="order-1 bg-[#5f5f5f] rounded-lg shadow-xl w-11/12 lg:w-5/12 px-6 py-4">
                                <h3 className="font-bold text-[#FFFF2A] text-2xl">Q3 2023</h3>
                                <div className="font-bold text-xl text-white mb-3">LAUNCH</div>
                                <div className="text-md leading-snug tracking-wide text-white text-opacity-100">
                                    <span>With excitement surrounding BabyCong rising to global levels, our team will initiate our Launch sequence - which will include:</span>
                                    <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
                                        <li>Token Listing on Uniswap</li>
                                        <li>List on Coingecko & Coinmarketcap</li>
                                        <li>Minimum 2 x CEX Listings</li>
                                        <li>BETA Platform launched</li>
                                        <li>Community Led UX Competition</li>
                                        <li>Initiate Validator Node Program</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="hidden lg:block order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-100 shadow-xl w-8 h-8 rounded-full" style={{ border: 'solid 1px black' }}>
                                <h1 className="mx-auto font-semibold text-lg text-black">3</h1>
                            </div>
                            <div className="order-1 bg-white rounded-lg shadow-xl w-11/12 lg:w-5/12 px-6 py-4">
                                <h3 className="font-bold text-[#00ACFF] text-2xl">Q4 2023</h3>
                                <div className="font-bold text-xl mb-3">PRODUCT DEVELOPMENT(TESTNET)</div>
                                <div className="text-md leading-snug tracking-wide text-gray-900 text-opacity-100">
                                    <span>Continually evaluating and fine-tuning the BabyCong experience for every kind of user, we will dive into our Product Development phase with a Testnet focus:</span>
                                    <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
                                        <li>Market Making (Testnet)</li>
                                        <li>Virtual Betting (Testnet)</li>
                                        <li>Initiate WebRTC - Live Streaming (Testnet)</li>
                                        <li>Gain Further CEX listings</li>
                                        <li>Deploy Full Validator Nodes (Testnet)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between lg:flex-row-reverse items-center w-full left-timeline">
                            <div className="hidden lg:block order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-100 shadow-xl w-8 h-8 rounded-full" style={{ border: 'solid 1px black' }}>
                                <h1 className="mx-auto font-semibold text-lg text-black">4</h1>
                            </div>
                            <div className="order-1 bg-[#5f5f5f] rounded-lg shadow-xl w-11/12 lg:w-5/12 px-6 py-4">
                                <h3 className="font-bold text-[#FFFF2A] text-2xl">Q1 2024</h3>
                                <div className="font-bold text-xl text-white mb-3">DECENTRALIZE (MAINNET)</div>
                                <div className="text-md leading-snug tracking-wide text-white text-opacity-100">
                                    <span>As we continue to refine existing and add new product functionality to BabyCong, our fourth phase shall focus on True Decentralization:</span>
                                    <ul className="pl-5 pt-3" style={{ listStyleType: 'disc' }}>
                                        <li>Integrate Filecoin for Data Storage</li>
                                        <li>Deploy Quadratic Governance</li>
                                        <li>Migrate Validator Nodes to Mainnet</li>
                                        <li>CertiK Audit to Verify Decentralization</li>
                                        <li>Mainnet Launch</li>
                                        <li>Removal of Centralized Entities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-8" style={{ background: '#2F313E' }}>
                    <div className="w-full flex flex-col" style={{ maxWidth: '1280px' }}>
                        <div className="fredoka text-white text-center text-5xl font-bold pt-24">Tokenomics</div>
                        <div className="text-white text-center text-3xl font-bold pt-16 px-8">BabyCong's objective is to become a self-sufficient platform generating community revenue opportunities through tokenomics and utilities. Furthermore, our community will take full platform control by becoming Node Validators and utilizing the quadratic governance we put in place.</div>
                        <div className="w-full flex justify-center py-16">
                            <img src="https://chancer.com/wp-content/uploads/2023/06/tokenomics.svg" />
                        </div>
                        <div className="text-white self-center text-center font-bold rounded-xl bg-[#00ACFF] w-[200px] py-4">Buy $BABYCONG</div>
                    </div>
                </div>
                <div className="flex justify-center pb-8" style={{ background: '#eeeeee' }}>
                    <div className="flex flex-col w-full" style={{ maxWidth: '1280px' }}>
                        <div className="fredoka text-black text-center text-5xl font-bold pt-24">Meet the Team</div>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="flex flex-col items-center">
                                <img className="p-12" src="https://chancer.com/wp-content/uploads/2023/05/adam.png" />
                                <span className="font-bold text-2xl">Adam Kelbie</span>
                                <span className="text-xl">CEO</span>
                                <a href="#">
                                    <FaLinkedin style={{ width: '32px', height: '32px' }} />
                                </a>
                                <span className="px-4 pb-4 text-center">
                                    {
                                        showOne ? "Adam Kelbie is a passionate entrepreneur with a love for betting and friendly competition. He grew up making bets with his brother and friends and always enjoyed the thrill of wagering on games and challenges. However, he noticed the lack of a dedicated platform for social betting to connect people with similar interests and enable them to engage in friendly competition in a safe, regulated environment. This market gap inspired Adam to start Chancer, a social betting platform designed to bring people together and enhance the social and competitive aspects of betting. With Chancer, Adam aimed to create a platform to cater to the masses and provide a fun, engaging experience for users of all experience levels. His vision was to create a community where people could connect, compete and have fun while engaging in their love of betting – with Chancer, Adam is bringing that vision to life."
                                            : "Adam Kelbie is a passionate entrepreneur with a love for betting and friendly competition. He grew up making bets with his brother and friends and always enjoyed the thrill of wagering on games and challenges...."
                                    }
                                </span>
                                <div className="bg-[#00ACFF] px-8 py-3 rounded-xl text-white font-bold" onClick={() => setShowOne(!showOne)}>{
                                    showOne ? "READ LESS" : "READ MORE"}</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="p-12" src="https://chancer.com/wp-content/uploads/2023/05/paul_kelbie.png" />
                                <span className="font-bold text-2xl">Paul Kelbie</span>
                                <span className="text-xl">HOP</span>
                                <a href="#">
                                    <FaLinkedin style={{ width: '32px', height: '32px' }} />
                                </a>
                                <span className="px-4 pb-4 text-center">
                                    {
                                        showTwo ? "Paul Kelbie is a lifelong lover of sports who, while he never used to consider himself a gambler, always loved the competitive element and sensation of victory that came from small bets placed on games between friends during poker nights, world cups and evenings down the pub. But whenever Paul felt like placing a bet on his own, he could find no easy way to set one up – and didn’t want to have to go to the betting shop in person. His vision was simple yet one that did not exist: an inclusive community for chance-takers of all walks to have fun, enjoy the thrill of gambling without any of the formality or stress, and benefit from the easy access of an online platform. Paul worked with his brother to bring their concept to life, resulting in Chancer’s world-first Web3 social betting ecosystem."
                                            : "Paul Kelbie is a lifelong lover of sports who, while he never used to consider himself a gambler, always loved the competitive element and sensation of victory that came from small bets placed on games between..."
                                    }
                                </span>
                                <div className="bg-[#00ACFF] px-8 py-3 rounded-xl text-white font-bold" onClick={() => setShowTwo(!showTwo)}>{
                                    showTwo ? "READ LESS" : "READ MORE"}</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="p-12 w-[290px]" src="https://chancer.com/wp-content/uploads/2023/06/seoda.png.webp" />
                                <span className="font-bold text-2xl">Yuri Soeda</span>
                                <span className="text-xl">LEAD DEVELOPER</span>
                                <a href="#">
                                    <FaLinkedin style={{ width: '32px', height: '32px' }} />
                                </a>
                                <span className="px-4 pb-4 text-center">
                                    {
                                        showThree ? "Yuri joined the team at Chancer as an ambitious blockchain developer, looking to leverage his expertise in developing cutting-edge blockchain-based solutions that deliver enhanced security, transparency, and immutability. Always thinking outside of the box, Yuri uses his advanced skills to create highly efficient solutions that meet the unique needs of Chancer’s users."
                                            : "Yuri joined the team at Chancer as an ambitious blockchain developer, looking to leverage his expertise in developing cutting-edge blockchain-based solutions that deliver enhanced security, transparency, and..."
                                    }
                                </span>
                                <div className="bg-[#00ACFF] px-8 py-3 rounded-xl text-white font-bold" onClick={() => setShowThree(!showThree)}>{
                                    showThree ? "READ LESS" : "READ MORE"}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center" style={{ background: '#2F313E' }}>
                    <div className="w-full flex flex-col px-4 md:px-12 pb-16" style={{ maxWidth: '1280px' }}>
                        <div className="text-center text-white py-16 fredoka text-5xl font-bold">F A Q</div>
                        <Accordion data={faq} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;