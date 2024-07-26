import React from "react";
import node from "/images/node.png"
import css from "/images/css.jpg"
import Js from "/images/javascript.png"
import oracle from "/images/oracle.png"
import react from "/images/reactjs.png"
import flutter from "/images/Flutter.jpg"
import python from "/images/python.webp";
import ML from "/images/ML.jpg";
function Experiance() {
    const cardItem = [
        {
            id: 1,
            logo: node,
            name: "Nodejs",
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
        },
        {
            id: 3,
            logo: Js,
            name: "JavaScript",
        },

        {
            id: 4,
            logo: oracle,
            name: "OracleDB",
        },
        {
            id: 6,
            logo: react,
            name: "ReactJs",
        },

    ];

    const cardItem2 = [
        {
            id: 1,
            logo: flutter,
            name: "Flutter",
        },
        {
            id: 2,
            logo: python,
            name: "Python",
        },
        {
            id: 1,
            logo: ML,
            name: "Machine Learning",
        }
    ]
    return (
        <div
            name="Experience"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5 text-blue-500">Experiance</h1>
                <p className="font-semibold text-xl  ">
                    I've more than 2 years of experiance in below technologies.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                    {cardItem.map(({ id, logo, name }) => (
                        <div
                            className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                            key={id}
                        >
                            <img src={logo} className="w-[150px] rounded-full" alt="" />
                            <div>
                                <div className="">{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <div>
                <p className="font-semibold  text-xl">
                    I'm exploring and working on below technologies for 1 year.
                </p>
                <br />
                <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                    {cardItem2.map(({ id, logo, name }) => (
                        <div
                            className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                            key={id}
                        >
                            <img src={logo} className="w-[150px] rounded-full" alt="" />
                            <div>
                                <div className="">{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experiance;
