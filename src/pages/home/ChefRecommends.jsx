import { useEffect, useState } from "react";
import SectionTitle from "../../components/Shared/SectionTitle";
import MenuCard from "../../components/Shared/MenuCard";

const ChefRecommends = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            })
    }, [])

    return (
        <div className="my-12">
            <SectionTitle heading={'Should Try'} subHeading={'CHEF RECOMMENDS'}></SectionTitle>
            <div className="grid grid-cols-3 gap-6">
                {
                    menu.slice(0,3).map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;