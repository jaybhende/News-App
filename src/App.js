import React, { useState } from 'react'
import './index.css';
import Navbar from './Component/Navbar'
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'
import {
 BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



const App = ()=> {
 
  
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [country, setCountry] = useState("in")
 
  const[progress,setProgress] = useState(0)
  
  const handleCountry = (e)=>{
    setCountry(e.target.value)
  }
  
  console.log(country)
    return (
      <div>
        <Router basename='/News-App'>
        <Navbar handleCountry={handleCountry}/>
        <LoadingBar
                color='#f11946'
                progress={progress}
                height={3}
                
                />
          
          <Routes>
            <Route path='/News-App'element={<News setProgress={setProgress} apiKey={apiKey} key="general"  pageSize={6} country={country} category='general' />} />
            <Route path='/Business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country={country} category='business' />} />
            <Route path='/Entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country={country} category='entertainment' />} />
            <Route path='/Health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country={country} category='health' />} />
            <Route path='/Science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country={country} category='science' />} />
            <Route path='/Sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country={country} category='sports' />} />
            <Route path='/Technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6}  country={country} category='technology' />} />
            <Route path='/General' element={<News setProgress={setProgress} apiKey={apiKey} key="general}" pageSize={6}  country={country} category='general' />} />
        
          </Routes>
          </Router>
        
      </div>
    )
  
}

export default App;


