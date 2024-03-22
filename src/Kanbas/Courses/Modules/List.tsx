import React, { useState } from "react";
import { useParams } from "react-router";
import modules from "../../Database/modules.json";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  
  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

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
        <li className="list-group-item">
          <div>
            <input style={{ marginRight: "5px", marginLeft: "3px", width: "300px"}}
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <button className="btn-2 btn-green-mod" style={{ borderRadius: "5px" }}
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
            <button className="btn-2 btn-gray-mod-2" style={{ borderRadius: "5px" }}
            onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </div>
          <textarea style={{ marginLeft: "10px", width: "400px", height: "70px"}}
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          
        </li>

        {modulesList
          .filter((module) => module.course === courseId)
          .map((module) => (
            <li
              key={module._id}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}

                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                  <button className="btn-2 btn-gray-mod-2" style={{ borderRadius: "5px" }} onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button className="btn-2 btn-red-mod" style={{ borderRadius: "5px" }}  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any) => (
                    <li key={lesson._id} className="list-group-item">
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