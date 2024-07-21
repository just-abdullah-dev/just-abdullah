"use client";

import { reviews } from "@/constants/data";
import React from "react";
import Review from "./Review";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CustomerFeedback() {
  const settings = {
    dots: false,
    autoplay: false,
    speed: 3500,
    autoplaySpeed: 2600,
    cssEase: "ease-in-out",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="grid gap-6 lg:px-12 xl:px-24 mt-6 md:mt-0 w-full overflow-hidden">
      {/* title  */}
      <div className=" text-primary roboto-bold text-4xl lg:text-5xl mb-4">
        Testimonials.
      </div>

      {/* feedbacks  */}
      <div className=" bg-gray-500 bg-opacity-30 rounded-2xl w-full h-full md:h-[61vh] overflow-hidden ">
        <div className=" relative w-full h-full overflow-hidden">
          <Slider {...settings}>
            {reviews.map((item, index) => {
              return <Review data={item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedback;
