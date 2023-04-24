import { storiesData } from "../data/StoriesData";

export default function StoriesBar() {
  return (
    <div className=" w-full h-[140px] px-6 rounded-[40px] grid grid-cols-7 place-items-center bg-[#161E29]">
      {storiesData?.map((item) => {
        return (
          <div key={item?.id} className=" flex items-center flex-col gap-2">
            <div className=" border-4 border-white rounded-full overflow-hidden">
              <img src={item?.pic} alt="" />
            </div>
            <div>
              <p className=" text-white">{item?.username}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
