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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={ (swiper) => console.log(swiper) }
      
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
      <SwiperSlide>
        <ProjectCard
          title="Project3"
          img="https://via.placeholder.com/400x200"
          text="This is, again, another project description"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Projects;
