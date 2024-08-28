import { FC } from "react";
import { FeatureItem } from "../models/FeatureItem";

const FeatureCard: FC<FeatureItem> = ({ icon, desc, title }) => (
  <div className="flex   shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 gap-2 bg-purple border-[rgba(75,85,99)] rounded-2xl  text-[white]  dark:bg-slate-600 px-4 py-6 font-karla">
    {icon}
    <div>
      <h2 className="font-medium text-xl dark:text-white">{title}</h2>
      <p className="text-white-600 dark:text-white">{desc}</p>
    </div>
  </div>
);

export default FeatureCard;
