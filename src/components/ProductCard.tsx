import { FC } from "react";
import { Product } from "../models/Product";
import RatingStar from "./RatingStar";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PriceSection from "./PriceSection";
import useAuth from "../hooks/useAuth";

const ProductCard: FC<Product> = ({
  id,
  price,
  thumbnail,
  title,
  category,
  rating,
  discountPercentage,
}) => {
  const dispatch = useAppDispatch();
  const { requireAuth } = useAuth();

  const addCart = () => {
    requireAuth(() => {
      dispatch(
        addToCart({
          id,
          price,
          title,
          category,
          rating,
          thumbnail,
          discountPercentage,
        })
      );
      toast.success("item added to cart successfully", {
        duration: 3000,
      });
    });
  };

  return (
    <div className="hover:animate-pulse" data-test="product-card ">
      <div className="relative m-10 flex w-full max-w-xs flex-col drop-shadow-2xl overflow-hidden rounded-2xl  bg-white shadow-md">
          <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" to={{ pathname: `/product/${id}` }}>
            <img src={thumbnail} alt={title} className="object-cover" />
          </Link>

          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        <div className="mt-4 px-5 pb-5">
          
            <h5 className="text-xl tracking-tight text-slate-900"> {title}</h5>
          
          <div className="mt-2 mb-5 flex items-center justify-between">
           
              {discountPercentage && (
                <PriceSection
                  discountPercentage={discountPercentage}
                  price={price}
                />
              )}
           
            <div className="flex items-center">
              <RatingStar rating={rating} />
            </div>
          </div>
          <button
            onClick={addCart}
            className="flex w-full items-center justify-center rounded-md bg-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
