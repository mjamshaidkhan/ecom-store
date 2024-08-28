import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";
import { updateDarkMode } from "../redux/features/homeSlice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(
    (state) => state.cartReducer.cartItems.length
  );
  const username = useAppSelector((state) => state.authReducer.username);
  const isDarkMode = useAppSelector((state) => state.homeReducer.isDarkMode);
  const { requireAuth } = useAuth();

  const showCart = () => {
    requireAuth(() => dispatch(setCartState(true)));
  };

  return (
    <div className="py-4 bg-white dark:bg-slate-800 top-0 sticky z-10 shadow-lg font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-4xl w-28 font-bold dark:text-white"
            data-test="main-logo"
          >
            <img src={window.location.origin + "/logo.png"} />
          </Link>
          {/* <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              type="text"
              placeholder="Search for a product..."
              className="border-2 border-blue-500 px-6 py-2 w-full dark:text-white dark:bg-slate-800"
            />
            <div className="bg-blue-500 text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div> */}
          <div className="flex justify-center gap-2  rounded-xl p-4 font-semibold">
            <a className="p-1 px-4 group relative" href="#">
              <Link
                to="/products"
                className="text-xl font-bold"
                data-test="main-products"
              >
                Products
              </Link>

              <div className="absolute bottom-0 left-0 bg-purple h-0 w-full transition-all duration-500 group-hover:h-[5px]"></div>
            </a>
            <a className="p-1 px-4 group relative" href="#">
              <span className="text-gray-800">
                {" "}
                <Link
                  to="/categories"
                  className="text-xl font-bold"
                  data-test="main-categories"
                >
                  Categories
                </Link>
              </span>
              <div className="absolute bottom-0 left-0 bg-purple h-0 w-full transition-shadow duration-500 group-hover:h-[5px]"></div>
            </a>
          </div>

          <div className="flex gap-4 md:gap-8 items-center dark:text-white">
            <div className="flex items-center gap-2">
              {username !== "" ? (
                <img
                  src="https://robohash.org/Terry.png?set=set4"
                  alt="avatar"
                  className="w-6"
                />
              ) : (
                <FaUser className="text-gray-500 text-2xl dark:text-white" />
              )}
              <div className="text-gray-500 text-2xl">
                {username !== "" ? (
                  <CustomPopup />
                ) : (
                  <span
                    className="cursor-pointer hover:opacity-85 dark:text-white"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    Login
                  </span>
                )}
              </div>
            </div>
            <Link
              to="/checkout"
              className="text-xl font-bold"
              data-test="main-categories"
            >
              <div
                className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
                // onClick={showCart}
                data-test="cart-btn"
              >
                <AiOutlineShoppingCart className="dark:text-white" />
                <div
                  className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                  data-test="cart-item-count"
                >
                  {cartCount}
                </div>
              </div>
            </Link>
            {/* <div
              onClick={() => {
                dispatch(updateDarkMode(!isDarkMode));
                document.body.classList.toggle("dark");
              }}
            >
              {isDarkMode ? (
                <MdOutlineLightMode className="cursor-pointer" size={30} />
              ) : (
                <MdOutlineDarkMode className="cursor-pointer" size={30} />
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
