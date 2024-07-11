import {createContext,useState} from 'react'

const ThemeContext = createContext(null)

const ThemeProvider = ({children}) =>{
  const [isBlack,setIsBlack] = useState(false)

  return(
    <ThemeContext.Provider value = {{isBlack,setIsBlack}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext,ThemeProvider}