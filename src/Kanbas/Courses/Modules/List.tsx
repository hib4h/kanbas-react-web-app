import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;



// import React, { useState } from "react";
// import "./index.css";
// import Database from "../../Database";
// import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
// import { useParams } from "react-router";
// const { modules } = Database;
// function ModuleList() {
//   const { courseId } = useParams();
//   const [moduleList, setModuleList] = useState<any[]>(modules);
//   const [module, setModule] = useState({
//     _id: "0", name: "New Module",
//     description: "New Description",
//     course: courseId || "",
//   });
//   const addModule = (module: any) => {
//     const newModule = { ...module,
//       _id: new Date().getTime().toString() };
//     const newModuleList = [newModule, ...moduleList];
//     setModuleList(newModuleList);
//   };
//   const deleteModule = (moduleId: string) => {
//     const newModuleList = moduleList.filter(
//       (module) => module._id !== moduleId );
//     setModuleList(newModuleList);
//   };
//   const updateModule = () => {
//     const newModuleList = moduleList.map((m) => {
//       if (m._id === module._id) {
//         return module;
//       } else {
//         return m;
//       }
//     });
//     setModuleList(newModuleList);
//   };



//   // const modulesList = modules.filter((module) => module.course === courseId);
//   // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
//   return (
//     <>
//       <div className="button-container">
//         <button className="btn btn-gray-mod">
//           Collapse All
//         </button>
//         <button className="btn btn-gray-mod">
//           View Progress
//         </button>
//         <button className="btn btn-gray-mod">
//           <FaCheckCircle className="me-2" style={{ color: "green" }} />
//           Publish All
//         </button>
//         <button className="btn btn-red-mod">
//           <FaPlus className="me-2" /> Module
//         </button>
//         <button style={{ width: "33px"}} className="btn btn-gray-mod">
//           <FaEllipsisV className="me-2" />
//         </button>
//       </div>
//       <hr />
//       <ul className="list-group wd-modules">
//       <li className="list-group-item">
//         <button onClick={() => { addModule(module) }}>
//           Add
//           </button>
//           <button onClick={updateModule}>
//                 Update
//         </button>

//         <input value={module.name}
//           onChange={(e) => setModule({
//             ...module, name: e.target.value })}
//         />
//         <textarea value={module.description}
//           onChange={(e) => setModule({
//             ...module, description: e.target.value })}
//         />
//       </li>

//         {moduleList
//                 .filter((module) => module.course === courseId)
//         .map((module, index) => (
//           <li key={index}
//             className="list-group-item"
//             // onClick={() => setSelectedModule(module)}
//             >
//                           <button
//               onClick={(event) => { setModule(module); }}>
//               Edit
//             </button>

//                           <button
//               onClick={() => deleteModule(module._id)}>
//               Delete
//             </button>

//             <div>
//               <FaEllipsisV className="me-2" />
//               {module.name}
//               <span className="float-end">
//                 <FaCheckCircle className="text-success" />
//                 <FaPlusCircle className="ms-2" />
//                 <FaEllipsisV className="ms-2" />
//               </span>
//             </div>
//             {/* {selectedModule._id === module._id && (
//               <ul className="list-group">
//                 {module.lessons?.map((lesson, index) => (
//                   <li className="list-group-item" key={index}>
//                     <FaEllipsisV className="me-2" />
//                     {lesson.name}
//                     <span className="float-end">
//                       <FaCheckCircle className="text-success" />
//                       <FaEllipsisV className="ms-2" />
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             )} */}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default ModuleList;