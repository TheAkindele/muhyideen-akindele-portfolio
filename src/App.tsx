import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import { Contextprovider } from 'utils/Context';
import { Navbar, Projects } from './components';
import { HomePage } from './screens';

function App() {

  const ScrollToTop = (props: any) => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{props.children}</>
  };

  return (
    <div className="App">
       <BrowserRouter>
      <Contextprovider>
        <ScrollToTop>
        <Navbar />
        <main className='app-main' >
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />
          </Routes>
        </main>
        </ScrollToTop>
     </Contextprovider>
     </BrowserRouter>
    </div>
  );
}

export default App;
