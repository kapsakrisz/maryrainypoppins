import Image from 'next/image';
import { Inter } from 'next/font/google';
import axios from 'axios';
import {useState} from 'react';
import {BsSearch} from 'react-icons/bs'








export default function Home() {

  const [city,setCity]=useState('');
  const [weather,setWeather]=useState({});
  const [loading,setLoading]=useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

const fetchWeather = (e)=> {
  e.preventDefault()
  setLoading(true)
  axios.get(url).then((response) => {
    setWeather(response.data)
    console.log(response.data)
  })
  setCity('')
  setLoading(false)
}
  return (
    <main className="">
      <title>MaryRainyPoppins</title>

      <Image src='https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80' layout='fill'/>
    </main>
  )
}
