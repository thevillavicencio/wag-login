
import Image from 'next/image'

const TopNav = () => {
  return (
    <div className="topnav">
      <Image
        src='/wagboxlogo.png'
        height={40}
        width={36}
        alt="wag hotels logo"
      />
    </div>
  )
}

export default TopNav