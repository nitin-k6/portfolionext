"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Article Summarizer",
      desc: "Created a web app with React.js, Vite, Vanilla CSS, and Redux Toolkit, integrating OpenAI AI Summarizer API. It allows users to  generate clear and concise summaries of lengthy articles.      ",
      img: "/articlesummarizer1.png",
      link: "https://articlesumarizer.netlify.app/",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Full Stack Blog App",
      desc: "Led end-to-end development, creating a robust, user-friendly blog app for seamless sharing of ideas.Integrated Node.js with Express.js for seamless communication with MongoDB database on the backend. Noteworthy features encompass rock-solid user authentication, advanced search filters functionality, and streamlined post management for an optimal user experience.",
      img: "/blogimage.png",
      link: "https://reactblog3f.onrender.com",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: " React Movie Landing Page",
      desc: "The Website serves as a one-stop destination for movie enthusiasts to discover movies. Implemented responsive design for seamless access across desktop and mobile devices. Leveraged the OMDb API to efficiently fetch movie data, enriching user experience.",
      img: "/movielanding.png",
      link: "https://reactmoviesite.onrender.com/",
    },
    // {
    //   id: 4,
    //   color: "from-purple-300 to-red-300",
    //   title: "Spotify Music App",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   link: "https://lama.dev",
    // },
  ];



const Portfolio=()=>{

    const ref = useRef();
    const{scrollYProgress} = useScroll({target: ref});


    const x = useTransform(scrollYProgress, [0,1], ["0%", "-75%"])

    return(
    
    <motion.div className="h-full" initial = {{y:"-200vh"}} animate= {{y:"0%"}} transition={{duration:1}}>
       <div className="h-[600vh] relative" ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
          <div className="sticky top-0 flex h-screen gap-4 items-center  overflow-hidden "> {/* if we don't want to see x-horizontal scroller then we have to use overflow-hidden. Also using this makes our screen struck so that's why we use motion in below div*/}
                <motion.div style={{x}} className="flex">
                <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" /> {/*optional- if we enter this div then only it starts moving */}
                 {items.map(item=> (
                    <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                        <div className="flex flex-col gap-4  text-white">
                            <h1 className="text-xl font-bold md:text-4xl lg:text-6xl ">{item.title}</h1>
                            <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                <Image src= {item.img} alt="" fill />
                            </div>
                            <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg">{item.desc}</p>
                            <Link href={item.link} className="flex justify-end">
                               <button className="p-2 text-sm md:p-4 md:text-md lg:text-md lg:m-1 bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                               </Link>
                        </div>
                    </div>
                 ))}
                 </motion.div>
                 
          </div>
       </div>
       <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                    <h1 className="text-8xl">Do you have a project ?</h1>
                    <div className="relative ">
                      <motion.svg animate={{rotate: 360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox ="0 0 300 300"   className="w-64 h-64 md:w-[500px] md:h-[500px]">
                       <defs> <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/> </defs>
                         <text fill="#000" >
                            <textPath xlinkHref="#circlePath" className="text-xl">Full Stack Developer & UI Developer</textPath>
                         </text>
                       </motion.svg>
                       <Link href ="/contact" className="w-16 h-16 md:w-28  md:h-28 absolute top-0 left-0 bottom-0 right-0 m-auto bg-black text-white rounded-full flex items-center justify-center ">Hire Me🫱🏻‍🫲🏻 </Link>
                    </div>
                 </div>
    </motion.div>
    )
}

export default Portfolio

