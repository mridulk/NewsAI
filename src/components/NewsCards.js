import React from 'react';
import { Carousel, Container, Col, Row, CardColumns } from 'react-bootstrap';
import NewsCard from './NewsCard/NewsCard';
const NewsCards = ({ data }) => {
  return (
    <>
      <Container className="mt-5">
          {data.length>0&&
          <>
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
                <a href={val.url} style={{color:'white',textDecoration:'none'}}><h3>{val.title}</h3></a>
              
              
            </Carousel.Caption>
          </Carousel.Item>
                ))
            }
        
          
        </Carousel>
          
        <CardColumns>
          {data && data.map((val, i) => <NewsCard newsData={val} />)}
        </CardColumns>
        </>
    }
      </Container>
    </>
  );
};

export default NewsCards;
