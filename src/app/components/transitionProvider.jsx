"use client"

import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar" 
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider =({children}) =>{
   const pathName = usePathname()       // using pathName we were able to make our transition based on /url
    return(

        <AnimatePresence mode="wait">  {/* we are not going to use AnimatePresence in layout as motion is client component and still we if want to use it we have to remove meta data as it is server component */}
             <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div  className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40" 
                             animate ={{height: "0vh"}}
                             exit={{height:"140vh"}}
                             transition={{duration:0.5, ease: "easeOut"}}            //1
                />  {/*z index coz  it is going to be over our screen*/}

               <motion.div  className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default  z-50 w-fit h-fit" 
                             initial ={{opacity:1}}
                             animate={{opacity:0}}                  //3
                             exit={{opacity:0}} 
                             transition={{duration:0.8, ease: "easeOut"}} >
                                {pathName.substring(1)}
                  </motion.div>


               <motion.div  className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                             initial ={{height: "140vh"}}                                    //2
                             animate={{height:"0vh", transition:{delay: 0.5}}}
                             
                />
               

          <div className="h-24">
          <Navbar/>
          </div>
          <div className="h-[calc(100vh-6rem)]">
          {children}
          </div>
        </div>
        </AnimatePresence>
       
    )
}

export default TransitionProvider;