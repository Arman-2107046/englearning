
const PromoBanner: React.FC = () => {
  return (
    <div
      className="relative text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      }}
    >
      {/* Glow Effect Background */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl"></div>

      {/* Mobile Phones Section */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2 relative z-10">
        <div className="relative animate-float">
          <img
            src="/phone.png"
            alt="App Screenshots"
            className="w-64 md:w-80 drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-transparent bg-clip-text mb-6 drop-shadow-lg">
          ডাউনলোড করুন Mobile App
        </h2>

        {/* Statistics */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl mb-8 shadow-lg">
          <div className="flex justify-around gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-300">180K+</p>
              <p className="text-gray-300">Learners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">4.7 ⭐</p>
              <p className="text-gray-300">Positive Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-400">180+</p>
              <p className="text-gray-300">Skill-based Courses</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mb-8 text-lg text-gray-200 leading-relaxed">
          ডাউনলোড করুন অ্যাপ, ঘরে বসেই শুরু করুন শেখা 🚀
        </p>

        {/* Download Buttons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#"
            className="transform hover:scale-105 transition duration-300"
          >
            <img src="/play.png" alt="Get it on Google Play" className="h-14" />
          </a>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default PromoBanner;
