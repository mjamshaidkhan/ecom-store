import { FC } from "react";
import { Link } from "react-router-dom";

const HeroSection: FC = () => {
  return (
    <div className="bg-[#e3edf6] dark:bg-slate-600 font-lora">
      <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-black dark:text-white">
              Starting At <span className="font-bold">$999</span>
            </p>
            <h2 className="text-black font-bold text-4xl md:text-5xl dark:text-white">
              The best notebook collection 2024
            </h2>
            <h3 className="text-2xl dark:text-white">
              Exclusive offer <span className="text-red-600">-10%</span> off
              this week
            </h3>

            <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1  bg-purple  group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border border-[rgba(31,_41,_55)] group-hover:bg-indigo-50"></span>
              <span className="relative text-black ">
                <Link to="/product/6" data-test="hero-btn">
                  Shop Now 
                </Link> 
              </span>
            </button>
          </div>
        </div>
        <div>
          <img    className="h-70 w-80 object-cover " src="https://www.tailwind-kit.com/images/object/10.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
