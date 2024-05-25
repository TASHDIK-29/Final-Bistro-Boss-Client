
const SectionTitle = ({heading, subHeading, color}) => {
    return (
        <div className="mx-auto w-6/12 text-center space-y-2 my-12">
            <p className="text-yellow-600 font-semibold">---{heading}---</p>
            <h1 className={`text-3xl font-bold uppercase border-y-4 p-4 ${color === 'white' ? 'text-white' : ''}`}>{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;