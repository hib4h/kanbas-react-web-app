import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })

// {
//   const [courses, setCourses] = useState(db.courses);
//   const [course, setCourse] = useState({
//     _id: "0", name: "New Course", number: "New Number",
//     startDate: "2023-09-10", endDate: "2023-12-15",
//     image: "/images/reactjs.jpg"
//   });
//   const addNewCourse = () => {
//     const newCourse = { ...course,
//                         _id: new Date().getTime().toString() };
//     setCourses([...courses, { ...course, ...newCourse }]);
//   };
//   const deleteCourse = (courseId: string) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };
//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };


{
  return (
    <div className="p-4">
      <h2>Dashboard</h2>              <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control mb-2"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control mb-2" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control mb-2" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button className="btn btn-primary mb-2" style={{background: "green", color: "white"}} onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-primary mb-2" onClick={updateCourse} >
        Update
      </button>

      <h4>Published Courses (12)</h4> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`../../images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary" style={{background: "green", color: "white"}}>
                    Go </Link>
                    <span className="float-end">
                    <button className="btn btn-primary" onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
            <button className="btn btn-primary" style={{background: "red", color: "white"}} onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
              </button>
            </span>
                    
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;