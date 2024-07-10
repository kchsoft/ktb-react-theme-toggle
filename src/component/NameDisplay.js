import ThemeContext from "../context/ThemeContext"
import {useContext} from 'react'

const NameDisplay = ({name}) =>{
  return <p>환영 합니다! {name}👍</p>
}

export default NameDisplay