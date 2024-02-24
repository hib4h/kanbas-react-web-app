import React from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaQuestionCircle , FaNeos } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";
function KanbasNavigator() {
  const { pathname } = useLocation();
  const links = [
    { label: " ", icon: <FaNeos color="red" size={30}/>},
    { label: "Account", icon: <FaUserCircle size={18}/>  },
    { label: "Dashboard", icon: <FaTachometerAlt color="red" size={18}/>  },
    { label: "Courses", icon: <FaBook color="red" size={18}/> },
    { label: "Calendar", icon: <FaRegCalendarAlt color="red" size={18}/> },
    { label:"Inbox", icon: <FaInbox color="red" size={18}/>},
    { label:"History", icon: <FaClock color="red" size={18}/>},
    {label:"Commons", icon: <FaArrowRightFromBracket color="red" size={18}/>},
    {label:"Studio", icon: <MdOndemandVideo color="red" size={18}/>},
    {label:"Help", icon: <FaQuestionCircle color="red" size={18}/>},
  ];
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} 
          <br />
          {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigator;