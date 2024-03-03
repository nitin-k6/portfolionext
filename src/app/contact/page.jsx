"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';


const Contact =()=>{
const text = "Say Hello"

const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);

const form = useRef();
 
const sendEmail = (e) => {
    e.preventDefault();
    setError(false); // if we have to send again then in that case we don't want our old messages(error or success)
    setSuccess(false);

    emailjs 
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID , process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey:process.env.NEXT_PUBLIC_PC_ID,
        
      })
      .then(
        () => {
        //   console.log('SUCCESS!');
        setSuccess(true);
        form.current.reset() // if it is successful then e are going to remove our input
        },
        (error) => {
        //   console.log('FAILED...', error.text);
        setError(true)
        },
      );
  };


    
    return(
        
    <motion.div className="h-full" initial = {{y:"-200vh"}} animate= {{y:"0%"}} transition={{duration:1}}>
        <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
           {/* Text container*/}
           <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl">
             <div> 
                {text.split("").map((letter,index)=>(
                    <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay:index*0.1}} > {letter} </motion.span>
                ))}
                😊
             </div>
           </div>
           {/* Form container*/}
           <form  ref={form}   onSubmit={sendEmail}        className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
              <span> Dear Nitin Kumar,</span>
              <textarea rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none" name= "user_message" />
              <span>Email Address</span>
              <input type="text" className="bg-transparent border-b-2 border-b-black outline-none" name="user_email" />
              <span>Warm Regards</span>
              <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
              {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
              {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}

           </form>
        </div>  
    </motion.div>
    )
}

export default Contact
