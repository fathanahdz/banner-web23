'use client'

import '@styles/diary.css'
import { useEffect, useState} from 'react'
import axios from 'axios'



export default function Diary() {

    const [judul, setJudul] = useState([])
    const [isi_diary, setIsi_diary] = useState([])  


    const endpointAPI = 'https://6555c14084b36e3a431e403b.mockapi.io/diary'
    // async function getAPI () {
    //     try{
    //         const res = await fetch(endpointAPI)
    //         const diary = await res.json()
    //         console.log(diary)
    //     }
    //     catch(error) {
    //         console.log("error fetching data: ${error}")
    //     }
    // }

    async function getAPI () {
        try{
            const res = await axios.get(endpointAPI)
            const data = res.data
            const judul = data.map((item)=>(item.judul))
            setJudul(judul)

            const isi_diary = data.map((item)=>(item.isi))
            setIsi_diary(isi_diary)
            console.log(judul, isi_diary)
        }
        catch(error) {
            console.log("error fetching data: ${error}")
        }
    }
    
    useEffect(() => {
        getAPI();
    }, [])

    return(
        <>
            {judul.length>0 ? (
                <ul>
                    {judul.map((item, idx)=>(
                        <li>
                            <div className='diary-container'>
                                <h1>{judul[idx]}</h1>
                                <p className='p-diary'>{isi_diary[idx]}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ):
            (
                "API not loading"
            )}      
        </>
    )
}