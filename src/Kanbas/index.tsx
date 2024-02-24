import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigator />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>

      </div>
    </div>
  );
}

export default Kanbas;