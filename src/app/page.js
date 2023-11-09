import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <div className='body'>
      <div className="banner-container">
        {/* kartunya */}
        <div className="header-banner-wrapper">
        {/* foto n nama */}
          <div className="profile-header-banner">
            {/* foto profil */}
            <Image
              src="/assets/profile.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* nama n info */}
            <h1>Nurunnisa Fathanah</h1>
            <div className="bio-nim-header-banner">
              {/* nim n bio */}
              <p>D121211002</p>
              <p>IF'21 UH</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
        {/* cta */}
        <button>
          <p>Halo!</p>
        </button>
        </div>
      </div>
    </div>
  )
}
