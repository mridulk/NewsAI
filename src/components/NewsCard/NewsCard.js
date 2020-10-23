import React from 'react';
import { Container, Col, Row, Card, ListGroup, CardColumns } from 'react-bootstrap';
const NewsCard = ({ newsData }) => {
  return (
    <>
  
      <Card className=" p-2 rounded my-3"  border="white" text="white" style={{backgroundColor:'transparent'}} >
        <Card.Img src={newsData.urlToImage} fluid variant='top' />
        <Card.Body>
          <Card.Title>{newsData.title}</Card.Title>
          <Card.Text>{newsData.description}</Card.Text>

          {newsData.author&&<footer className='blockquote-footer'>
            <cite title='Source Title'>{newsData.author}</cite>
          </footer>}
          <a href={newsData.url}>Source</a>
        </Card.Body>
      </Card>
      
    </>
  );
};

export default NewsCard;
