
const MenuItems = ({ item }) => {
    const { recipe, image, price, name } = item;

    return (
        <div className="flex space-x-4">
            <img className="w-[118px] h-[104px] rounded-r-[210px] rounded-bl-[210px]" src={image} alt="" />
            <div>
                <h1 className="text-lg font-semibold uppercase">{name}----------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-xl text-yellow-600 font-semibold">${price}</p>
        </div>
    );
};

export default MenuItems;