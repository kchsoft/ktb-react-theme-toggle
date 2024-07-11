import {useState,useRef,useContext}from 'react'
import NameDisplay from './NameDisplay'
import ThemeContext from '../context/ThemeContext'

function NameField(){
  // const data = useContext(ThemeContext) // object -> { isBlack, setIsBlack }
  const {isBlack} = useContext(ThemeContext) 
  const [name,setName] = useState("Guest")
  const nameRef = useRef(null) // or use onChange

  const showName = () =>{
    setName(nameRef.current.value)
  }

  const applyEnter = (event) => {
    if(event.code === "Enter"){
      showName()
    }
  }

  return (
    <div style={{
      backgroundColor : isBlack ? 'black' : 'white',
      color : isBlack ? 'white' : 'black'
    }}>
      <input type="text" onKeyDown={applyEnter} ref={nameRef} placeholder="Write Your Name"/>
      <button onClick={showName} type="button"> 제출 </button>
      <NameDisplay name={name}/>
    </div>
  )
}

export default NameField