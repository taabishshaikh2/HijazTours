import React from "react";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from "react-router-dom";
import "./ProjectCard.css"
import SingleImageModal from "./SingleImageModal";
const ProjectCard = ({ id,img,name }) => {
 
  return (
    // <div className="row">
    //   <div className="col">
        <div
          className="card position-relative bg-light shadow-lg p-1 mx-1 my-1"
          style={{ width: "20rem" }}
        >
          <img src={img} style={{height: "100%", width:"100%"}} alt="img not found" />
          
          <div  className="card-body  position-absolute trans_card d-flex flex-column justify-content-center align-items-center  text-dark">
            <div className="card-title text-center">
              <h2>{name}</h2>
            </div>
            {/* <div className="card-title p-1 text-center">{location}</div> */}
            {/* <div className="exploreBtn"> */}
            {/* <Link
              to={`/${name}`}
              // to={links}
              className="btn btn-md exploreBtn btn-danger card-text text-white rounded-1"
            >
              <div className="arrowIcon ">
              <DoubleArrowIcon fontSize="large"/>
              </div>
               
            </Link> */}
            {/* </div> */}
           
          </div>
          
        </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
