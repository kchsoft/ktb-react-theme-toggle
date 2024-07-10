import {useState,useEffect,useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Date(){
  const {isBlack,setIsBlack} = useContext(ThemeContext)
  const [date,setDate] = useState("")
  const [curDate,setCurDate] = useState({
    "year" : 0,
    "month" : 0,
    "day" : 0,
    "hour" : 0,
    "minute" : 0,
  })

  const getDate = async () => {
    const apiDate = await (
      await fetch("https://worldtimeapi.org/api/timezone/Asia/Seoul")
    ).json()
    setDate(apiDate["datetime"])
  }

  useEffect(() => {
    getDate()
  },[])

  useEffect(()=>{
    if(date !== ''){
      setCurDate({
        'year' : Number(date.slice(0,4)),
        'month' : Number(date.slice(5,7)),
        'day': Number(date.slice(8,10)),
        'hour': Number(date.slice(11,13)),
        'minute': Number(date.slice(14,16))
      })
    }
  },[date])

  return (
    <section style ={{
      backgroundColor: isBlack ? 'black' : 'white',
      color : isBlack ? 'white' : 'black'
    }}>
      <p> 현재 날짜 및 시간</p>
      <p> 날짜 : {curDate['year']}년 {curDate['month']}월 {curDate['day']}일 </p>
      <p> 시간 : {(Number(curDate['hour']) > 13 ? "오후" : "오전")}   
        {curDate['hour'] > 12 ? curDate['hour']-12 : curDate['hour']}시 
        {curDate['minute']}분 </p>
    </section>
  )
}

export default Date