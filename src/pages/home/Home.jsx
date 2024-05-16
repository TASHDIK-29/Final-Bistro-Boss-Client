import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import ChefRecommends from "./ChefRecommends";
import Featured from "./Featured";
import Intro from "./Intro";
import PopularMenu from "./PopulerMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Intro></Intro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;