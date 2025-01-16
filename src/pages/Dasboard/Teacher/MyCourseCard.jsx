
const MyCourseCard = ({ course }) => {
    const { name, image, description, email, price, status, title } = course
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Title: {title}</h2>
                <p><span className="font-semibold">Name:</span> {name}</p>
                <p><span className="font-semibold">Email:</span> {email}</p>
                <p><span className="font-semibold">Description:</span> {description}</p>
                <p><span className="font-semibold">Price:</span> ${price}</p>
                <p><span className="font-semibold">Status:</span> {status}</p>
                <div className="card-actions justify-between">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-secondary">Delete</button>
                </div>
                {
                    status === 'approved' ? <button className="btn btn-outline mt-3">See Progress</button> : <button disabled className="btn btn-outline mt-3">See Progress</button>
                }
            </div>
        </div>
    );
};

export default MyCourseCard;