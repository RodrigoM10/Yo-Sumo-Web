import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import './slider.scss'
import ButtonYoSumo from '../button/ButtonYoSumo'


function CarouselProyects(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    const {proyects} = props;

  return (
    <div>
      {
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {proyects.map((proyect)=>{
          return (
            <Carousel.Item>
              <Card style={{ width: '40rem' }}>
                  <Card.Img variant="top" src={proyect.imagen} />
                  <Card.Body>
                    <Card.Title>{proyect.name}</Card.Title>
                    <Card.Text>
                      {proyect.description}
                    </Card.Text>
                    <ButtonYoSumo path='/firma' placeholder="Sumate" />
                  </Card.Body>
                </Card>
          </Carousel.Item>)
        })}
    </Carousel>
      }
      
  </div>
);

}

export default CarouselProyects;