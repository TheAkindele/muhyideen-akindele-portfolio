import React, { useContext } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Contextprovider } from 'utils/Context';
import { Button, Navbar } from './components';
import { About, LandingPage } from './screens';

function App() {
//   const [themeState, setThemeState] = React.useState(false);
//     const toggleTheme =  () => setThemeState(!themeState)

//   // first we check if a theme is set so we can persist the theme even when refreshed
//   React.useEffect(() => {
//     const getTheme = localStorage.getItem('Theme');
//     // console.log("theme==", getTheme)
//     if (getTheme === 'dark') setThemeState(true);
//   }, [])

// React.useEffect(() => {
//     // setThemeState(!themeState);
//     if (themeState) {
//         localStorage.setItem('Theme', 'dark');
//         document.body.classList.add('dark-mode');
//     } 
//     else {
//         localStorage.setItem('Theme', 'light');
//         document.body.classList.remove('dark-mode');
//     }
// }, [themeState])


  return (
    <div className="App">
       <BrowserRouter>
      <Contextprovider>
        <Navbar />
        <main className='app-main' >
          <LandingPage />
          <About />
          <div id="project"></div>
          <div id="contact"></div>
            {/* <Button text="My Button" onClick={() => alert("button clicked ooo")} /> */}
        </main>
     </Contextprovider>
     </BrowserRouter>
    </div>
  );
}

export default App;
