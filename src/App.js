import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos'
import SearchPage from './SearchPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
    <BrowserRouter >
      <Header />
      <Routes >
        <Route path='/search/:searchTerm'
          element={<div className='app_page'>
            <SideBar />
            <SearchPage />
          </div>}
         />
         
        <Route path='/' 
          element={<div className='app_page'>
            <SideBar />
            <RecommendedVideos />
          </div>}
      />
      </Routes>
      </BrowserRouter>
     </div>
    
  );
}

export default App;
