'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  const [nama, setNama] = useState('Nurunnisa Fathanah');
  const [namaBaru, setNamaBaru] = useState('');

  const handleUbah = (e)=> setNamaBaru(e.target.value)
  const handlerGantiNama = () => {
    if(namaBaru.trim() === ''){
      alert('Kamu belum mengetikkan nama. Cek kembali ya');
      return;
    }

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
              <p>IF'21 - Hasanuddin University </p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
        {/* Input nama baru */}
        <input 
          type="text" 
          placeholder="Ketikkan nama baru"
          onChange={handleUbah}
        />
        {/* cta */}
        <button style={{marginTop:'24px'}}onClick={handlerGantiNama}>
          <p>Ganti Nama</p>
        </button>
        </div>
      </div>
    </div>
  )
}
