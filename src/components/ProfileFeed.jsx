import { AiOutlineHeart, BsSend } from "react-icons/all";

export default function ProfileFeed() {
  return (
    <div className=" w-full pb-8 flex justify-center">
      <div className=" w-[80%] grid grid-cols-3 gap-10">
        <div className=" h-[420px] overflow-hidden rounded-[20px] relative">
          <img
            src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=" w-full h-full object-cover"
            alt=""
          />
          <div className=" absolute top-4 right-4 flex items-center flex-col gap-3">
            <div className=" flex items-center justify-center text-white text-4xl">
              <AiOutlineHeart />
            </div>
            <div className=" flex items-center justify-center text-white text-4xl">
              <BsSend />
            </div>
          </div>
        </div>
        <div className=" h-[420px] overflow-hidden rounded-[20px] relative">
          <img
            src="https://images.pexels.com/photos/594660/pexels-photo-594660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=" w-full h-full object-cover"
            alt=""
          />
          <div className=" absolute top-4 right-4 flex items-center flex-col gap-3">
            <div className=" flex items-center justify-center text-white text-4xl">
              <AiOutlineHeart />
            </div>
            <div className=" flex items-center justify-center text-white text-4xl">
              <BsSend />
            </div>
          </div>
        </div>
        <div className=" h-[420px] overflow-hidden rounded-[20px] relative">
          <img
            src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=" w-full h-full object-cover"
            alt=""
          />
          <div className=" absolute top-4 right-4 flex items-center flex-col gap-3">
            <div className=" flex items-center justify-center text-white text-4xl">
              <AiOutlineHeart />
            </div>
            <div className=" flex items-center justify-center text-white text-4xl">
              <BsSend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
