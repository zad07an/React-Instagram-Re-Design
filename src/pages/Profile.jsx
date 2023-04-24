import ProfileCover from '../components/ProfileCover'
import ProfileHighlights from '../components/ProfileHighlights'
import ProfileFeed from '../components/ProfileFeed'

export default function Profile() {
  return (
    <div className=' bg-[#11161C]'>
      <ProfileCover/>
      <ProfileHighlights/>
      <ProfileFeed/>
    </div>
  )
}
