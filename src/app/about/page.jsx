"use client"

import { motion, useInView, useScroll } from "framer-motion"
import Brain from "../components/brain";
import { useRef } from "react";


const AboutPage = () =>{

  const containerRef = useRef();   {/*using useRef() hook to pass Container defined in line 16  to useScroll*/}

  const {scrollYProgress} = useScroll({container :containerRef})
  
  const skillRef = useRef();
//   const isSkillRefinView  = useInView(skillRef, {once:true}); // only if we want to see animation only once 
  const isSkillRefinView  = useInView(skillRef, { margin : "-100px"}); 

  const experienceRef = useRef();
  const isExperienceRefinView = useInView(experienceRef, { margin : "-100px"});
    return(
        
        <motion.div className="h-full" initial = {{y:"-200vh"}} animate= {{y:"0%"}} transition={{duration:1}}> {/*This condition makes sures that our screen doen't show up before transition(framer motion) effect */}
            {/* Container */}
        <div className="h-full overflow-scroll lg:flex " ref={containerRef}>  {/*This condition (overflow-scroll)makes screen fuller and don't let items get out of it. */} 
                {/* text Container  */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64  lg:w-2/3 lg:pr-0 xl:1/2">
                {/* biography Container  */}
                <div className="flex flex-col gap-12 justify-center">
                   <h1 className="font-bold text-2xl">Biography</h1>
                   <p className="text-lg">I&apos;m a Product Engineer specializing in Generative AI and multi-agent systems, blending hands-on coding with product strategy to build intelligent, human-centered products.My expertise lies in designing and building AI systems for voice, text, and multimodal experiences, making interactions feel natural and seamless. I focus on multi-agent architectures, where specialized agents—like emotional companions, accountability partners, and health check-ins—work together to deliver more adaptive user experiences.On the engineering side, I architect scalable platforms, integrate APIs, and ensure smooth end-to-end journeys. On the product side, I translate research into strategy, shaping features that balance innovation with usability.I&apos;m deeply interested in human-AI interaction—how natural language, voice, and personalized assistants can transform industries such as mental health, productivity, and education.Thriving in startup environments, I bring creativity, speed, and problem-solving to every challenge. Whether it&apos;s writing code, iterating on product direction, or experimenting with new AI workflows, my mission is simple: turn innovation into impact.</p>
                    <span className="italic"> Stubborn about getting things done.</span>
                     <div className="self-end italic">Nitin Kumar</div>
                
                  <motion.svg   initial={{opacity:0.2 ,y:0}} animate={{opacity:1, y:"10px"}}  transition={{repeat:Infinity, duration:3, ease: "easeInOut"}}   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={50} height={50} >
                  <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1" ></path>
                   <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                   <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
                  </motion.svg>
                </div>
                 
                <div className="flex flex-col gap-8 justify-center">
                  <h1 className="font-bold text-2xl">EDUCATION</h1>
                  <h2  className="font-bold text-lg">Global Institiute of Technology, Jaipur (2020-2024) </h2>
                  <h3 className="p-0"> B.Tech in Information Technology  | <span className="font-semibold">CGPA- 8.8</span> </h3>
                  <h2 className="font-bold text-lg">Army Public School Kaluchak, J&k</h2>
                  <h3 className="p-0 ">XII - 2019</h3>
                  <h3 className="p-0 ">X - 2017</h3>


                  
                </div>
                

                {/* skill Container  */}
                <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                      <motion.h1  initial={{x:"-300px"}} animate={isSkillRefinView ? {x:0} :{} } transition={{delay:0.2}}  className="font-bold text-2xl ">SKILLS</motion.h1> {/*skill title */}
                    <motion.div   initial={{x:"-300px"}} animate={isSkillRefinView ? {x:0} :{} } className="flex gap-4 flex-wrap"> {/* skill list*/}
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Java</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">C++</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Python</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">HTML</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">CSS</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">JavaScript</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">TypeScript</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">MongoDB</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Express.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">React.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Node.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Next.js</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">RAG</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Langchain</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">LlamaIndex</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">CrewAI</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">RazorPay</div>

                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Stripe</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Framer Motion</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Redux Toolkit</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Context API</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">JWT</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Bootstrap</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Git</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Figma</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Power BI</div>
                        <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">Microsoft Azure</div>


                    </motion.div>  
                    <motion.svg  initial={{opacity:0.2 ,y:0}} animate={{opacity:1, y:"10px"}}  transition={{repeat:Infinity, duration:3, ease: "easeInOut"}}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={50} height={50} >
                       <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1" ></path>
                       <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                       <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
                    </motion.svg>
                        


                </div>


            
              {/* experience container */}
<div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}> 
  <motion.h1 
    initial={{x:"-300px"}} 
    animate={isExperienceRefinView ? {x:"0"} : {}} 
    transition={{delay:0.2}}    
    className="font-bold text-2xl"
  >
    EXPERIENCE
  </motion.h1>  
  
  <motion.div  
    initial={{x:"-300px"}} 
    animate={isExperienceRefinView ? {x:"0"} : {}}   
    className=""
  > 
    {/* 1 --- Odin Healthcare (Current) */}
    <div className="flex justify-between h-64"> 
      {/* left */}
      <div className="w-1/3">
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Product Engineer</div>
        <div className="p-3 text-sm italic">Mapaman SaaS Platform</div>
        <div className="p-3 text-red-400 text-sm font-semibold">December 2024 - Present</div>
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Odin Healthcare Pvt Ltd</div>
        <div className="p-3 text-xs text-gray-600">Panchkula, Haryana</div>
      </div>
       
      {/* center */}
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2 top-0"></div>
        </div>
      </div>
      
      {/* right */}
      <div className="w-1/3"></div>
    </div>

    {/* 2 --- Abhiwan Technology */}
    <div className="flex justify-between h-64"> 
      {/* left */}
      <div className="w-1/3"></div>
       
      {/* center */}
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-0"></div>
        </div>
      </div>
      
      {/* right */}
      <div className="w-1/3">
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Full Stack Developer</div>
        <div className="p-3 text-sm italic">MERN Stack Development</div>
        <div className="p-3 text-red-400 text-sm font-semibold">June 2024 - August 2024</div>
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Abhiwan Technology Pvt Ltd</div>
        <div className="p-3 text-xs text-gray-600">Noida, UP</div>
      </div>
    </div>

    {/* 3 --- Celebal Technologies */}
    <div className="flex justify-between h-64"> 
      {/* left */}
      <div className="w-1/3">
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Software Engineer</div>
        <div className="p-3 text-sm italic">SQL, Azure Integration</div>
        <div className="p-3 text-red-400 text-sm font-semibold">May 2023 - July 2023</div>
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Celebal Technologies</div>
        <div className="p-3 text-xs text-gray-600">Jaipur, Rajasthan</div>
      </div>
       
      {/* center */}
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-0"></div>
        </div>
      </div>
      
      {/* right */}
      <div className="w-1/3"></div>
    </div> 
  </motion.div>
</div>
            </div>
                 {/* svg container */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2"> {/* creating svg in a new component(brain) coz already code is too long*/}
                 <Brain scrollYProgress={scrollYProgress} />
                 </div>
        </div>
        </motion.div>
    )
}

export default AboutPage;








