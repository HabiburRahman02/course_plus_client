import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const MyCourseCard = ({ course, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { name, image, description, email, price, status, title, _id } = course || {}

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/courseDelete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success('Deleted course successfully')
                        }
                    })

            }
        });
    }



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
                <p><span className="font-semibold">Status:</span> <span className="bg-pink-200 rounded-full px-2 py-1">{status}</span></p>
                <div className="card-actions justify-between">
                    <Link to={`/dashboard/updateCourse/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete</button>
                </div>
                {
                    status === 'approved' ?
                        <Link to={`/dashboard/SeeProgressDetails/${_id}`}>
                            <button className="btn btn-outline w-full mt-3">See Details</button>
                        </Link>
                        : <button disabled className="btn btn-outline mt-3">See Details</button>
                }
            </div>
        </div>
    );
};

export default MyCourseCard;