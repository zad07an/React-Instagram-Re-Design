import music from "../../public/pics/music.svg"
import code from "../../public/pics/code.svg"

export default function ProfileHighlights() {
  return (
    <div className=' flex items-center justify-center gap-8 py-14'>
      <div className=' w-[100px] h-[100px] flex items-center justify-center border-4 border-white rounded-full overflow-hidden'>
        <img src={music} alt="" />
      </div>
      <div className=' w-[100px] h-[100px] flex items-center justify-center border-4 border-white rounded-full overflow-hidden'>
        <img src={code} alt="" />
      </div>
    </div>
  )
}
