import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <div className="App">            
      <ResponsiveAppBar/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/personal-website' element={<Main />} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
