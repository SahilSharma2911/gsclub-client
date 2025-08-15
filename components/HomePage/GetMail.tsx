"use client";
import React, { useState } from "react";

const GetMail = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted email:", userEmail);
    // You can send it to an API or store it somewhere here
  };
  return (
    <div className="font-unbounded mx-14 text-white px-12 py-6 leading-[140%] bg-linear-to-r from from-[#232BEC] to to-[#98029B] w-auto h-auto flex justify-between items-center rounded-[20px]">
      <div className=" text-xl">
        <h2 className="font-medium">
          Want to stay ahead of the latest updates?
        </h2>
        <p className="font-light">Subscribe to our newsletter today and</p>
        <p className="font-light">be the first to know what's new!</p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="font-light flex gap-4">
          <span>
            <input
              type="text"
              placeholder="Write you e-mail "
              className="text-lg font-extralight pl-4 h-8 bg-white rounded-full  text-[#090808]"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </span>
          <button
            type="submit"
            className="bg-[#090808] text-center h-8 text-white font-semibold px-14 text-xl  rounded-full "
          >
            I'm in
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetMail;
