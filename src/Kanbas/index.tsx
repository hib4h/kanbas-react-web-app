import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigator />
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />
        </Routes>

      </div>
    </div>
    </Provider>
  );
}

export default Kanbas;