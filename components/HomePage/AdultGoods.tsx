import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdultGoods = () => {
  return (
    <div className="bg-[url('/images/adult-product-banner.png')] bg-[length:130%] sm:bg-[length:120%] lg:bg-[length:130%] bg-[right_18%_top_30%] sm:bg-[right_15%_top_25%] lg:bg-[right_18%_top_30%] bg-no-repeat border h-[280px] sm:h-[320px] lg:h-[380px] w-auto rounded-[18px] mx-4 sm:mx-8 lg:mx-14 my-8 sm:my-10 lg:my-14 [transform:scaleX(-1)]">
      <div className="[transform:scaleX(-1)] text-white leading-[150%] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 font-unbounded font-light">
        <p className="text-sm sm:text-base lg:text-[20px]">
          Discover our <b className="font-semibold uppercase">Adult Goods</b>{" "}
          Collection and <br className="hidden sm:block" />
          unlock new levels of intimacy, pleasure, and <br className="hidden sm:block" />
          connection—embrace your desires with <br className="hidden sm:block" />
          confidence and elevate your experience today!
        </p>
        <div className="flex justify-start items-end gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8 lg:mt-10">
          <span>
            <Image
              src={"/images/adult-toy1.jpg"}
              width={80}
              height={80}
              alt="Product image"
              className="rounded-full w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px] object-cover"
            />
          </span>
          <span>
            <Image
              src={"/images/adult-toy2.jpg"}
              width={80}
              height={80}
              alt="Product image"
              className="rounded-full w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px] object-cover"
            />
          </span>
          <span>
            <Image
              src={"/images/adult-toy3.jpg"}
              width={80}
              height={80}
              alt="Product image"
              className="rounded-full w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px] object-cover"
            />
          </span>
          <Link href="/adults-goods" className="group">
            <svg
              width="40"
              height="40"
              viewBox="0 0 67 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] transition-transform duration-300 group-hover:rotate-45"
            >
              <circle cx="33.5" cy="33.5" r="33" stroke="white" />
              <line
                x1="21.3536"
                y1="21.6464"
                x2="45.8819"
                y2="46.1748"
                stroke="white"
              />
              <path d="M45.5283 46.0566L22.8868 46.0566" stroke="white" />
              <path d="M46 46.585L46 24.0001" stroke="white" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdultGoods;