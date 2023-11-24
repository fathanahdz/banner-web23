"use client";

import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  //GET
  const [judul, setJudul] = useState([]);
  const [isi_diary, setIsi_diary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const endpointAPI = "https://6555c14084b36e3a431e403b.mockapi.io/diary";

  //POST
  const [tulis, setTulis] = useState("");
  const [diary, setDiary] = useState([]);

  function handlerInputDiary(event) {
    event.preventDefault();
    setTulis(event.target.value);
  }
  function handlerSubmit(event) {
    setDiary(tulis);
  }

  useEffect(() => {
    console.log("Isi Diary: " + diary);
  }, [diary]);

  function handlerKeyEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handlerSubmit();
    }
  }

  async function postDiary() {
    const updateDiary = [...isLoading, tulis];
    setTulis("");
  }
  async function getDiary() {
    try {
      const res = await axios.get(endpointAPI);
      const data = res.data;

      //ambil judul
      const judul = data.map((item) => item.judul);
      setJudul(judul);

      //ambil isi
      const isi_diary = data.map((item) => item.isi);
      setIsi_diary(isi_diary);
      setIsLoading(false);
    } catch (error) {
      console.log("error fetching data: ${error}");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <>
    <div className="cta-banner-wrapper">
        {/* Input nama baru */}
        <input
        type="text"
        placeholder="Ketik catatan"
        value={tulis}
        onChange={handlerInputDiary}
        onKeyDown={handlerKeyEnter}
        />
        {/* cta */}
        <button
        className={`cta-button ${
            tulis.trim() === "" ? "cta-button-disabled" : "cta-button-enabled"
        }`}
        style={{ marginTop: "24px" }}
        onClick={tulis.trim() !== "" ? handlerSubmit : null}
        disabled={tulis.trim() === ""}
        >
        <p>{tulis.trim() === "" ? "Disabled" : "Submit"}</p>
        </button>
    </div>
      <div>
        {judul.length > 0 ? (
          <ul>
            {judul.map((item, idx) => (
              <Link href={`/diary/${item}/${isi_diary[idx]}`}>
                <li key={idx}>
                  <div className="diary-container">
                    <h1>{item}</h1>
                    <p className="p-diary">{isi_diary[idx]}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          "API is loading"
        )}
      </div>
    </>
  );
}
