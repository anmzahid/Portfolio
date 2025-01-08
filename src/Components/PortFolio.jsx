import React from "react";
import java from "/images/java.png";
import python from "/images/python.webp";
import mongoDB from "/images/mongodb.jpg";
import express from "/images/express.png";
import reactjs from "/images/reactjs.png";
import nodejs from "/images/node.png";
import ML from "/images/ML.jpg";
import html from "/images/html.png"
import Flutter from "/images/Flutter.jpg"
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: ML,
      name: "Machine Learning",
      videoLink: "https://example.com/ml-video",
      sourceCodeLink: "https://github.com/anmzahid/TextSummarization-app",
    },
    {
        id: 2,
        logo: Flutter,
        name: "Flutter",
        videoLink: "https://youtu.be/tPPszF4eyYs?si=h2E5tL2vXbj1uPXs",
        sourceCodeLink: "https://github.com/anmzahid/e-book",
      },
    
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      videoLink: "https://youtu.be/J1uqQQtYseY?si=Pq4-kMi0c-n08okK",
      sourceCodeLink: "https://github.com/anmzahid/TradeAndTroves",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      videoLink: "https://example.com/nodejs-video",
      sourceCodeLink: "https://github.com/anmzahid/TradeAndTroves",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      videoLink: "https://example.com/python-video",
      sourceCodeLink: "https://github.com/anmzahid/DSP-Project",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      videoLink: "https://example.com/java-video",
      sourceCodeLink: "https://github.com/Brownbear2710/LYCEUM",
    },
    {
        id: 7,
        logo: html,
        name: "Html5 canvas & JS",
        videoLink: "https://youtu.be/sS_tOktyBss?si=5w4HDw_bkth0nSuw",
        sourceCodeLink: "https://github.com/anmzahid/MyFoemyX",
      },
      {
        id: 8,
        logo: express,
        name: "Express",
        videoLink: "https://example.com/express-video",
        sourceCodeLink: "https://github.com/anmzahid/TradeAndTroves",
      },
  ];

  return (
    <div
      name="Portfoilo"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-500">Portfolio</h1>
        <span className=" font-semibold text-xl">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, videoLink, sourceCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                 Go to Source code or Video link to see details                </p>
              </div>
             <div className="px-6 py-4 flex justify-between items-center">
  <a href={videoLink} target="_blank" rel="noopener noreferrer">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded">
      Video
    </button>
  </a>
  <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-2 rounded">
      Source code
    </button>
  </a>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
