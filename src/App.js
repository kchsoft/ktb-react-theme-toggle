import {ThemeProvider} from './context/ThemeContext'
import Page from './component/Page'

function App() {
  return (
    <ThemeProvider>
      <Page/>
    </ThemeProvider>
  );
}

export default App;
