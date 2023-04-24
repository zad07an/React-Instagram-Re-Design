import user_icon from "../../public/logos/user.svg";
import comment from "../../public/logos/comment.svg";
import check from "../../public/logos/check.svg";
import more from "../../public/logos/Group 1.svg";
import pic from "../../public/pics/insta04 2.svg";

export default function ProfileCover() {
  return (
    <div
      className=" w-full h-[400px] flex justify-center"
      style={{
        background: `linear-gradient(rgba(22,30,41, 0.7), rgba(22,30,41, 0.7)), url("https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center / cover`,
      }}
    >
      <div className=" w-[70%] h-full grid grid-cols-[1fr_2fr]">
        <div className=" flex flex-col justify-center items-center gap-6">
          <div className=" w-[204px] h-[204px] border-4 p-2 border-white rounded-full overflow-hidden">
            <img src={pic} className=" w-full" alt="" />
          </div>
          <div className=" flex flex-col items-center gap-1">
            <p className=" text-white text-2xl">
              Henrique <span className=" font-bold">Sousa</span>
            </p>
            <span className=" text-white text-sm font-bold">UI Designer</span>
          </div>
        </div>
        <div className=" w-full pt-20 flex flex-col items-start gap-10">
          <div className=" w-full flex justify-between items-center">
            <div>
              <p className=" text-[28px] font-bold text-white">@justhenrique</p>
            </div>
            <div className=" flex justify-center items-center gap-4">
              <button className=" h-[45px] w-[55px] rounded-xl flex items-center justify-center border-2 border-white">
                <img src={comment} alt="" />
              </button>
              <button className=" h-[45px] w-[55px] rounded-xl flex items-center justify-center border-2 border-white">
                <img src={user_icon} alt="" />
              </button>
              <button className=" h-[45px] w-[55px] rounded-xl flex items-center justify-center border-2 border-white">
                <img src={check} alt="" />
              </button>
              <button className=" h-[45px] w-[55px] rounded-xl flex items-center justify-center">
                <img src={more} alt="" />
              </button>
            </div>
          </div>
          <div className=" w-full grid grid-cols-3">
            <div>
              <p className=" uppercase text-white text-lg font-bold">04 Posts</p>
            </div>
            <div>
              <p className=" uppercase text-white text-lg font-bold">520 Follower</p>
            </div>
            <div>
              <p className=" uppercase text-white text-lg font-bold">1314 Following</p>
            </div>
          </div>
          <div className=" w-[350px] flex flex-col items-start gap-6">
            <p className=" text-white">UI Designer • Designer • Front-end developer Jr Estudante de ADS <a className=" text-blue-400" href="#">@fatecsaojosedoscampos</a></p>
            <a href="#" className=" text-blue-400">linktr.ee/justhenrique</a>
          </div>
        </div>
      </div>
    </div>
  );
}
