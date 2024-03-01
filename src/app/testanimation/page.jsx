"use client"
import { motion } from "framer-motion"
const TestAnimation =()=>{

    const variants = {  
        variant1:{
        x: 400,
        y:600,
        opacity:0.5
        },
        variant2:{
        x:500,
        y:-400,
        rotation:90
        }
    }

    return (
        <div className=" h-full flex items-center justify-center">
            <motion.div className= 'w-96 h-96  bg-red-400 rounded'
             initial= {{x: -100}}
             variants={variants}  //variants are useful when we want to create multiple animations on our component also can specify  which variant to run and also on what condition
             animate= "variant2"  // varaints are also useful to run multiple(&different) animations on different components.
            //animate ={{x:300, y :-200, opacity:0.5}}
              transition={{ delay:2, duration:4}}
              ></motion.div>
        </div>
    )
}
export default TestAnimation
