import { Link } from "react-router-dom";

const MyCourseCard = ({ course }) => {
    const { name, image, description, email, price, status, title, _id } = course || {}
    return (
        <div className="card w-full card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    className="h-[200px] w-full object-cover"
                    src={image}
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
                    <Link to={`/dashboard/updateCourse/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
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