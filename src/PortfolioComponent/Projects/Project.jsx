import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
// import project4 from "../assets/images/project-4.png";
import "swiper/css";
import "swiper/css/pagination";
// import {  Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1 ,
      name: "Movie App",
      github_link: "https://github.com/LollyTim/movierbox-hnxproject2",
      live_link: "https://hngxstage2moviebox.netlify.app",
    },
    {
      img:  project2,
      name: " Megacon Landing Page",
      github_link: "https://github.com/LollyTim/megacon",
      live_link: "https://megaconduplicate.netlify.app",
    },
    {
      img: project3,
      name: "Jolly  tech Web Site",
      github_link: "https://github.com",
      live_link: "https://jollytec.netlify.app/",
    },
    // {
    //   img:  project4,
    //   name: "Friend's Portfolio",
    //   github_link:
    //     "https://github.com",
    //   live_link: "https://johntec.netlify.app",
    // },
  ];
  return (
    <section id="projects" className="py-34 text-gray-800">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#00df9a]">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex w-6xl gap-6 px-5 mx-auto items-center ">
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            // pagination={{
            //   clickable: false,
            // }}
            // modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-gray-800  rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4 text-white">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"rel="noreferrer"
                      className="text-[#00df9a] bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank" rel="noreferrer"
                      className="text-[#00df9a] bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
      </div>
    </section>
  );
};

export default Project;
