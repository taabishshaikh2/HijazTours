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
            src="/assets/kabaimg.webp"
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
            Embark on a journey with Hijaz Tours and Travels, the trailblazers in luxury travel to the Holy Land. We take pride in being among the first to truly understand the pilgrim's experience, having walked that sacred mile ourselves. With the support of our esteemed patrons, we have grown into a formidable force over 24 years, specializing in the Hajj and Umrah vertical.


            </p>
            <p>
            Our success story traces back to the humble beginnings of Haji Jameel Ahmed Ghori in 2001. From these modest roots, we have evolved into a professionally organized, accredited, and acclaimed organization with a nationwide presence.


            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 row">
        <div className="col-md-6 ">
          <div className="info email mb-3">
            <p>
              <h4 className="text-center">A Commitment to Your Comfort</h4>
            At the heart of our journey is an unwavering commitment to one focal point – "Your Comfort." We consider it our duty to assist the community in fulfilling the lifetime obligation of Hajj, ensuring pilgrims can travel to Islam's Holiest Shrines in comfort, dignity, and the right frame of mind. Proudly registered with the Ministry of Minority Affairs, Govt. of India, and the Ministry of Hajj, Saudi Arabia, we are also active members of various associations.

            </p>

            <p> 
              <h4 className="text-center">Global Bonds of Brotherhood and Sisterhood</h4>
            Nearly a quarter-century later, we continue to build global bonds of brotherhood and sisterhood. Our core ethos of khidma (service) underpins everything we do, and we guarantee that our customers' needs will be not only met but comfortably exceeded. Our commitment extends beyond expectations, with meticulous attention to the often-overlooked details.


            </p>
            <p>
              <h4 className="text-center">Exceeding Expectations: The Hijaz Advantage</h4>
            For instance, our exclusive Hajj Essentials Collection is provided to all our pilgrims, featuring travel-friendly and functional items such as instant cooling towels, pain-alleviating creams, Tawaf-friendly umbrellas, and more. We go above and beyond, ensuring that every aspect of the journey is crafted with precision.


            </p>
            <p>
              <h4 className="text-center">Comprehensive Support: A Journey Made Easier</h4>
            To further ease the strenuous journey to Makkah and Madinah, we accompany our pilgrims with qualified doctors and scholars. These dedicated professionals address every health need and spiritual question, providing comprehensive support throughout the pilgrimage
            </p>
             <p>
In choosing Hijaz Tours & Travels, you're not just selecting a travel operator; you're embarking on a sacred journey where every step is taken with your comfort in mind. Join us in experiencing the pinnacle of luxury pilgrimages, where excellence is delivered at every step of the way.</p>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="/assets/masjideenabvi.jpg"
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
            src="/assets/kabaimg.webp"
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
            Embark on a journey with Hijaz Tours and Travels, the trailblazers in luxury travel to the Holy Land. We take pride in being among the first to truly understand the pilgrim's experience, having walked that sacred mile ourselves. With the support of our esteemed patrons, we have grown into a formidable force over 24 years, specializing in the Hajj and Umrah vertical.


            </p>
            <p>
            Our success story traces back to the humble beginnings of Haji Jameel Ahmed Ghori in 2001. From these modest roots, we have evolved into a professionally organized, accredited, and acclaimed organization with a nationwide presence.


            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 row d-flex flex-column">
        <div className="col-md-6 ">
          <div className="info email mb-3">
          <p>
              <h4 className="text-center">A Commitment to Your Comfort</h4>
            At the heart of our journey is an unwavering commitment to one focal point – "Your Comfort." We consider it our duty to assist the community in fulfilling the lifetime obligation of Hajj, ensuring pilgrims can travel to Islam's Holiest Shrines in comfort, dignity, and the right frame of mind. Proudly registered with the Ministry of Minority Affairs, Govt. of India, and the Ministry of Hajj, Saudi Arabia, we are also active members of various associations.

            </p>

            <p> 
              <h4 className="text-center">Global Bonds of Brotherhood and Sisterhood</h4>
            Nearly a quarter-century later, we continue to build global bonds of brotherhood and sisterhood. Our core ethos of khidma (service) underpins everything we do, and we guarantee that our customers' needs will be not only met but comfortably exceeded. Our commitment extends beyond expectations, with meticulous attention to the often-overlooked details.


            </p>
            <p>
              <h4 className="text-center">Exceeding Expectations: The Hijaz Advantage</h4>
            For instance, our exclusive Hajj Essentials Collection is provided to all our pilgrims, featuring travel-friendly and functional items such as instant cooling towels, pain-alleviating creams, Tawaf-friendly umbrellas, and more. We go above and beyond, ensuring that every aspect of the journey is crafted with precision.


            </p>
            <p>
              <h4 className="text-center">Comprehensive Support: A Journey Made Easier</h4>
            To further ease the strenuous journey to Makkah and Madinah, we accompany our pilgrims with qualified doctors and scholars. These dedicated professionals address every health need and spiritual question, providing comprehensive support throughout the pilgrimage
            </p>
             <p>
In choosing Hijaz Tours & Travels, you're not just selecting a travel operator; you're embarking on a sacred journey where every step is taken with your comfort in mind. Join us in experiencing the pinnacle of luxury pilgrimages, where excellence is delivered at every step of the way.</p>
          
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="/assets/masjideenabvi.jpg"
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
