import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/navbar";
import TransitionProvider from "./components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {  
  title: "Nitin Portfolio App",
  description: "Portfolio designed by Nitin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
          <div className="h-24">
          <Navbar/>
          </div>
          <div className="h-[calc(100vh-6rem)]">
          {children}
          </div>
        </div> */}   {/* we have copied it in transitionProvider as  we wanted to use AnimatePresence(framer motion) which is client component and for that we have to remove meta data as it is server component*/}
          <TransitionProvider>{children}</TransitionProvider>          {/* we  have used above code in transitionProvider component*/}
        </body>
    </html>
  );
}
