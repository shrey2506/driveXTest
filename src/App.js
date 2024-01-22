import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NewsItem from './components/NewsItem';


function App() {

  const [articles,setArticles]=useState([]);

  useEffect(()=>{
    const fetchNews= async()=>{
       const response= await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API}`)
       setArticles(response.data.articles)
      
    }

    fetchNews()
  },[])

  return (
    <div className="App">
      <Suspense fallback={ <div>Loading...</div>}>
        <div className='center'>
          {articles.map(article=>(
              <NewsItem article={article} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
