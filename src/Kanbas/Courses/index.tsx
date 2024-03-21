import React from "react";
import Database from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses({ courses }: { courses: any[]; }) {
  const { assignments } = Database;
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  return (
    <div>
      <div>
        &nbsp;&nbsp;<HiMiniBars3 />
        <span>
          <Link to={`/Kanbas/Courses/${course?._id}/Home`} style={{ textDecoration: "none", color: "red" }}>
            &nbsp;&nbsp;{course?.number} {course?.name}
          </Link>
        </span>
        <span> / </span>
        {pathSegments.slice(3).map((segment, index) => (
          <React.Fragment key={index}>
            {index === pathSegments.length - 4 && pathname.endsWith(`/Assignments/${segment}`) ? (
              <span>{assignments.find(assignment => assignment._id === segment)?.title}</span>
            ) : (
              <React.Fragment>
                <Link to={`/Kanbas/Courses/${course?._id}/${decodeURIComponent(segment)}`} style={{ textDecoration: "none", color: "red" }}>
                  {decodeURIComponent(segment)}
                </Link>
                {index !== pathSegments.length - 4 && <span> / </span>}
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
      </div>
      <br />
      <hr style={{ position: "absolute", width: "100%", top: "20px" }} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default Courses;