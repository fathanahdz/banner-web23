'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [umur, setUmur] = useState(20);
  const handlerUmur = () => setUmur(umur+1);

  const [nama, setNama] = useState('Nurunnisa Fathanah');
  const [namaBaru, setNamaBaru] = useState('');

  const handleUbah = (e)=> setNamaBaru(e.target.value)
  const handlerGantiNama = () => {
    setNama(namaBaru);
    setNamaBaru('')
  }
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
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              {/* nim n bio */}
              <p>D121211002</p>
              <p>IF'21 UH - Berumur {umur} tahun </p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
        <input 
          type="text" 
          placeholder="Masukkan Nama"
          onChange={handleUbah}
        />
        {/* <button onClick={handlerUmur}>
          <p>Halo!</p>
        </button> */}

        {/* cta */}
        <button style={{marginTop:'24px'}}onClick={handlerGantiNama}>
          <p>Ganti Nama</p>
        </button>
        </div>
      </div>
    </div>
  )
}
