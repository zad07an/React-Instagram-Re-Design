import React from "react";
import user_pic from "../../public/logos/insta04 3.svg";
import share_icon from "../../public/logos/Group 39.svg";
import { sugestionsData } from "../data/SugestionsData";

export default function HomeSidebar() {
  return (
    <div className=" flex flex-col gap-8 sticky top-[150px] z-888">
      <div className=" px-4 h-[140px] flex items-center justify-center gap-8 bg-[#161E29] rounded-[40px]">
        <div className=" w-[80px] h-[80px] rounded-full border-4 border-white overflow-hidden">
          <img className=" w-full" src={user_pic} alt="" />
        </div>
        <div>
          <span className=" text-sm text-white">@justhenrique</span>
          <p className=" text-white text-xl">
            Henrique <span className=" font-bold">Sousa</span>
          </p>
        </div>
        <div>
          <img src={share_icon} alt="" />
        </div>
      </div>
      <div className="bg-[#161E29] py-6 px-6 rounded-[40px]">
        <div className=" w-full text-center pb-6">
          <p className=" text-3xl text-white font-bold">Sugestions</p>
        </div>
        <div className=" flex flex-col items-center gap-4">
          {
            sugestionsData?.map(item => {
              return (
                <div key={item?.id} className=" w-full grid grid-cols-[1fr_2fr_1fr]">
                  <div className=" flex justify-self-start">
                    <img src={item?.pic} alt="" />
                  </div>
                  <div className=" flex flex-col items-start">
                    <span className=" text-white text-[12px]">@{item?.username}</span>
                    <p className=" text-white">{item?.firstName} <span className=" font-bold">{item?.lastName}</span></p>
                  </div>
                  <div className=" flex justify-end items-center">
                    <button className=" border-2 border-white w-[100px] py-1 rounded-[40px] text-white">Follow</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
