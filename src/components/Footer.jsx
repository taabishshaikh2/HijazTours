import { Avatar, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import img from "../assets/BrandPic.jpeg";
import { Business, Email,  Phone, PhoneIphone } from "@mui/icons-material";


const Footer = () => {
  const emailAddress = "pastimentmt@gmail.com";
  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  return (
    <>
      {isNonMobile ? (
        <div className="text-dark bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <div className="">
                  <Avatar src="/assets/logo.jpg" variant="square" className="me-3"   alt="" sx={{ width: 400,height:200  }} />
                </div>
                {/* <h2 className="">Past Time Entertainment</h2> */}
              </div>

           
               

              <div className="col  ">
                <h2 className="">Explore</h2>
                <div className="col list-group">
                  <Link
                    to="/"
                    target="_top"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    Home
                  </Link>
               
                  <Link
                    to="/profile"
                    target="_top"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    About
                  </Link>
                </div>
              </div>

              <div className="col">
                <h2 className="">Contacts</h2>
                <div className="col list-group">
                <Link
                    to={`mailto:${emailAddress}`}
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <Email /> Hijaztours@gmail.com
                  </Link>
                 
                  <Link
                    to="https://wa.me/message/M53JJO5UE33UF1"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <Phone />Office +91 22-28505831/30
                  </Link>
                  <Link
                    to="https://wa.me/message/M53JJO5UE33UF1"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <PhoneIphone />Jameel Ahmed Ghori +91 +919821145831
                  </Link>
                  <Link
                    to="https://wa.me/message/M53JJO5UE33UF1"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <PhoneIphone />Hannan Ahmed Ghori +91 +91 75067 50794
                  </Link>
                  <p
                   
                
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <Business />Hijaz Tours & Travels
                    <p>B-206, Navkar Chambers, Near Marol Naka Metro Station,Andheri-Kurla Road,Andheri East, mumbai-400059
Off Tel:- +91 22-28505831/30</p>

                  </p>
                </div>
              </div>
              <div className="col">
              <h2 className="text-center">Affiliated With</h2> 
              <div className="col list-group">
                <img src="/assets/hajjcommittie.png" style={{height: "170px", width: "300px",objectFit: "fill"}}/>
                <img src="/assets/saudi_arabia_arms.png"  style={{height: "170px", width: "300px", objectFit: "fill"}}/>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="accordion bg-light" id="accordionExample">
            <div className="accordion-item bg-light">
              <h2 className="accordion-header bg-light">
                <button
                  className="accordion-button bg-light text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Explore
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse  bg-light"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ms-3 text-dark col list-group">
                  <Link
                    to="/"
                    target="_top"
                    className="mb-3 text-decoration-none text-dark "
                  >
                    Home
                  </Link>
                  <Link
                    to="/profile"
                    target="_top"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    About
                  </Link>
                  
                </div>
              </div>
            </div>
          
            <div className="accordion-item bg-light">
              <h2 className="accordion-header bg-light">
                <button
                  className="accordion-button collapsed bg-light text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Contacts
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse bg-light"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ms-3 col list-group bg-light text-dark">
                <Link
                    to={`mailto:${emailAddress}`}
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <Email /> Hijaztours@gmail.com
                  </Link>
                 
                  <Link
                    to="https://wa.me/message/M53JJO5UE33UF1"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <Phone />Office +91 22-28505831/30
                  </Link>
                  <Link
                    to="https://wa.me/message/M53JJO5UE33UF1"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <PhoneIphone />Jameel Ahmed Ghori +91 +919821145831
                  </Link>
                  <Link
                    to="https://wa.me/message/M53JJO5UE33UF1"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <PhoneIphone />Hannan Ahmed Ghori +91 +91 75067 50794
                  </Link>
                  <p
                   
                
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <Business />Hijaz Tours & Travels
                    <p>B-206, Navkar Chambers, Near Marol Naka Metro Station,Andheri-Kurla Road,Andheri East, mumbai-400059
Off Tel:- +91 22-28505831/30</p>

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
              <h2 className="text-center">Affiliated With</h2> 
              <div className="col list-group d-flex justify-content-center align-items-center">
                <img src="/assets/hajjcommittie.png" style={{height: "170px", width: "300px",objectFit: "fill"}}/>
                <img src="/assets/saudi_arabia_arms.png"  style={{height: "170px", width: "300px", objectFit: "fill"}}/>
                
                </div>
              </div>
        </div>
      )}
      <div className="bg-light text-dark p-3 text-center">
        <span>
          © Copyright 2023 | All Rights Reserved Hijaz Tours
        </span>
      </div>
    </>
  );
};

export default Footer;
