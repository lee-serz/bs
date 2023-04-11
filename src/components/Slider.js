import React from 'react';
import {Carousel, CarouselItem } from 'react-bootstrap';
import kostya from '../images/kostya.jpg'
import nikita from '../images/nikita.jpg'
import sanya from '../images/sanya.jpg'
import serega from '../images/serega.jpg'
import sveta from '../images/sveta.jpg'
import vlad from '../images/vlad.jpg'

export default function Slider() {
  return ( 
    <>
        <Carousel>
            <CarouselItem style={{'max-height': '685px'}}>
                <img className='d-block img-fluid' src={kostya} alt='KOSTYA'/> 
                <Carousel.Caption>
                  <h3>Project Manager</h3>
                  <p>Чернявский Константин</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{'max-height': '685px'}}>
                <img className='d-block  img-fluid' src={vlad} alt='KOSTYA'/> 
                <Carousel.Caption>
                  <h3>Backend Developer</h3>
                  <p>Акопян Владислав</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{'max-height': '685px'}}>
                <img className='d-block img-fluid' src={serega} alt='KOSTYA'/> 
                <Carousel.Caption>
                  <h3>Frontend Developer</h3>
                  <p>Ли Сергей</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{'max-height': '685px'}}>
                <img className='d-block img-fluid' src={sveta} alt='KOSTYA'/> 
                <Carousel.Caption>
                  <h3>Designer</h3>
                  <p>Колесова Светлана</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{'max-height': '685px'}}>
                <img className='d-block img-fluid' src={sanya} alt='KOSTYA'/> 
                <Carousel.Caption>
                  <h3>Designer</h3>
                  <p>Ткаченко Александр</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{'max-height': '685px'}}>
                <img className='d-block img-fluid' src={nikita} alt='KOSTYA'/> 
                <Carousel.Caption>
                  <h3>DBA</h3>
                  <p>Айропетян Никита</p>
                </Carousel.Caption>
            </CarouselItem>

        </Carousel>
    </>
  )
}

