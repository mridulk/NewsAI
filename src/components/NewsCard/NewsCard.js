import React,{useState,useEffect,createRef} from 'react';
import { Container, Col, Row, Card, ListGroup, CardColumns } from 'react-bootstrap';
import './NewsCard.css';
import classNames from 'classnames';
const NewsCard = ({ newsData ,index , activeArticle}) => {
  const [elRefs,setElRefs]=useState([])
  useEffect(()=>{
    setElRefs((refs)=>Array(20).fill().map((_,j)=>refs[j]||createRef()))
  },[])
  // const scrollToRef=(ref)=>{
  //   window.scroll(0,ref.current.offsetTop-50);
  // }
  useEffect(()=>{
    if(index===activeArticle&&elRefs[activeArticle]){
      // scrollToRef(elRefs[activeArticle])
    }
  },[index,activeArticle,elRefs])
  return (
    <>
    
      <Card ref={elRefs[index]} className={`${classNames(activeArticle===index+1?"bg-dark":"")} p-2 rounded my-3`}  border="white" text="white" style={{backgroundColor:'transparent'}} >
        <Card.Img src={newsData.urlToImage} fluid variant='top' />
        <Card.Body>
          <Card.Title>{newsData.title}</Card.Title>
          <Card.Text>{newsData.description}</Card.Text>

          {newsData.author&&<footer className='blockquote-footer'>
            <cite title='Source Title'>{newsData.author}</cite>
          </footer>}
          <div className="news-card-footer">
            <div>
            <a href={newsData.url} target="_blank">Learn More</a>
            </div>
            <div>
              <h3>{index+1}</h3>
            </div>
          </div>
         
        </Card.Body>
      </Card>
      
    </>
  );
};

export default NewsCard;
