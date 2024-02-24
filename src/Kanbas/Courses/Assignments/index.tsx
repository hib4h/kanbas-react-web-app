import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Database from "../../Database";
import "./index.css"

function Assignments() {
  const { assignments } = Database
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
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
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;