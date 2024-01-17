import React, { useState } from "react";
import CarouselComp from "../components/CarouselComp";
import { ziyarat_imgs } from "../data/ziyarat";
import ProjectCard from "../components/ProjectCard";
import SingleImageModal from "../components/SingleImageModal";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
const Home = () => {
  const isNonMobile = useMediaQuery("(min-width: 1200px)");
  return (
<>
      <div className="bg-light text-dark p-1 text-center">
        <div className="mb-3">
          <CarouselComp />
        </div>{isNonMobile ? (
<>
        <div className="container">
          <div className="d-flex">
            <div className="justify-content-start my-auto mx-auto ">
              <h2 className="text-center">About Us</h2>
              <p>
                Meet the operator who pioneered luxury travel to the holy land.
                We are Hijaz Tours and Travels, perhaps the first who actually
                put our feet in the pilgrim's shoes and walked that mile. Thanks
                to many patrons who have used our services, today we stand
                strong in our specialty of the Hajj and Umrah vertical.
              </p>
              <p>
              Our success story records back to 14 years of relentless hard work, perseverance and dedication towards only one focal point; "Your Comfort". What started as a small beginning as a humble service by our pioneer Haji Jameel Ahmed Ghori in 2001 , is today a professionally organized, accredited, acclaimed organization spanning all across the country
              </p>
              <Link to="/profile" className="btn btn-success">Know More...</Link>
            </div>
            <div className=" text-center">
              <img
              className="custom-img"
                src="/assets/nabvi.jpg"
                style={{ width: "700px", height: "500px" }}
                alt=""
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="justify-content-start">
              <img
                   className="custom-img"
                src="/assets/mekkah-kabah-masjid.jpg"
                style={{ width: "700px", height: "500px" }}
                alt=""
              />
            </div>
            <div className="my-auto mx-auto text-center">
              <h2 className="text-center">
                «Ministry of <span> Haj and Umrah </span>
              </h2>
              <p>
                The Ministry of Hajj and Umra upgrades the provided services to
                pilgrims by using new technologies and facilitates Hajj and
                Umrah in coordination with all agencies. Its job is also to work
                for the sake of staff development and training to receive
                pilgrims, as well as to provide opportunities to citizen
                volunteers to contribute to enhancing the provided services.
              </p>
            </div>
          </div>

          <div className="">
            <h1 className="text-center">Ziyarat Gallery</h1>
            <div className="row mb-1  ">
              {ziyarat_imgs.map((ziyarat) => {
                return (
                  <>
                    <ProjectCard
                      id={ziyarat.id}
                      img={ziyarat.img}
                      name={ziyarat.title}
                    />
                  </>
                );
              })}
            </div>
          </div>
          </div>
          </>
        ):
        (
          <>
          <div className="container">
          <div className="d-flex flex-column">
            <div className=" ">
              <h2 className="text-center">About Us</h2>
              <p>
                Meet the operator who pioneered luxury travel to the holy land.
                We are Hijaz Tours and Travels, perhaps the first who actually
                put our feet in the pilgrim's shoes and walked that mile. Thanks
                to many patrons who have used our services, today we stand
                strong in our specialty of the Hajj and Umrah vertical.
              </p>
              <p>
              Our success story records back to 14 years of relentless hard work, perseverance and dedication towards only one focal point; "Your Comfort". What started as a small beginning as a humble service by our pioneer Haji Jameel Ahmed Ghori in 2001 , is today a professionally organized, accredited, acclaimed organization spanning all across the country
              </p>
              <Link to="/" className="btn btn-success">Know More...</Link>
            </div>
            <div className=" text-center">
              <img
              className="custom-img"
                src="/assets/nabvi.jpg"
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="">
              <img
                   className="custom-img"
                src="/assets/mekkah-kabah-masjid.jpg"
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="my-auto mx-auto text-center">
              <h2 className="text-center">
                «Ministry of <span> Haj and Umrah </span>
              </h2>
              <p>
                The Ministry of Hajj and Umra upgrades the provided services to
                pilgrims by using new technologies and facilitates Hajj and
                Umrah in coordination with all agencies. Its job is also to work
                for the sake of staff development and training to receive
                pilgrims, as well as to provide opportunities to citizen
                volunteers to contribute to enhancing the provided services.
              </p>
            </div>
          </div>

          <div className="">
            <h1 className="text-center">Ziyarat Gallery</h1>

            <div className="row mb-1 mx-auto ">
              {ziyarat_imgs.map((ziyarat) => {
                return (
                  <>
                    <ProjectCard
                      id={ziyarat.id}
                      img={ziyarat.img}
                      name={ziyarat.title}
                    />
                  </>
                );
              })}
            </div>
          </div>
          </div>
          </>
        )}
 </div>
 </>
  );
};

export default Home;
