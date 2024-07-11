import NameField from "./NameField";
import Date from "./Date";
import ThemeBtn from "./ThemeBtn";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Page = () => {
  const {isBlack} = useContext(ThemeContext)
  return(
    <div className="content" style={{backgroundColor : isBlack ? 'black' : 'white'}}>
      <NameField/>
      <Date/>
      <ThemeBtn/>
    </div>
  )
}

export default Page