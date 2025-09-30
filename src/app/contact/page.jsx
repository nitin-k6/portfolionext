// "use client"
// import { motion } from "framer-motion"
// import { useRef, useState } from "react"
// import emailjs from '@emailjs/browser';


// const Contact =()=>{
// const text = "Say Hello"

// const [success, setSuccess] = useState(false);
// const [error, setError] = useState(false);

// const form = useRef();
 
// const sendEmail = (e) => {
//     e.preventDefault();
//     setError(false); // if we have to send again then in that case we don't want our old messages(error or success)
//     setSuccess(false);

//     emailjs 
//       .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID , process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
//         publicKey: "pCwzGVj2B2HhLWLaE",
        
//       })
//       .then(
//         () => {
//         //   console.log('SUCCESS!');
//         setSuccess(true);
//         form.current.reset() // if it is successful then e are going to remove our input
//         },
//         (error) => {
//         //   console.log('FAILED...', error.text);
//         setError(true)
//         },
//       );
//   };


    
//     return(
        
//     <motion.div className="h-full" initial = {{y:"-200vh"}} animate= {{y:"0%"}} transition={{duration:1}}>
//         <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
//            {/* Text container*/}
//            <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl">
//              <div> 
//                 {text.split("").map((letter,index)=>(
//                     <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay:index*0.1}} > {letter} </motion.span>
//                 ))}
//                 😊
//              </div>
//            </div>
//            {/* Form container*/}
//            <form  ref={form}   onSubmit={sendEmail}        className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
//               <span> Dear Nitin Kumar,</span>
//               <textarea rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none" name= "user_message" />
//               <span>Email Address</span>
//               <input type="text" className="bg-transparent border-b-2 border-b-black outline-none" name="user_email" />
//               <span>Warm Regards</span>
//               <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
//               {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
//               {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}

//            </form>
//         </div>  
//     </motion.div>
//     )
// }

// export default Contact









"use client"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const text = "Say Hello"

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        { publicKey: "pCwzGVj2B2HhLWLaE" }
      )
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        () => {
          setError(true)
        }
      )
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Left Text Section */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl font-semibold text-gray-800">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.3 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👋
          </div>
        </div>

        {/* Right Glassmorphism Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 
                     bg-white/20 backdrop-blur-xl 
                     rounded-3xl shadow-2xl 
                     border border-white/30 
                     text-lg flex flex-col gap-8 
                     justify-center p-10 md:p-16"
        >
          <span className="text-gray-900 font-medium">Dear Nitin Kumar,</span>

          <textarea
            className="bg-transparent border-b border-gray-400/50 
                       focus:border-gray-800 outline-none 
                       resize-none py-2 text-gray-900 
                       placeholder-gray-500 transition-all"
            name="user_message"
            placeholder="Write your message..."
          />

          <span className="text-gray-900 font-medium">Email Address</span>
          <input
            type="email"
            className="bg-transparent border-b border-gray-400/50 
                       focus:border-gray-800 outline-none 
                       py-2 text-gray-900 
                       placeholder-gray-500 transition-all"
            name="user_email"
            placeholder="you@example.com"
            required
          />

          <span className="text-gray-900 font-medium mt-10">Warm Regards,</span>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="mt-20 bg-gradient-to-r from-gray-900 to-gray-700 
                       text-white rounded-xl font-semibold 
                       py-3 px-6 shadow-md 
                       hover:shadow-lg hover:from-black hover:to-gray-800 
                       transition-all"
          >
            Send
          </motion.button>

          {success && (
            <span className="text-green-600 font-medium mt-2">
              ✅ Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-medium mt-2">
              ❌ Something went wrong. Please try again.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
