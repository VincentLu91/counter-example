import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  console.log("Render App")
  const [theme, setTheme] = useState('red') // this makes red the theme color
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
    Counter
      <Counter initialCount={0}/>
    Counter Hooks
      <CounterHooks initialCount={0}/>
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle</button>
    </ThemeContext.Provider>
  );
}

export default App;