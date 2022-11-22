import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ProjectCard from "./ProjectCard/ProjectCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ApiCall from "../../data/ApiCall/ApiCall";


const Projects = () => {
  const [repos, setRepos] = useState([]);

  const handleSetRepos = (newObject) => {
    setRepos([...repos, newObject]);
  }

  useEffect(() => {
    ApiCall(handleSetRepos)
  }, [])

  const navigate = useNavigate();
  
  return (
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
          img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          text="This is the project description"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard
          title="Project2"
          img="https://images.unsplash.com/photo-1668889495576-bbd35db21a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          text="This is another project description"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard
          title="Project3"
          img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          text="This is, again, another project description"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Projects;
