import Database from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaSearch, FaFilter } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import "./index.css"

function Grades() {
  const { assignments, enrollments, grades, users } = Database;
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  const studentNames = users.map((user) => `${user.firstName} ${user.lastName}`);
  return (
    <div>
      <div className="button-container">
      <button 
                    style={{ border: "0px", backgroundColor: "transparent", color: "red",
                    padding: "0.35rem 0.2rem" }}>
                Gradebook
            </button>
        <span className="float-end">
        <button className="btn btn-gray" style={{ width: "85px"}}>
            <FaFileImport/> &nbsp;Import
          </button>
          <button className="btn btn-gray" style={{ width: "85px"}}>
            <FaFileExport/> &nbsp;Export
          </button>
          <button style={{ width: "33px" }} className="btn btn-gray-2">
            <BsGearFill/>
          </button>
        </span>
      </div>
      <hr />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <span style={{fontWeight: "bold"}}>
            Student Names
          </span>
          <br />
          <select style={{width: "250px", marginTop: "8px", marginBottom: "5px"}}>
            <option disabled selected>Search Students</option>
            {studentNames.map((name) => (
                <option value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div>
        <span style={{fontWeight: "bold", marginLeft: "15px"}}>
            Assignment Names
          </span>
          <br />
          <select style={{marginLeft: "15px", width: "250px", marginTop: "8px", marginBottom: "5px"}}>
            <option disabled selected>Search Assignments</option>
            {as.map((assignment) => (
                <option value={assignment.title}>{assignment.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
      <button className="btn btn-gray"
      style={{
        width: "120px"
      }}>
        <FaFilter className="me-2" />
        Apply Filters
      </button>
      </div>
      <br />
      <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <th
            style={{
              border: "1px solid lightgray",
              padding: "5px",
              textAlign: "center",
            }}
          >
            Student Name</th>
          {as.map((assignment) => (
            <th          
            style={{
              border: "1px solid lightgray",
              padding: "5px",
              textAlign: "center",
            }}
            >{assignment.title}</th>
          ))}
        </thead>
        <tbody>
          {es.map((enrollment) => {
            const user = users.find((user) => user._id === enrollment.user);
            return (
              <tr>
                <td>
                  <span style={{ color: "red" }}>
                    {user?.firstName} {user?.lastName}
                  </span>
                </td>
                {as.map((assignment) => { 
                  const grade = grades.find(
                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                  );
                  return (
                    <td style={{ 
                      textAlign: "center" }}>
                      {grade?.grade ? (
                        grade.grade
                      ) : (
                        <input className="buttons"
                        style={{width:"30%"}}
                        type="text" />
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      </div>);
}
export default Grades;
