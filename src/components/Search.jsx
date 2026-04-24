import React from "react";
import Vector from "../assets/Vector.svg";

const Search = () => {
  return (
    <div className="container flex items-center justify-center">
      <div className="w-full rounded-2xl relative -mt-14 z-10 bg-[#1f1e1e] py-10 mx-12">
        <h1 className="text-[#C9AC8C] text-[31px] font-normal text-center">
          Qidirish
        </h1>

        <div className="flex items-center gap-3 px-[144px_86px]">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              className="w-full bg-[#2a2c2f] text-[#9ca3af] placeholder-[#6b7280] rounded-2xl px-6 py-4 outline-none border border-transparent focus:border-[#c9a96e]/30 transition-all duration-300"
              style={{
                fontFamily: "'Crimson Text', 'Georgia', serif",
                fontSize: "1rem",
              }}
            />
          </div>

          <button
            className="flex items-center gap-2 bg-[#c9a96e] text-[#1a1c1e] rounded-2xl px-6 py-4"
            style={{
              fontFamily: "'Crimson Text', 'Georgia', serif",
              fontSize: "1rem",
            }}
          >
            <img src={Vector} alt="" />
            Izlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
