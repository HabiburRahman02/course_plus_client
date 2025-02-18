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
        <div className="card w-full max-w-sm bg-base-100 shadow-md rounded-lg overflow-hidden border border-gray-200">
            <figure>
                <img className="h-[160px] w-full object-cover" src={image} alt={title} />
            </figure>
            <div className="card-body p-4 space-y-0">
                <h2 className="text-lg font-semibold truncate">{title}</h2>
                <p className="text-sm text-gray-600"><span className="font-medium">By:</span> {name}</p>
                <p className="text-sm text-gray-600"><span className="font-medium">Email:</span> {email}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-semibold text-gray-800">${price}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${status === 'approved' ? 'bg-green-200 text-green-700' : 'bg-pink-200 text-pink-700'}`}>
                        {status}
                    </span>
                </div>
                <div className="mt-3 flex gap-2">
                    <Link to={`/dashboard/updateCourse/${_id}`} className="w-1/2">
                        <button className="btn btn-sm btn-primary w-full">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-secondary w-1/2">Delete</button>
                </div>
                <Link to={status === 'approved' ? `/dashboard/SeeProgressDetails/${_id}` : '#'}>
                    <button className={`btn btn-outline btn-sm w-full mt-2 ${status !== 'approved' && 'opacity-50 cursor-not-allowed'}`} disabled={status !== 'approved'}>
                        See Details
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default MyCourseCard;