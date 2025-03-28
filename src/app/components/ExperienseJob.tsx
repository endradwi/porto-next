import React from 'react'
const Data = [
    {divisi: "Frontend Developer", 
    company: "PT.Primeskills Edukasi Indonesia",
    date: "2021 - Present",
    desc: "Frontend Developer with experience in building scalable, responsive, and user-friendly web applications. Proficient in modern frontend technologies such as React.js, JavaScript, and Tailwind CSS, I have a strong foundation in creating intuitive user interfaces and seamless user experiences. I am also skilled in integrating frontend applications with backend services and databases. With a passion for continuous learning and innovation, I am eager to contribute to dynamic teams and deliver high-quality solutions that meet both user and business needs."
 },
 {divisi: "Frontend Developer", 
    company: "PT.Primeskills Edukasi Indonesia",
    date: "2021 - Present",
    desc: "Frontend Developer with experience in building scalable, responsive, and user-friendly web applications. Proficient in modern frontend technologies such as React.js, JavaScript, and Tailwind CSS, I have a strong foundation in creating intuitive user interfaces and seamless user experiences. I am also skilled in integrating frontend applications with backend services and databases. With a passion for continuous learning and innovation, I am eager to contribute to dynamic teams and deliver high-quality solutions that meet both user and business needs."
 },
 {divisi: "Frontend Developer", 
    company: "PT.Primeskills Edukasi Indonesia",
    date: "2021 - Present",
    desc: "Frontend Developer with experience in building scalable, responsive, and user-friendly web applications. Proficient in modern frontend technologies such as React.js, JavaScript, and Tailwind CSS, I have a strong foundation in creating intuitive user interfaces and seamless user experiences. I am also skilled in integrating frontend applications with backend services and databases. With a passion for continuous learning and innovation, I am eager to contribute to dynamic teams and deliver high-quality solutions that meet both user and business needs."
 },
]
function ExperienseJob() {
  return (
    <div>
       <article id='about' className="px-28 flex items-center justify-around py-5">
        <ul className='max-w-6xl text-xl/8 text-justify  rounded-2xl p-10 bg-[#FBE4D6]  animate-blink-shadow space-y-8 '>
        {Data.map((data, index) => (
            <li key={index}>
                <h1 className='text-3xl font-bold'>{data.divisi}</h1>
                <p>{data.company}</p>
                <p>{data.date}</p>
                <p>{data.desc}</p>
            </li>
        ) )}
        </ul>
        <span className="text-6xl font-bold flex justify-center items-center max-w-20 text-center ">Job Experience</span>
      </article>
    </div>
  )
}

export default ExperienseJob
