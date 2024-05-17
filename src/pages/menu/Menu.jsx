import { Helmet } from "react-helmet-async";
import Cover from "../../components/Shared/Cover";
import img from '../../assets/menu/banner3.jpg'
import img2 from '../../assets/menu/dessert-bg.jpeg'
import img3 from '../../assets/menu/pizza-bg.jpg'
import img4 from '../../assets/menu/soup-bg.jpg'
import img5 from '../../assets/menu/salad-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/Shared/SectionTitle";
import MenuItems from "../../components/Shared/MenuItems";
import { Link } from "react-router-dom";

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const offereds = menu.filter(item => item.category === 'offered');

    return (
        <div className="space-y-14 mb-10">
            <Helmet>
                <title>Menu || Bistro Boss</title>
            </Helmet>

            <Cover
                img={img}
                heading={'OUR MENU'}
                description={'Would You Like To Try A Dish ?'}
            ></Cover>

            <SectionTitle heading={'Do not miss'} subHeading={'Todays offer'}></SectionTitle>
            <div className="grid grid-cols-2 gap-6">
                {
                    offereds.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
           
            <Cover
                img={img2}
                heading={'DESSERT'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <div className="grid grid-cols-2 gap-6">
                {
                    desserts.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>

            <div className="flex justify-center">
                <Link to='/order/dessert'><button className="p-2 border-b-2 border-blue-900 mx-auto rounded-b-xl text-blue-700 font-semibold my-8">Order now</button></Link>
            </div>

            <Cover
                img={img3}
                heading={'PIZZA'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <div className="grid grid-cols-2 gap-6">
                {
                    pizzas.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>

            <div className="flex justify-center">
                <Link to='/order/pizza'><button className="p-2 border-b-2 border-blue-900 mx-auto rounded-b-xl text-blue-700 font-semibold my-8">Order now</button></Link>
            </div>

            <Cover
                img={img4}
                heading={'SOUP'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <div className="grid grid-cols-2 gap-6">
                {
                    soups.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>

            <div className="flex justify-center">
                <Link to='/order/soup'><button className="p-2 border-b-2 border-blue-900 mx-auto rounded-b-xl text-blue-700 font-semibold my-8">Order now</button></Link>
            </div>

            <Cover
                img={img5}
                heading={'SALAD'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></Cover>
            <div className="grid grid-cols-2 gap-6">
                {
                    salads.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>

            <div className="flex justify-center">
                <Link to='/order/salad'><button className="p-2 border-b-2 border-blue-900 mx-auto rounded-b-xl text-blue-700 font-semibold my-8">Order now</button></Link>
            </div>



        </div>
    );
};

export default Menu;