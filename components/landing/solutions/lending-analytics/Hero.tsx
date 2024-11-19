"use client";

const Hero = () => {
    return (
        <>
            <div className="mt-24"></div>
            <div className="relative bg-[#004F8F] min-h-screen flex items-center justify-center">
                {/* <div className="absolute -z-10 w-full ">{TopImage}</div> */}
                <div className="foreground"></div>
                <div className="text-center max-w-4xl mx-auto px-4 py-16">
                    <h1 className="text-white uppercase text-2xl md:text-3xl mb-6 font-clash-display ">
                    Lending Analytics
                    </h1>

                    <h2 className="text-white text-5xl md:text-6xl font-semibold mb-4 font-clash-display ">
                    Enhanced visibility and flexibility with Lending Analytics
                    </h2>

                    <p className="text-white text-lg mb-12  max-w-2xl mx-auto font-clash-display">
                    Refine your lending strategy with actionable insights and reliable accuracy
                    </p>
                    <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                    Request a Proof of Concept
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
