import React, { useState } from "react";
import "./index.css";
import Database from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
const { modules } = Database;
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="button-container">
        <button className="btn btn-gray-mod">
          Collapse All
        </button>
        <button className="btn btn-gray-mod">
          View Progress
        </button>
        <button className="btn btn-gray-mod">
          <FaCheckCircle className="me-2" style={{ color: "green" }} />
          Publish All
        </button>
        <button className="btn btn-red-mod">
          <FaPlus className="me-2" /> Module
        </button>
        <button style={{ width: "33px"}} className="btn btn-gray-mod">
          <FaEllipsisV className="me-2" />
        </button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;