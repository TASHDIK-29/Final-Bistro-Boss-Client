
const MenuCard = ({item}) => {

    const { recipe, image, price, name } = item;

    return (
        <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-800">{recipe}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide border-b-2 border-yellow-700 rounded-md bg-slate-300/25 text-yellow-600">Add to Cart</button>
            </div>
        </div>
    );
};

export default MenuCard;