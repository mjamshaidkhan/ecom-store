import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <div className="py-4 bg-white dark:bg-slate-800 top-0 sticky z-10 shadow-lg font-karla   ">
    <div className=" px-6 py-8">
      <hr className="my-10 border-gray-200 dark:border-gray-700" />

      <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-500">
          © Copyright {new Date().getUTCFullYear()}. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
