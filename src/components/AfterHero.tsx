import React from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  rating: number;
  batch: string;
  img: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Nursing Sure Success Live Batch",
    description: "Nursing Sure Success Live Batch",
    price: "৳ 2880",
    rating: 5,
    batch: "LIVE Batch-1",
    img: "/c1.png",
  },
  {
    id: 2,
    title: "Primary Success Live Batch-3",
    description: "Primary Success Live Batch-3",
    price: "৳ 3120",
    rating: 5,
    batch: "LIVE Batch-3",
    img: "/c1.png",
  },
  {
    id: 3,
    title: "Bullet Foundation Live Batch-2",
    description: "Bullet Foundation Live Batch-2",
    price: "৳ 4560",
    rating: 5,
    batch: "LIVE Batch-2",
    img: "/c1.png",
  },
  {
    id: 4,
    title: "11-20th Grade Gold Live Batch-16",
    description: "11-20th Grade Gold Live Batch-16",
    price: "৳ 2400",
    rating: 5,
    batch: "LIVE Batch-16",
    img: "/c1.png",
  },
  {
    id: 5,
    title: "19th NTRCA Prel. Special Care Live Batch-2",
    description: "19th NTRCA Prel. Special Care Live Batch-2",
    price: "৳ 2400",
    rating: 5,
    batch: "LIVE Batch-2",
    img: "/c1.png",
  },
  {
    id: 6,
    title: "Primary Advance Diamond Live Batch-8",
    description: "Primary Advance Diamond Live Batch-8",
    price: "৳ 2496",
    rating: 5,
    batch: "LIVE Batch-8",
    img: "/c1.png",
  },
  {
    id: 7,
    title: "51th BCS Dynamic Advance Live Batch-4",
    description: "51th BCS Dynamic Advance Live Batch-4",
    price: "৳ 8160",
    rating: 5,
    batch: "LIVE Batch-4",
    img: "/c1.png",
  },
  {
    id: 8,
    title: "50th BCS Target Live Batch-3",
    description: "50th BCS Target Live Batch-3",
    price: "৳ 4320",
    rating: 5,
    batch: "LIVE Batch-3",
    img: "/c1.png",
  },
];

const categories = [
  "BCS",
  "Primary",
  "NTRCA",
  "Bank",
  "11-20th Grade",
  "9th-10th Grade",
  "Recorded Courses",
];

// Reuse your CourseCard component here...
// (no changes needed in CourseCard)

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 border border-gray-100">
    {/* Image Section */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={course.img}
        alt={course.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
        {course.batch}
      </span>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col justify-between h-56">

      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{course.description}</p>

        {/* Ratings */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${
                i < course.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Price + Button */}
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-indigo-700">
          {course.price}
        </span>
        <button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const CoursePlatform: React.FC = () => {
  return (
    <div className="container mx-auto p-6 mb-[4rem]">
      {/* Heading */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-900 border border-gray-200 rounded-xl px-8 py-4 inline-block shadow-md bg-white/80 backdrop-blur-md">
          🌟 Latest Premium Courses
        </h1>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-3 space-y-2 mb-[4rem] flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-gradient-to-r from-indigo-50 to-violet-50 hover:from-indigo-100 hover:to-violet-100 text-indigo-700 px-5 py-2 rounded-md text-sm font-medium transition shadow-sm"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center mt-[4rem]">
        <button className="px-6 py-2 text-lg font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default CoursePlatform;
