import React,{useEffect,useState} from 'react';
import './App.css';
import {Container,Col,Row,Card,ListGroup} from 'react-bootstrap';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards';
import Header from './components/main/Header'
const App = () => {
  const alanKey='6cecf1f87842655ff7c756ed207fe74d2e956eca572e1d8b807a3e2338fdd0dc/stage';
  const [newsArticles,setNewsArticles]=useState([])
  useEffect(() => {
    alanBtn({
      key:alanKey,
      onCommand:({command,articles})=>{
        if(command==='newsHeadlines')
        {
         setNewsArticles(articles)
        }
      }
    })
  }, [])
  return (
    <>
    <main className="App">
    <Header/>
    {newsArticles&&<NewsCards data={newsArticles}/>}
    </main>
    </>
  )
}

export default App



