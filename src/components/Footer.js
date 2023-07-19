import { Link } from 'react-router-dom';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="lg:flex lg:justify-between gap-4">
                        <div className="hidden md:block mb-6 lg:mb-0">
                            <div className="flex items-center pb-4">
                                <img src="./logo.jpg" style={{ width: '50px' }} className="mr-3 rounded-[50%]" alt="Flowbite Logo" />
                                <span className="fredoka self-center text-4xl whitespace-nowrapn">BabyCong</span>
                            </div>
                            <div className='grid grid-cols-4 gap-4 w-[180px] lg:w-full self-center'>
                                <a href="#"> <FaTelegramPlane style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" /> </a>
                                <a href="#"> <FaTwitter style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" /> </a>
                                <a href="#"> <FaFacebookF style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" /> </a>
                                <a href="#"><AiFillInstagram style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" /></a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-12 lg:gap-24 sm:grid-cols-4">
                            <div>
                                <h2 className="footer-title mb-6">Quick Links</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <div>About Us</div>
                                    </li>
                                    <li>
                                        <div>Partners</div>
                                    </li>
                                    <li>
                                        <div><a href="#">Blogs</a></div>
                                    </li>
                                    <li>
                                        <div>Resources</div>
                                    </li>
                                    <li>
                                        <div>FAQs</div>
                                    </li>
                                    <li>
                                        <div>Career</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-title mb-6">Dev</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <div>Documentation</div>
                                    </li>
                                    <li>
                                        <div><a href="#">Whitepaper</a></div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-title mb-6">Support</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <div>Terms of Use</div>
                                    </li>
                                    <li>
                                        <div>Privacy Policy</div>
                                    </li>
                                    <li>
                                        <div>Contact Us</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
                    {/* <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm  sm:text-center text-gray-400">© 2022 Copyright and rights reserved</span>
                    </div> */}
                    <div className="footer-end text-center">Copyright © 2022  All Rights Reserved</div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;