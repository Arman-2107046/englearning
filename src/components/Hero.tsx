import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const styles = `
@keyframes pulseDot {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.7); }
}
.pulse-dot {
  animation: pulseDot 1s infinite ease-in-out;
}
`;

const Hero: React.FC = () => {
  const liveCourses = [
    { img: "/ielts.png", title: "English Basics" },
    { img: "/ielts.png", title: "Business English" },
    { img: "/ielts.png", title: "Academic Writing" },
    { img: "/ielts.png", title: "Conversation Skills" },
    { img: "/ielts.png", title: "Grammar Mastery" },
    { img: "/ielts.png", title: "Pronunciation Practice" },
    { img: "/ielts.png", title: "IELTS Preparation" },
    { img: "/ielts.png", title: "Job Interview English" },
    { img: "/ielts.png", title: "Advanced Vocabulary" },
    { img: "/ielts.png", title: "Professional Emails" },
  ];

  const recordedCourses = [
    { img: "/gre.png", title: "Recorded Course 1" },
    { img: "/gre.png", title: "Recorded Course 2" },
    { img: "/gre.png", title: "Recorded Course 3" },
    { img: "/gre.png", title: "Recorded Course 4" },
    { img: "/gre.png", title: "Recorded Course 5" },
    { img: "/gre.png", title: "Recorded Course 6" },
    { img: "/gre.png", title: "Recorded Course 7" },
    { img: "/gre.png", title: "Recorded Course 8" },
    { img: "/gre.png", title: "Recorded Course 9" },
    { img: "/gre.png", title: "Recorded Course 10" },
  ];

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-[#0f0f1a] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10">
      <style>{styles}</style>

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          তৃপ্তিমতো ইংরেজি শেখার{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Best Online Platform ✨
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 flex-wrap">
          <button className="px-3 sm:px-5 py-2 text-sm sm:text-base bg-[#1a2238] border border-gray-600 rounded-lg hover:border-purple-400 transition-colors">
            Job English
          </button>
          <button className="px-3 sm:px-5 py-2 text-sm sm:text-base bg-[#1a2238] border border-gray-600 rounded-lg hover:border-purple-400 transition-colors">
            Professional English
          </button>
          <button className="px-3 sm:px-5 py-2 text-sm sm:text-base bg-[#1a2238] border border-purple-400 rounded-lg text-purple-300">
            Academic English
          </button>
        </div>
      </div>

      {/* Courses Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16 max-w-7xl mx-auto">
        {/* Live Courses */}
        <div className="bg-[#102447] rounded-2xl py-4 sm:py-6 px-4 sm:px-6 md:px-10 w-full">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <span className="w-3 h-3 bg-red-600 rounded-full pulse-dot"></span>
            <span className="bg-[#1b3760] px-3 py-1 rounded-md text-xs sm:text-sm">
              LIVE Courses
            </span>
          </div>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
            আপনার পছন্দের কোর্সটি বেছে নিন
          </p>

          {/* Live Courses Carousel */}
          <div className="mb-4">
            <Slider {...sliderSettings}>
              {liveCourses.map((course, index) => (
                <div key={index} className="px-2">
                  <div className="bg-[#1b3760] rounded-lg overflow-hidden w-full">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="h-32 sm:h-40 w-full object-cover"
                    />
                    <p className="text-xs sm:text-sm mt-2 text-center p-2">
                      {course.title}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <a
            href="#"
            className="block mt-4 text-green-400 hover:underline text-xs sm:text-sm font-medium text-center lg:text-left"
          >
            View All Live Courses →
          </a>
        </div>

        {/* Recorded Courses */}
        <div className="bg-[#3b2413] rounded-2xl py-4 sm:py-6 px-4 sm:px-6 md:px-10 w-full">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
            <span className="bg-[#5a3220] px-3 py-1 rounded-md text-xs sm:text-sm">
              RECORDED Courses
            </span>
          </div>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg text-center lg:text-left">
            আপনার পছন্দের কোর্সটি বেছে নিন
          </p>

          {/* Recorded Courses Carousel */}
          <div className="mb-4">
            <Slider {...sliderSettings}>
              {recordedCourses.map((course, index) => (
                <div key={index} className="px-2">
                  <div className="bg-[#5a3220] rounded-lg overflow-hidden w-full">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="h-32 sm:h-40 w-full object-cover"
                    />
                    <p className="text-xs sm:text-sm mt-2 text-center p-2">
                      {course.title}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <a
            href="#"
            className="block mt-4 text-green-400 hover:underline text-xs sm:text-sm font-medium text-center lg:text-left"
          >
            View All Recorded Courses →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
