import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Database from "../../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import "./index.css";

function AssignmentEditor() {
  const { assignments } = Database
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div style={{padding:"15px"}}>
        <span className="d-flex float-end">
            <button className="btn"
                    style={{ border: "0px", backgroundColor: "transparent", color: "green" }}>
                <FaCheckCircle className="me-2" style={{ color: "green" }} />
                Published
            </button>
            <button style={{ width: "33px"}} className="btn btn-gray-2">
                <FaEllipsisV className="me-2" />
            </button>   
        </span>
        </div>
        <br />
        <hr />
      
      <div>
      <h6>&nbsp;Assignment Name</h6>
      <input value={assignment?.title}
             className="form-control mb-2" />
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
    </div>
  );
}
export default AssignmentEditor;