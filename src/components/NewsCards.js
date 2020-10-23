import React from 'react';
import { Carousel, Container, Col, Row, CardColumns } from 'react-bootstrap';
import NewsCard from './NewsCard/NewsCard';
const NewsCards = ({ data }) => {
  return (
    <>
      <Container>
        <Carousel className="my-3">
            {
                data&&data.map((val,i)=>(
                    <Carousel.Item>
            <img
              className='d-block w-100 img-fluid'
              src={val.urlToImage}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
                ))
            }
        
          
        </Carousel>
        <CardColumns>
          {data && data.map((val, i) => <NewsCard newsData={val} />)}
        </CardColumns>
      </Container>
    </>
  );
};

export default NewsCards;
