import React from 'react';

interface TopHeroProps {
    subtitle: string;
    title: string;
    description: string;
    button: string;
}

const TopHero: React.FC<TopHeroProps> = ({
    subtitle,
    title,
    description,
    button
}) => {
    return (
        <div className="relative mt-[14vh] rounded-lg h-[50vh] w-full overflow-hidden bg-[#004F8F]">
            {/* Upper wave */}
            <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" >
                <path  fill="white"  fillOpacity="0.05" d="M200,0Q400,150,600,0" />
            </svg>

            {/* Lower wave */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1840 302" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.05" d="M922.536 122.773C1326.16 -97.0133 1702.34 29.191 1839.97 119.766V281.15C1839.97 292.195 1831.02 301.15 1819.97 301.15H20.0262C8.98059 301.15 0.0262451 292.195 0.0262451 281.15V77.8821C139.353 184.424 518.912 342.56 922.536 122.773Z" />
                <path opacity="0.05" d="M922.536 162.77C1326.16 -57.0172 1702.34 69.1871 1839.97 159.763V281.168C1839.97 292.214 1831.02 301.168 1819.97 301.168H20.0262C8.98059 301.168 0.0262451 292.214 0.0262451 281.168V117.878C139.353 224.42 518.912 382.556 922.536 162.77Z" />
            </svg>

            {/* Content placeholder */}
            <div className="relative z-10 flex items-center justify-center h-[50vh]">
                <div className="text-center max-w-4xl mx-auto px-4 py-16">
                    <h1 className="text-white uppercase text-sm mb-6 opacity-50">
                        {subtitle}
                    </h1>

                    <h2 className="text-white text-5xl py-4 md:text-6xl font-semibold mb-4  ">
                        {title}
                    </h2>

                    <p className="text-white text-sm mb-12  max-w-2xl mx-auto">
                        {description}
                    </p>
                    {button &&
                        <button className="bg-white text-[#004F8F] py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                            {button}
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default TopHero;

