import SectionTitle from "../../components/Shared/SectionTitle";
import img from '../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-bg pt-16 my-20 bg-fixed">
            <SectionTitle heading={'Check it out'} subHeading={'FROM OUR MENU'} color={'white'}></SectionTitle>
            <div className="flex items-center justify-center gap-8">
                <div className="w-1/3">
                    <img className="w-[648px] h-[280px]" src={img} alt="" />
                </div>
                <div className="space-y-1 w-1/3 text-white">
                    <h1 className="text-lg font-bold">March 20, 2023</h1>
                    <h1 className="text-lg font-normal">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="border-b-2 border-white rounded-lg px-2 mt-10 font-bold">READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;