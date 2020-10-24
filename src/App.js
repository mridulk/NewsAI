import React,{useEffect,useState} from 'react';
import './App.css';
import wordsToNumbers from 'words-to-numbers';
import {Container,Col,Row,Card,ListGroup} from 'react-bootstrap';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards';
import Header from './components/main/Header'
const App = () => {
  const alanKey='9e3e14d0e33fda0de4340a5a1128f6ae2e956eca572e1d8b807a3e2338fdd0dc/stage';
  const [newsArticles,setNewsArticles]=useState([])
  const [activeArticle,setActiveArticle]=useState(0);
  useEffect(() => {
    alanBtn({
      key:alanKey,
      onCommand:({command,articles,number})=>{
        if(command==='newsHeadlines')
        {
         setNewsArticles(articles)
         setActiveArticle(0);
        }
        else if(command==='highlight'){
          setActiveArticle((prev)=>prev+1);
        }
        else if(command==='open'){
          const parsedNumber=number.length>2?wordsToNumbers(number,{fuzzy:true}):number
          const article=articles[parsedNumber-1];
          if(parsedNumber>20){
            alanBtn().playText('Please Try That Again')
          }else if(article){
            window.open(article.url,'_blank');
            alanBtn().playText('Opening...');
          }
         
        }
      }
    })
  }, [])
  return (
    <>
    <main className="App">
    <Header/>
    {<NewsCards data={newsArticles} activeArticle={activeArticle}/>}
    </main>
    </>
  )
}

export default App



