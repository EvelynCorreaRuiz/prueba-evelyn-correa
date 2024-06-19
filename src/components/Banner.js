import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Banner.css';
import bannerImage from '../banner.png'; 

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <Container className="banner-content text-center">
        <p className="pre-title">Texto previo al título</p>
        <h1 className="main-title">Título banner<br></br>principal</h1>
        <Button className="cta-button">Enviar</Button>
      </Container>
    </div>
  );
};

export default Banner;
