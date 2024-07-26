import React from "react";

import dp from "/images/dp.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import {ReactTyped} from "react-typed";

function Home() {
    return (
        <>
            <div
                name="Home"
                className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
            >
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome To My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I'm a</h1>
                            {/* <span >Developer</span> */}
                            <ReactTyped
                                className="text-blue-600 font-bold"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify">
                        I am a passionate and driven Computer Science student with a strong interest in Natural Language Processing (NLP) research and full stack development (React, MySQL, NodeJs). With a solid foundation in both frontend and backend technologies, I am eager to bring my skills to projects where I can contribute to exciting developments and continue to grow.
                        </p>
                        <br />
                        {/* social media icons */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                            <div className="space-y-2">
                                <h1 className="font-bold text-center text-blue-600">Available on</h1>
                                <ul className="flex space-x-5">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <FaSquareFacebook className="text-2xl hover:scale-125 text-cyan-800 duration-200 cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <FaLinkedin className="text-2xl text-blue-500 hover:scale-125 duration-200 cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@anmzahid5685" target="_blank">
                                            <IoLogoYoutube className="text-2xl text-red-600 hover:scale-125 duration-200 cursor-pointer" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/anmzahid" target="_blank">
                                            <FaGithubSquare className="text-2xl text-grey-400 hover:scale-125 duration-200 cursor-pointer" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-bold text-center text-blue-600">Currently working on</h1>
                                <div className="flex space-x-5">
                                    <SiMongodb className="text-2xl md:text-3xl text-green-500 hover:scale-125 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <SiExpress className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <FaReact className="text-2xl md:text-3xl   text-blue-500 hover:scale-125 duration-200 rounded-full border-[2px] cursor-pointer" />
                                    <FaNodeJs className="text-2xl md:text-3xl text-green-400 hover:scale-125 duration-200 rounded-full border-[2px] cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h1 className="font-bold text-center text-blue-600">Research Interest</h1>
                            <div className="text-center">
                                <h2>Abstractive Text Summarization</h2>
                                <h2>Sentiment Level in Conversation</h2>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <img
                            src={dp}
                            className="rounded-full md:w-[450px] md:h-[450px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <hr />
        </>
    );
}

export default Home;
