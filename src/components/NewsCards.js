import React from 'react';
import {
  Carousel,
  Container,
  Col,
  Row,
  CardColumns,
  Card,
  ListGroup,
} from 'react-bootstrap';
import NewsCard from './NewsCard/NewsCard';
import infoCards from './utility/infoCards';
import InfoCard from './InfoCard/InfoCard';
import newsIcon from '../alan.png';
const NewsCards = ({ data ,activeArticle}) => {
  
  return (
    <>
      <Container className='mt-5'>
        {data.length == 0 && (
          <>
          <Row className="text-center">
            <Col>
            <img src={newsIcon}  width="200px" className="img-fluid"/>
            </Col>
          </Row>
            <Row>
              {infoCards.map((val, i) => (
                <Col  key={i} xl={3} md={6} sm={12}>
                  <InfoCard data={val} />
                </Col>
              ))}
            </Row>
          </>
        )}
        {data.length > 0 && (
          <>
            <Carousel className='my-3'>
              {data &&
                data.map((val, i) => (
                  <Carousel.Item>
                    <img
                      
                      src={val.urlToImage}
                      width='100%' height="300px" style={{objectFit:'cover'}}
                      alt='First slide'
                    />
                    <Carousel.Caption>
                      <a
                        href={val.url}
                        target="_blank"
                        style={{ color: 'white', textDecoration: 'none' }}>
                        
                        <h3>{val.title}</h3>
                      </a>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>

           <Container>
              {data &&(
                <Row>
                
                {data.map((val, i) => (
                  <Col key={i} sm={12} md={4} lg={4}>
                  <NewsCard activeArticle={activeArticle} newsData={val} index={i} />
                  </Col>))}
                
                </Row>)}
                </Container>
             
          </>
        )}
      </Container>
    </>
  );
};

export default NewsCards;
