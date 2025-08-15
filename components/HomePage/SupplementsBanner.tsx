import React from "react";

const SupplementsBanner = () => {
  return (
    <div className="grid grid-cols-4 gap-4 m-14 rounded-2xl font-unbounded font-light">
      <div className="bg-[url('/images/couple-goals.jpg')] bg-[length:108%] bg-[right_65%_top_30%] col-span-3 h-90 w-full object-cover rounded-[18px] p-12">
        <p className="text-[20px] tracking-tighter leading-[150%] font-thin mb-4">
          Ready to boost your health and <br />
          power your active lifestyle? <br />
          Discover your perfect <br />
          <b className="font-semibold text-[20px] uppercase">
            supplements
          </b>{" "}
          that can <br />
          elevate your wellness, keep you <br />
          energized, and help you stay <br />
          at your best every day!
        </p>
        <svg
          width="50"
          height="50"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="33.5" cy="33.5" r="33" stroke="black" />
          <line
            x1="21.3536"
            y1="21.6464"
            x2="45.8819"
            y2="46.1748"
            stroke="black"
          />
          <path d="M45.5283 46.0566L22.8868 46.0566" stroke="black" />
          <path d="M46 46.585L46 24.0001" stroke="black" />
        </svg>
      </div>
      <div className="col-span-1 bg-[#CFA3AD] rounded-[18px] flex justify-center items-center text-white">
        <p className="text-medium font-light">
          <b className="font-semibold text-5xl">70%</b>
          <br />
          <br />
          of adults in the U.S.
          <br /> use supplements, with <br />
          <b className="font-semibold">
            many experiencing <br />
            improved nutrient
            <br /> intake and potential <br />
            reductions in <br />
            deficiency-related <br />
            health issues
          </b>
        </p>
      </div>
    </div>
  );
};

export default SupplementsBanner;
