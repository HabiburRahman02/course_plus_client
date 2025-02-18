
const Partner = ({ img }) => {
    return (

        <div >
            < img className="rounded-full h-48 w-48 object-cover border-2 border-[rgb(37,168,214)] p-1" src={img} alt="" />
            {/* <h3 className="text-2xl font-semibold mt-2">{userName}</h3> */}
        </div >
    );
};

export default Partner;