import more_icon from "../../public/logos/Group 38.svg";
import { AiOutlineHeart, FiSend, BsChat, FiBookmark } from "react-icons/all";

export default function HomeFeed({item}) {
  return (
    <div className=" rounded-[40px] overflow-hidden">
      <header className=" w-full flex justify-between items-center py-6 px-8 bg-[#161E29]">
        <div className=" flex items-center gap-4">
          <div className=" w-[60px] h-[60px] border-4 border-white rounded-full overflow-hidden">
            <img src={item?.pic} alt=""  />
          </div>
          <div className=" flex flex-col">
            <span className=" text-white text-sm">@{item?.username}</span>
            <p className=" text-white text-xl">{item?.firstName} <span className=" font-bold">{item?.lastName}</span></p>
          </div>
        </div>
        <div>
          <div>
            <img src={more_icon} alt="" />
          </div>
        </div>
      </header>
      <div className=" w-full h-[520px]">
        <img src={item?.post} className=" w-full h-full object-cover" alt="" />
      </div>
      <div className=" w-full flex justify-between items-center py-6 px-8 bg-[#161E29]">
        <div className=" flex gap-8">
          <div className=" text-3xl text-white"><AiOutlineHeart/></div>
          <div className=" text-3xl text-white"><FiSend/></div>
          <div className=" text-3xl text-white"><BsChat/></div>
        </div>
        <div>
          <div className=" text-3xl text-white"><FiBookmark/></div>
        </div>
      </div>
    </div>
  );
}
