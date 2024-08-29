import { FC } from "react";
import { FeatureItem } from "../models/FeatureItem";

const FeatureCard: FC<FeatureItem> = ({ icon, desc, title }) => (
  <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
    <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1  bg-purple  group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full bg-white border border-[rgba(31,_41,_55)] group-hover:bg-indigo-50"></span>
    <span className="relative text-eColor ">
      {icon}
      <div>
        <h2 className="font-medium text-xl dark:text-white">{title}</h2>
        <p className="text-white-600 dark:text-white">{desc}</p>
      </div>
    </span>
  </button>
  // <div className="flex   shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 gap-2 bg-purple border-[rgba(75,85,99)] rounded-2xl  text-eColor  dark:bg-slate-600 px-4 py-6 font-karla">
  //   {icon}
  //   <div>
  //     <h2 className="font-medium text-xl dark:text-white">{title}</h2>
  //     <p className="text-white-600 dark:text-white">{desc}</p>
  //   </div>
  // </div>
);

export default FeatureCard;
