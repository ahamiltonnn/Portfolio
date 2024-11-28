"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./ProjectCarousel.module.css";

const projects = [
  {
    id: 1,
    title: "Pawsitive Vibes",
    description:
      "A business website for a dog training client with booking functionality.",
    imageUrl: "/pawsitive-vibes-logo.png",
    projectLink: "/pawsitive-vibes",
  },
  {
    id: 2,
    title: "CarCar",
    description: "A website to manage your car dealership.",
    imageUrl: "/carcar.png",
    projectLink: "/CarCar",
  },
  {
    id: 3,
    title: "Wardrobify",
    description:
      "The only thing you'll need to organize all your shoes and hats.",
    imageUrl: "/wardobifyForm.png",
    projectLink: "/wardrobify",
  },
];

const ProjectCarousel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseonHover: true,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className={styles.carouselItem}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.projectImage}
                />
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a href={project.projectLink} className={styles.viewButton}>
                View Project →
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
