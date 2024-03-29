 "use client"  //If in next.js we are using any react hook then our component should be a client component 
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";



const links = [ 
  { url:"/" , title: "Home"},
  { url:"/about" , title: "About"},
  { url:"/portfolio" , title: "Portfolio"},
  { url:"/contact" , title: "Contact"},
];


const Navbar =() =>{

const [open ,setOpen] = useState(false);

const topVariants = {
    closed:{
       rotate:0,

    },
    opened:{
      rotate:45,
      backgroundColor : "rgb(255,255,255)"
    }
}

const centerVariants = {
  closed:{
    opacity:1,
  },
  opened:{
    opacity:0,
  }
}

const bottomVariants = {
  closed:{
     rotate:0,

  },
  opened:{
    rotate:-45,
    backgroundColor : "rgb(255,255,255)"
  }
}

const listVariants = {

  closed:{
    x: "100vw", //means position is out os screen and that's why below 0
  },
  opened:{
    x:0,
    transition:{
      when:"beforeChildren",
      staggerChildren:0.2
    }
  }
}

const listItemVariants = {

  closed:{
    x:-10,
    opacity:0,
  },
  opened:{
    x:0,
    opacity:1,
  }
}






    return(
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  text-xl '>
              {/* links */}
           <div className='hidden md:flex gap-4 w-1/3'>    {/* Adding extra div with code coz we want to directly see the items listed in menu when screen is md       */}
           {links.map((link) =>(
            //    <Link href={link.url} key={link.title}>{link.title}</Link>
             <NavLink link={link} key={link.title}/>
           )) }
           
           </div>

        {/* logo */}
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
            <Link href ='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                <span className="text-white mr-1">Nitin</span>
                <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Kumar</span>
            </Link>
        </div>
             {/* social */}
          <div className="hidden md:flex gap-4 w-1/3">    {/*Initially it is hidden  and for md screen it pops up */}
             <Link href = "https://github.com/nitin-k6">
             <Image src="/github.png" alt="" width={24} height={24}/>
             </Link>
             <Link href = "https://linkedin.com/in/nitin-k666/">
             <Image src="/linkedin.png" alt="" width={24} height={24}/>
             </Link>
             <Link href = "https://in.pinterest.com/67nitinkumar/">
             <Image src="/pinterest.png" alt="" width={24} height={24}/>
             </Link>
             <Link href = "https://instagram.com/nitin.x6/">
             <Image src="/instagram.png" alt="" width={24} height={24}/>
             </Link>
             <Link href = "https://www.facebook.com/profile.php?id=100057349644056">
             <Image src="/facebook.png" alt="" width={24} height={24}/>
             </Link>
          </div>

           {/* menu */}
        <div className="md:hidden z-50">  {/* for md  button and menu is hidden , z-50 fixed the problem of overlapping */}
            {/* menu button */}
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>  {/* onClick={(()=>setOpen(prev)=> !prev)}*/}
                <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left "></motion.div>
                <motion.div variants={centerVariants}  animate={open ? "opened" : "closed"}  className="w-10 h-1 bg-black rounded "></motion.div>
                <motion.div  variants={bottomVariants}   animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>

            </button>
            {/* menu list */}
            {open && (
            <motion.div  variants={listVariants} initial="closed" animate= "opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
               
              {links.map((link) =>(  //mapping links array mentioned above instead of writing those one by one 
                  <motion.div  variants= {listItemVariants} className="" key={link.title}>
                <Link href={link.url} >{link.title}</Link>  {/*key can also be link.url*/}
                  </motion.div>
              ))}
            </motion.div>
                   )}
        </div>
    </div>

    )
}

export default Navbar






