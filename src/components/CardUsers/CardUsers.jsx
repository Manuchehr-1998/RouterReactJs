import { Link } from "react-router-dom";

export default function CardUsers({ cardUsers, deleteCardUser }) {
  return (
    <div className="flex gap-4 pt-2 justify-center">
      {cardUsers.map((user) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img src={user.img} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{user.fulName}</div>
            <p className="text-gray-700 text-base">{user.job}</p>
          </div>
          <div className="buttons gap-2 flex flex-wrap">
            <Link key={user.id} to={`${user.id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                View More
              </button>
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => deleteCardUser(user.id)}
            >
              Delet
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Complete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
