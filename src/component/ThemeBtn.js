import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeBtn = () =>{

  const {isBlack, setIsBlack} = useContext(ThemeContext)

  const changeTheme = () => {
    setIsBlack(!isBlack)
  }

  return (
    <button onClick={changeTheme} 
    style={{
      backgroundColor: isBlack ? 'black' : 'white',
      color : isBlack ? 'white' : 'black'
    }}>Theme Change</button>
  )
}

export default ThemeBtn