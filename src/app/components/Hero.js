import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/HeroImage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex gap-5 flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] text-white drop-shadow-xl mix-blend-difference">
        
            Define <br /> Your Base
     
        </h1>

        <p className="text-gray-200 flex justify-center gap-2 text-lg drop-shadow-md">
          <span className="text-green-400 text-xl">✦</span>
          Timeless essentials designed to adapt, layer, and last.
        </p>

        <button className="cursor-pointer px-8 py-3 bg-white text-gray-950 hover:scale-95 transition-all duration-300 font-medium">
          Shop Now
        </button>
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
}
