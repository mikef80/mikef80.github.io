import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ProjectCard from "./ProjectCard/ProjectCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <ProjectCard /> */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ProjectCard
              title="Project"
              img="https://via.placeholder.com/400x200"
              text="This is the project description"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Project2"
              img="https://via.placeholder.com/400x200"
              text="This is another project description"
            />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
        Projects
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate("/contact")}>Go To Contact</button>
      </div>
    </div>
  );
};

export default Projects;
