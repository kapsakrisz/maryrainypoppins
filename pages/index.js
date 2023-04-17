import Image from 'next/image';
import { Inter } from 'next/font/google';
import axios from 'axios';
import {useState} from 'react';
import {BsSearch} from 'react-icons/bs'








export default function Home() {

  const [city,setCity]=useState('');
  const [weather,setWeather]=useState({});
  const [loading,setLoading]=useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`


  return (
    <main className="">
      <title>MaryRainyPoppins</title>

      <h1>hello00000</h1>
    </main>
  )
}
