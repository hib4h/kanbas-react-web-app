import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Database from "../../Database";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();

  const assignmentsList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const [selectedAssignment, setSelectedAssignment] = useState(assignmentsList[0]);

  return (
    <>
      <div>
          <input
            type="text"
            placeholder="Search for Assignments"
            className="buttons"
            style={{marginTop: "10px"}}
          />
          <span className="float-end">
        <button className="btn btn-gray"
        style={{ width: "82px"}}>
          <FaPlus className="me-2" />
          Group
        </button>
        <button className="btn btn-red">
          <FaPlus className="me-2" 
          /> Assignment
        </button>
        <button style={{ width: "33px"}} className="btn btn-gray-2">
          <FaEllipsisV className="me-2" />
        </button>
        </span>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentsList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                  <button
                    className="btn-2 btn-red-mod"
                    style={{ borderRadius: "5px" }}
                    onClick={() => {
                      const confirmed = window.confirm("Are you sure you want to delete the assignment?");
                      if (confirmed) {
                        dispatch(deleteAssignment(assignment._id));
                      }
                    }}
                  >
                    Delete
                  </button>
                  </span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;