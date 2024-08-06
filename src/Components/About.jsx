import React from 'react';

const About = () => {
    return (
        <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
            <h1 className='text-3xl font-bold mb-5 text-blue-500'>About</h1>
            <p>
                Hello, I'm Zahid having keen eye for MERN Stack. With
                proper CS background.I strive to create impactful and visually stunning
                Software solutions that leaves a lasting impression.
            </p>
            <br />
            <h1 className='text-blue-600 font-semibold text-xl'>Education & Training</h1>
            <span>BSc in Computer Science & Engineering (Final year) [CGPA: 3.75/4.00 </span>
            <br />
            <span>HSC ,Comilla Victoria Govt. College [GPA:5.00]</span>
            <br />
            <span>SSC, Comilla Zilla Scholl [GPA:5.00]</span>
            <br />
            <br />
           {/* skills */}
            <h1 className='text-blue-600 font-semibold text-xl'>Skill & Expertise</h1>
            <span>Proficient in [C,C++,Pyhton,JavaScript]</span>
            <br />
            <span>Experienced with [MERN Stack,Flutter,JavaFx]</span>
            <br />
            <br />
            {/* Preffessional */}
            <h1 className='text-blue-600 font-semibold text-xl'>Professional Experiences</h1>
            <span>Mobile Application Developer Intern at Battery Low Initiative</span>
            <br />
            <br />
            <h1 className="text-blue-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative web-app  solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>

        </div>
    )
}

export default About
