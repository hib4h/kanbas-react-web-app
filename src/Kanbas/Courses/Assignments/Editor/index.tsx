import React, {useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Database from "../../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  // const assignment = assignmentsList.find(
  //   (assignment) => assignment._id === selectedAssignment._id);
  
  const assignmentsList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  // const assignment = useSelector(
  //   (state: KanbasState) => state.assignmentsReducer.assignment
  // );
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments.find((a) => a._id === assignmentId)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedAssignment, setSelectedAssignment] = useState(assignmentsList[0]);

  const handleSave = () => {
    if (assignment) {
      dispatch(
        updateAssignment({
          ...assignment,
          title: selectedAssignment.title,
          description: selectedAssignment.description,
          points: selectedAssignment.points,
          dueDate: selectedAssignment.dueDate,
          availableFromDate: selectedAssignment.availableFromDate,
          availableUntilDate: selectedAssignment.availableUntilDate
        })
      );
    } else
      dispatch(addAssignment({
        title: selectedAssignment.title,
          description: selectedAssignment.description,
          points: selectedAssignment.points,
          dueDate: selectedAssignment.dueDate,
          availableFromDate: selectedAssignment.availableFromDate,
          availableUntilDate: selectedAssignment.availableUntilDate
      }));

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
      <input
             className="form-control mb-2"
             defaultValue={selectedAssignment.title ? assignment.title : ""}
             placeholder="Enter name"
      onChange={(e) =>
        setSelectedAssignment({ ...selectedAssignment, title: e.target.value })
      }
      />
      
      <h6>&nbsp;Description</h6>
      <textarea
             className="form-control mb-2"
             defaultValue={assignment.description ? assignment.description : ""}
             placeholder="Enter description"
      onChange={(e) =>
        setSelectedAssignment({ ...selectedAssignment, description: e.target.value })
      }
      />

      <h6>&nbsp;Points</h6>
      <input
             className="form-control mb-2"
      defaultValue={assignment.points ? assignment.points : ""}
      placeholder="0"
      onChange={(e) =>
        setSelectedAssignment({ ...selectedAssignment, points: e.target.value })
      }
      />

      <h6>&nbsp;Due Date</h6>
      <input
             className="form-control mb-2"
             type="date"
      value={assignment.dueDate}
      onChange={(e) =>
        setSelectedAssignment({ ...selectedAssignment, dueDate: e.target.value })
      }
      />

      <h6>&nbsp;Available From</h6>
      <input
             className="form-control mb-2"
             type="date"
      value={assignment.availableFromDate}
      onChange={(e) =>
        setSelectedAssignment({ ...selectedAssignment, availableFromDate: e.target.value })
      }
      />

      <h6>&nbsp;Available Until</h6>
      <input
             className="form-control mb-2"
             type="date"
      value={assignment.availableUntilDate}
      onChange={(e) =>
        setSelectedAssignment({ ...selectedAssignment, availableUntilDate: e.target.value })
      }
      />

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