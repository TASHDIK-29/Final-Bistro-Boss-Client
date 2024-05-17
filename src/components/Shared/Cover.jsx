import { Parallax } from 'react-parallax';

const Cover = ({ img, heading, description }) => {
    return (

        <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className=" dark:text-gray-800">
                <div className=" flex flex-col w-full  h-[500px] mx-auto overflow-hidden rounded relative">
                    {/* <img src={img} alt="" className="w-full  dark:bg-gray-500" /> */}
                    <div className="p-10 m-4 absolute bottom-28 left-48 space-y-6 sm:px-10 sm:mx-12 lg:rounded-md opacity-70 bg-black text-white w-3/5">
                        <div className="space-y-2 p-8 text-center">
                            <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{heading}</h1>
                            <p className="text-xs">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;