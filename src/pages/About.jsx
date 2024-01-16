import { Avatar } from "@mui/material";
import React from "react";
import { office } from "../data/office";
import { useMediaQuery } from "@mui/material";
const About = () => {
    const isNonMobile = useMediaQuery("(min-width: 1200px)");
  return (
    <div className="container bg-light mt-3">
{isNonMobile? (
    <>
    <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="/public/assets/kabaimg.webp"
            sx={{
              height: 500,
              width: 500,
            }}
            className="shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="my-3">
            <span className="text-secondary">About</span> <br />
            Company
          </h3>
          <div className="info phone ">
            <p>
              Meet the operator who pioneered luxury travel to the holy land. We
              are Hijaz Tours and Travels, perhaps the first who actually put
              our feet in the pilgrim's shoes and walked that mile. Thanks to
              many patrons who have used our services, today we stand strong in
              our specialty of the Hajj and Umrah vertical.
            </p>
            <p>
              Our success story records back to 14 years of relentless hard
              work, perseverance and dedication towards only one focal point;
              "Your Comfort". What started as a small beginning as a humble
              service by our pioneer Haji Jameel Ahmed Ghori in 2001 , is today
              a professionally organized, accredited, acclaimed organization
              spanning all across the country
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 row">
        <div className="col-md-6 ">
          <div className="info email mb-3">
            <p>
              Our objective is to help the community to perform Hajj & thus
              fulfill an obligation of lifetime and enable pilgrims travel to
              Islam's Holiest Shrines in comfort, dignity and in proper frame of
              mind. We are to proud inform you that Hijaz Tours & Travels are
              registered with the Ministry of Minority affairs, Govt. of India &
              Ministry of Hajj, Saudi Arabia and member of various Associations.
              Almost 14 years on and we are still building global bonds of
              brother and sisterhood by providing excellence every step of the
              way for Hajj and Umrah.
            </p>

            <p>
              Our core ethos of khidma (service) underpins everything we do. And
              we guarantee that all of our customers’ needs will be comfortably
              met, their expectations exceeded and their goals before the start
              of the journey, accomplished. We push ourselves to go above and
              beyond what is expected of us, paying attention to the little
              details that are often missed.
            </p>
            <p>
              For example, all of our Hajj pilgrims are given our Hajj
              Essentials Collection, which are travel-friendly and functional
              items, such as an instant cooling towel, pain alleviating cream, a
              Tawaf friendly umbrella, and much more…
            </p>
            <p>
              We also ensure that our pilgrims are accompanied by doctors and
              scholars to tend to every health need and question. These
              facilities are just one of the ways we help to ease the strenuous
              journey to Makkah and Madinah as much as possible.
            </p>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="/public/assets/masjideenabvi.jpg"
            sx={{
              height: 400,
              width: 700,
              objectFit: "fill",
            }}
            variant="square"
            className="shadow"
          />
        </div>
      </div>
      <div>
        <div className="text-center">
            <h2>Office Images</h2>
        </div>
        <div className="row mb-1 ">
            
          {office.map((img) => {
            return (
              <>
                {" "}
                <div className="col-4">
                  <img src={img.img} style={{objectFit: "fill", height: "400px", width: "500px"}} className="img-thumbnail" />
                </div>{" "}
              </>
            );
          })}
        </div>
      </div>
    </>
): 
(<>
<div className="row d-flex flex-column">
        <div className="col-md-6 d-flex flex-column align-items-center">
          <Avatar
            src="/public/assets/kabaimg.webp"
            sx={{
              height: 300,
              width: 300,
            }}
            className="shadow "
          />
        </div>
        <div className="col-md-6">
          <h3 className="my-3 text-center">
            <span className="text-secondary ">About</span> <br />
            Company
          </h3>
          <div className="info phone ">
            <p>
              Meet the operator who pioneered luxury travel to the holy land. We
              are Hijaz Tours and Travels, perhaps the first who actually put
              our feet in the pilgrim's shoes and walked that mile. Thanks to
              many patrons who have used our services, today we stand strong in
              our specialty of the Hajj and Umrah vertical.
            </p>
            <p>
              Our success story records back to 14 years of relentless hard
              work, perseverance and dedication towards only one focal point;
              "Your Comfort". What started as a small beginning as a humble
              service by our pioneer Haji Jameel Ahmed Ghori in 2001 , is today
              a professionally organized, accredited, acclaimed organization
              spanning all across the country
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 row d-flex flex-column">
        <div className="col-md-6 ">
          <div className="info email mb-3">
            <p>
              Our objective is to help the community to perform Hajj & thus
              fulfill an obligation of lifetime and enable pilgrims travel to
              Islam's Holiest Shrines in comfort, dignity and in proper frame of
              mind. We are to proud inform you that Hijaz Tours & Travels are
              registered with the Ministry of Minority affairs, Govt. of India &
              Ministry of Hajj, Saudi Arabia and member of various Associations.
              Almost 14 years on and we are still building global bonds of
              brother and sisterhood by providing excellence every step of the
              way for Hajj and Umrah.
            </p>

            <p>
              Our core ethos of khidma (service) underpins everything we do. And
              we guarantee that all of our customers’ needs will be comfortably
              met, their expectations exceeded and their goals before the start
              of the journey, accomplished. We push ourselves to go above and
              beyond what is expected of us, paying attention to the little
              details that are often missed.
            </p>
            <p>
              For example, all of our Hajj pilgrims are given our Hajj
              Essentials Collection, which are travel-friendly and functional
              items, such as an instant cooling towel, pain alleviating cream, a
              Tawaf friendly umbrella, and much more…
            </p>
            <p>
              We also ensure that our pilgrims are accompanied by doctors and
              scholars to tend to every health need and question. These
              facilities are just one of the ways we help to ease the strenuous
              journey to Makkah and Madinah as much as possible.
            </p>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="/public/assets/masjideenabvi.jpg"
            sx={{
              height: 300,
              width: 350,
              objectFit: "fill",
            }}
            variant="square"
            className="shadow"
          />
        </div>
      </div>
      <div>
        <div className="text-center mt-5">
            <h2>Office Images</h2>
        </div>
        <div className="row mb-1 ">
            
          {office.map((img) => {
            return (
              <>
                {" "}
                <div className="">
                  <img src={img.img} style={{objectFit: "fill", height: "400px", width: "500px"}} className="img-thumbnail" />
                </div>{" "}
              </>
            );
          })}
        </div>
      </div>
</>)}
      
    </div>
  );
};

export default About;
