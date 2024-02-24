import "./index.css"
import React from "react";
import { FaArrowCircleRight, FaCheckCircle, FaFileImport, FaRegBell, FaStream } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md"
import { Bs5CircleFill, BsMegaphone } from "react-icons/bs"

function Status() {
    return (
        <div style={{ textAlign: "center" }}>
            <button className="btn btn-gray">
                <FaFileImport/> &nbsp;Import Existing Content
            </button>
            <br />
            <button className="btn btn-gray">
                <FaArrowCircleRight/> &nbsp;Import From Commons
            </button>
            <br />
            <button  className="btn btn-gray">
                <MdAdsClick/> &nbsp;Choose Home Page
            </button>
            <br />
            <button className="btn btn-gray">
                <FaStream/> &nbsp;View Course Stream
            </button>
            <br />
            <button className="btn btn-gray">
                <BsMegaphone/> &nbsp;New Announcement
            </button>
            <br />
            <button className="btn btn-gray">
                <FaStream/> &nbsp;New Analytics
            </button>
            <br />
            <button className="btn btn-gray">
                <FaRegBell/> &nbsp;View Course Notifications
            </button>
            <br />
            <br />
            <div>
            <h6 style={{textAlign: "left", paddingLeft: "35px"}}>To Do</h6>
            <hr style={{marginLeft: "20px"}}/>
            <ul style={{ listStyleType: "none", textAlign: "left" }}>
                <li>
                    <span style={{ color: "red", fontSize: "16px" }}>
                    <Bs5CircleFill/> Grade A1 - ENV + HTML
                    </span>
                    <br />
                    <span style={{ fontSize: "14px" }}>100 points ● Sep 18 at 11:59pm</span>
                </li>
                <li>
                    <span style={{ color: "red", fontSize: "16px" }}>
                    <Bs5CircleFill/> Grade A2 - CSS + BOOTSTRAP
                    </span>
                    <br />
                    <span style={{ fontSize: "14px" }}>100 points ● Sep 18 at 11:59pm</span>
                </li>
            </ul>
            </div>
        </div>
    );
}
export default Status;