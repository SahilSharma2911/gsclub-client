import Image from "next/image";
import React from "react";

const AdultGoods = () => {
  return (
    <div className="bg-[url('/images/adult-product-banner.png')] bg-[length:130%] bg-[right_18%_top_30%] bg-no-repeat border  h-[380px] w-auto rounded-[18px] m-14 [transform:scaleX(-1)]">
      <div className="[transform:scaleX(-1)] text-white leading-[150%] px-8 py-12 font-unbounded font-light">
        <p className=" text-[20px]">
          Discover our <b className="font-semibold uppercase">Adult Goods</b>{" "}
          Collection and <br />
          unlock new levels of intimacy, pleasure, and <br />
          connection—embrace your desires with <br />
          confidence and elevate your experience today!
        </p>
        <div className="flex justify-start items-end  gap-4 mt-10">
          <span>
            <Image
              src={"/images/adult-toy1.jpg"}
              width={130}
              height={130}
              alt="Product image"
              className="rounded-full"
            />
          </span>
          <span>
            <Image
              src={"/images/adult-toy2.jpg"}
              width={130}
              height={130}
              alt="Product image"
              className="rounded-full"
            />
          </span>
          <span>
            <Image
              src={"/images/adult-toy3.jpg"}
              width={130}
              height={130}
              alt="Product image"
              className="rounded-full"
            />
          </span>
          <span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 67 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdultGoods;
