import React from 'react';
import {
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  CardColumns,
} from 'react-bootstrap';
import './InfoCard.css';
const InfoCard = ({ data: { title, info, text } }) => {
  return (
    <Card
      className=' info-card p-2 my-3 '
      border='white'
      text='white'
      style={{ backgroundColor: 'transparent' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        {info&&<Card.Text>{info}</Card.Text>
       }

     
          <footer className='blockquote-footer infoCard-footer'>
            <cite title='Source Title'>
              <strong>{text}</strong>
            </cite>
          </footer>
    
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
