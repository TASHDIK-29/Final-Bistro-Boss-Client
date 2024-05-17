import { useState } from 'react';
import img from '../assets/shop/banner2.jpg'
import Cover from '../components/Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import MenuCard from '../components/Shared/MenuCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];

    const {category} = useParams();

    const initialTab = categories.indexOf(category);
    console.log(category);

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');

    const [tabIndex, setTabIndex] = useState(initialTab);

    return (
        <div>
            <Helmet>
                <title>Order || Bistro Boss</title>
            </Helmet>
            <Cover
                img={img}
                heading={'OUR SHOP'}
                description={'Would You Like To  Try A Dish ?'}
            ></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            salad.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            pizza.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            soup.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            dessert.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            drinks.map(item => <MenuCard item={item} key={item._id}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;