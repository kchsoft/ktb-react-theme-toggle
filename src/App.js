import ThemeContext from './context/ThemeContext'
import Page from './component/Page'
import {useState} from 'react'

function App() {
  const [isBlack,setIsBlack] = useState(false)

  return (
    <ThemeContext.Provider value={{isBlack,setIsBlack}}>
      <main style={{backgroundColor : isBlack ? 'black' : 'white'}}>
        <Page/>
      </main>
    </ThemeContext.Provider>

  );
}

export default App;
