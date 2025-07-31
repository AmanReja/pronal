// components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Pronal's SEO strategies significantly improved our online visibility. Her approach is data-driven and effective.",
    author: "Digital Marketing Manager",
  },
  {
    quote:
      "He managed multiple live projects during her internship and handled them with great professionalism.",
    author: "Lead Hight Internship Supervisor",
  },
  {
    quote:
      "Strong client handling skills — Pronal was always attentive and responsive to feedback.",
    author: "Client Feedback",
  },
  {
    quote:
      "He is ability to track and analyze performance metrics helped us fine-tune our ad campaigns.",
    author: "Performance Analyst",
  },
  {
    quote:
      "He’s not just good with analytics — her Canva designs are eye-catching and professional.",
    author: "Creative Director",
  },
];

const Slide = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Testimonials</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-gray-100 rounded-xl shadow-md">
                <p className="text-gray-700 italic">“{item.quote}”</p>
                <div className="mt-4 font-semibold text-gray-800">
                  - {item.author}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slide;
