import { Link } from "react-router-dom";
import course from "../course1.png";
function Courses() {
  return (
    <Link
      to="onboarding/html"
      className="mx-auto max-w-7xl pt-10 grid grid-cols-4 gap-3"
    >
      <div className="rounded p-2 bg-slate-600 hover:ring-2 ring-white transition-all shadow">
        <img src={course} alt="" className="rounded" />
        <h2 className="text-2xl pt-2">Html 5</h2>
        <h6 className="text-gray-400">Pradish</h6>
      </div>
    </Link>
  );
}

export default Courses;
