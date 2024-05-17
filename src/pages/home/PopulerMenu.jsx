import { useEffect, useState } from "react";
import SectionTitle from "../../components/Shared/SectionTitle";
import MenuItems from "../../components/Shared/MenuItems";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular'); 

    
    console.log(menu);
    return (
        <div className="my-14">
            <SectionTitle heading={'Check it out'} subHeading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid grid-cols-2 gap-6">
                {
                    popularItems.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="flex justify-center">
                <button className="p-2 border-b-2 border-blue-900 mx-auto rounded-b-xl text-blue-700 font-semibold my-8">View all Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;