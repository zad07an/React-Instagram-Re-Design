import StoriesBar from "../components/StoriesBar";
import HomeSidebar from "../components/HomeSidebar";
import { feedData } from "../data/feedData";
import HomeFeed from "../components/HomeFeed";

export default function Home() {
  return (
    <section className=" w-full min-h-screen flex justify-center py-[60px] bg-[#12171D]">
      <div className=" w-[80%] grid grid-cols-[2fr_1fr] gap-[100px]">
        <div className=" flex flex-col gap-8">
          <StoriesBar />
          <div className=" flex flex-col gap-8">
            {
              feedData?.map(item => {
                return <HomeFeed key={item?.id} item={item} />
              })
            }
          </div>
        </div>
        <div className=" relative">
          <HomeSidebar />
        </div>
      </div>
    </section>
  );
}
