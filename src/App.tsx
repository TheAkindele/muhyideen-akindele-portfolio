import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Contextprovider } from 'utils/Context';
import { Navbar, Projects } from './components';
import { HomePage, ProjectsPage } from './screens';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
      <Contextprovider>
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
     </Contextprovider>
     </BrowserRouter>
    </div>
  );
}

export default App;
