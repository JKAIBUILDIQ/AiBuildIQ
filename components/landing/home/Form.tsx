"use client";
import Link from "next/link";
import topImage from "@/public/assets/home/Logo_13.jpg"
import Image from "next/image"

const Form = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* <div className="absolute inset-0 -z-10"> */}
          <Image src={topImage} alt="Logo" className="absolute inset-0 -z-10 w-full " style={{objectFit: 'cover', height: '100%'}} />
      {/* </div> */}
      <div className="text-center max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 font-clash-display bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
        Transforming Real estate lending
        </h1>
        
        <h2 className="text-5xl md:text-6xl font-semibold mb-4 font-clash-display text-gray-800 dark:text-gray-200">
        AI-Driven Solutions for Thriving Lending Ecosystem
        </h2>
        
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-clash-display">
        Revolutionizing how brokers and borrowers seamlessly navigate the lending process with AI-powered precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/funding-request"
            className="px-8 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 font-medium font-clash-display dark:bg-[#FF5555] dark:hover:bg-[#be5555]"
          >
            Funding Request
          </Link>
          
          <Link
            href="/solutions"
            className="px-8 py-3 bg-white hover:bg-gray-100 text-black border-2 border-black rounded-lg transition-colors duration-200 font-medium font-clash-display dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white/10"
          >
            Explore our solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;