"use client";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";
import Image from "next/image";
import { useRef } from "react";

const Page = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollLeft -= 300;
      } else {
        scrollRef.current.scrollLeft += 300;
      }
    }
  };
  return (
    <div className="app__gallery flex__center section__padding">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images-container" ref={scrollRef}>
          {[
            images.gallery03,
            images.gallery02,
            images.gallery01,
            images.gallery04,
          ].map((img, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery-images-${index + 1}`}
            >
              <Image src={img} alt="gallery_image" className="Images" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}

            {/* Left and right arrows */}
          <div className="app__gallery-icons">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
