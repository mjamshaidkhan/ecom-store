import { FC } from "react";
import { Link } from "react-router-dom";

const Banner: FC = () => (
  // <div className="container mt-8 mx-auto px-4 md:flex font-lora drop-shadow-2xl">
  //   <img src="/banner.jpg" alt="banner" className="md:w-1/2" />
  //   <div className="bg-[#e3edf6] dark:bg-slate-600 dark:text-white md:w-1/2 flex flex-col items-center text-center justify-center p-4">
  //     <h1 className="text-4xl font-bold mb-1">Don't miss the offer</h1>
  //     <h2 className="text-3xl font-semibold mb-4">Grab it now</h2>

  //     <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
  //       <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1  bg-[rgba(75,85,99)]  group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
  //       <span className="absolute inset-0 w-full h-full bg-white border border-[rgba(31,_41,_55)] group-hover:bg-indigo-50"></span>
  //       <span className="relative text-black ">
  //         <Link
  //           to="/product/4"

  //           data-test="banner-btn"
  //         >
  //           Shop Now
  //         </Link>
  //       </span>
  //     </button>
  //   </div>
  // </div>

  <div className="py-5 bg-neutral-100 lg:py-10 container mt-8 mx-auto px-4 md:flex font-lora drop-shadow-2xl">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
      <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold md:text-7xl text-orange-600">
          25% OFF
        </p>
        <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
        <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
        <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1  bg-purple  group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-[rgba(31,_41,_55)] group-hover:bg-indigo-50"></span>
          <span className="relative text-black ">
            <Link to="/product/4" data-test="banner-btn">
              Shop Now 
            </Link>
          </span>
        </button>
      </div>
      <div className="order-1 lg:order-2">
        <img
          className="h-80 w-80 object-cover lg:w-[500px] lg:h-[600px]"
          src="https://www.tailwind-kit.com/images/object/10.png"
          alt=""
        />
      </div>
    </div>
  </div>
);

export default Banner;
