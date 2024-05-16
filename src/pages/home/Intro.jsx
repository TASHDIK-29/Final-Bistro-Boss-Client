import img from '../../assets/home/chef-service.jpg'

const Intro = () => {
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded relative">
                <img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 m-4 mx-auto absolute bottom-20 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                    <div className="space-y-2 p-8 text-center">
                        <h1 className="inline-block text-2xl font-semibold sm:text-3xl">Bistro Boss</h1>
                        <p className="text-xs dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;